import type { Express, Request as ExpressRequest, Response as ExpressResponse, NextFunction } from 'express'
import { join } from 'node:path'
import { env } from 'node:process'
import { Server } from '@angular-nestjs-graphql-template/frontend-serve'
import { AngularNodeAppEngine, createNodeRequestHandler, isMainModule, writeResponseToNodeResponse } from '@angular/ssr/node'

const browserDistFolder: string = join(import.meta.dirname, '../browser')
const angularApp: AngularNodeAppEngine = new AngularNodeAppEngine({
  allowedHosts: [
    'localhost',
    '127.0.0.1',
  ],
})

function handleServerSideRenderMiddleware(req: ExpressRequest, res: ExpressResponse, next: NextFunction): void {
  angularApp
    .handle(req)
    .then((response: Response | null): void | Promise<void> =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next)
}

const server: Server = Server.instance({
  staticDir: browserDistFolder,
  ssrMiddleware: handleServerSideRenderMiddleware,
})

/* eslint-disable-next-line dot-notation */
if (isMainModule(import.meta.url) || env['pm_id']) {
  server.start()
}

export const reqHandler: Express = createNodeRequestHandler(server.app)
