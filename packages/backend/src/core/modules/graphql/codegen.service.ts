import { join } from 'node:path'
import { env } from 'node:process'
import { generate, loadCodegenConfig, type LoadCodegenConfigResult } from '@graphql-codegen/cli'
import { Injectable, OnModuleInit } from '@nestjs/common'
import { rootDir } from '../../../utils/metaHelper/metaHelper.ts'

@Injectable()
export class CodegenService implements OnModuleInit {
  async onModuleInit(): Promise<void> {
    if (env.NODE_ENV !== 'development') {
      return
    }

    const codegenConfig: LoadCodegenConfigResult = await loadCodegenConfig({
      configFilePath: join(rootDir, 'codegen.ts'),
    })

    await generate(codegenConfig.config, true)
  }
}
