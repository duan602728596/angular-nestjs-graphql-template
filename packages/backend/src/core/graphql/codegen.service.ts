import { join } from 'node:path';
import { env, cwd } from 'node:process';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { generate, loadCodegenConfig, type LoadCodegenConfigResult } from '@graphql-codegen/cli';

@Injectable()
export class CodegenService implements OnModuleInit {
  async onModuleInit(): Promise<void> {
    if (env.NODE_ENV !== 'development') {
      return;
    }

    const codegenConfig: LoadCodegenConfigResult = await loadCodegenConfig({
      configFilePath: join(cwd(), 'codegen.ts')
    });

    await generate(codegenConfig.config, true);
  }
}