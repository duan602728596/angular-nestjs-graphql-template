import { join } from 'node:path'
import { cwd } from 'node:process'
import { parseArgs } from 'node:util'
import compression from 'compression'
import express, { type Express, type NextFunction, type Request, type Response } from 'express'
import { exists, nil } from './verify.ts'

/* ========== 读取配置 ========== */
const { values: args, positionals } = parseArgs({
  options: {
    port: {
      type: 'string',
      default: '5160',
    },
  },
  allowPositionals: true,
})

const rootDir: string = cwd()
const staticDir: string = nil(positionals[0], 'The resource directory must be provided.')
const absStaticDir: string = exists(join(rootDir, staticDir), 'The resource directory does not exist.')
const indexFile: string = join(absStaticDir, 'index.html')
const port: number = Number(args.port)

/* ========== 启动服务 ========== */
const app: Express = express()

// 压缩
app.use(compression({ threshold: 0 }))

// 静态资源
app.use(express.static(absStaticDir, {
  index: false,
  fallthrough: true,
  maxAge: 365 * 24 * (60 ** 2) * (10 ** 3),
}))

// 路由
app.use((req: Request, res: Response, next: NextFunction): void => {
  if (req.method !== 'GET' || !req.accepts('html')) {
    return next()
  }

  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.sendFile(indexFile, (error: Error | undefined): void => {
    if (error)
      next(error)
  })
})

// 404
app.use((req: Request, res: Response): void => {
  res
    .status(404)
    .setHeader('Content-Type', 'text/html; charset=utf-8')
    .send('Not Found')
})

app.listen(port, '0.0.0.0', (): void => {
  console.log(`Start: http://localhost:${port}`)
})
