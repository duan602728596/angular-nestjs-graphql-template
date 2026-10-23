import { existsSync } from 'node:fs'
import { join } from 'node:path'
import compression from 'compression'
import express, { type Express, type NextFunction, type Request, type Response } from 'express'
import mime from 'mime'
import { type IMetaHelperReturn, metaHelper } from './utils.ts'

const { __dirname }: IMetaHelperReturn = metaHelper(import.meta.url)
const templateDir: string = join(__dirname, '../template')

type TMiddlewareFunc = (req: Request, res: Response, next: NextFunction) => any

export interface IServerOptions {
  /** 静态资源服务路径 */
  staticDir: string
  /** 是否是ssr */
  ssrMiddleware?: TMiddlewareFunc
  /** 端口 */
  port?: number
}

/**
 * 启动服务
 */
export class Server {
  public app: Express = express()
  public staticDir: string
  public indexFile: string
  public handleServerSideRenderMiddleware?: TMiddlewareFunc
  public port: number
  #pageNotFound404File: string = join(templateDir, '404.html')

  static instance(options: IServerOptions): Server {
    return new Server(options)
  }

  constructor(options: IServerOptions) {
    this.staticDir = options.staticDir
    this.indexFile = this.getIndexFile()
    this.handleServerSideRenderMiddleware = options.ssrMiddleware
    this.port = options.port ?? 5_160
    this.middlewareInit()
  }

  // 监听中间件
  middlewareInit(): void {
    // 压缩
    this.app.use(compression({ threshold: 0 }))

    // 静态资源
    this.app.use(express.static(this.staticDir, {
      index: false,
      fallthrough: true,
      maxAge: 365 * 24 * (60 ** 2) * (10 ** 3),
    }))

    // 路由处理
    this.app.use(this.handleServerSideRenderMiddleware ?? this.handleAllRoutesMiddleware)

    // 404处理
    this.app.use(this.handle404NotFoundRouteMiddleware)
  }

  // 非SSR环境下的路由处理
  handleAllRoutesMiddleware: TMiddlewareFunc = (req: Request, res: Response, next: NextFunction): void => {
    const mimeType: string | null = mime.getType(req.url)

    if (req.method !== 'GET' || !(!mimeType || mimeType === 'text/html')) {
      return next()
    }

    res
      .setHeader('Content-Type', 'text/html; charset=utf-8')
      .sendFile(this.indexFile, (error: Error | undefined): void => {
        if (error)
          next(error)
      })
  }

  // 404
  handle404NotFoundRouteMiddleware: TMiddlewareFunc = (req: Request, res: Response, next: NextFunction): void => {
    res
      .status(404)
      .setHeader('Content-Type', 'text/html; charset=utf-8')
      .sendFile(this.#pageNotFound404File, (error: Error | undefined): void => {
        if (error)
          next(error)
      })
  }

  // 启动
  start(): void {
    this.app.listen(this.port, '0.0.0.0', (): void => {
      console.log(`Start: http://localhost:${this.port}`)
    })
  }

  // 获取indexFile
  getIndexFile(): string {
    const indexFile: string = join(this.staticDir, 'index.html')

    if (existsSync(indexFile))
      return indexFile

    const indexCsrFile: string = join(this.staticDir, 'index.csr.html')
    return existsSync(indexCsrFile) ? indexCsrFile : indexFile
  }
}
