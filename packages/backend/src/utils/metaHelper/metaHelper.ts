import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

export interface IMetaHelperReturn {
  __dirname: string
  __filename: string
}

/**
 * 帮助当前文件得到__dirname
 * @param {string} url
 * @return {IMetaHelperReturn}
 */
export function metaHelper(url: string): IMetaHelperReturn {
  const _filename: string = fileURLToPath(url)
  const _dirname: string = dirname(_filename)

  return { __dirname: _dirname, __filename: _filename }
}

const { __dirname }: IMetaHelperReturn = metaHelper(import.meta.url)
export const rootDir: string = join(__dirname, '../../..')
