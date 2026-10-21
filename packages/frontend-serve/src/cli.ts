import { join } from 'node:path'
import { cwd } from 'node:process'
import { parseArgs } from 'node:util'
import { Server } from './index.ts'
import { exists, nil } from './verify.ts'

/**
 * cli入口
 */

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
const port: number = Number(args.port)

const server: Server = new Server({
  staticDir: absStaticDir,
  port,
})

server.start()
