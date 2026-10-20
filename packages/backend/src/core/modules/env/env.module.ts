import { join } from 'node:path'
import { env } from 'node:process'
import { type DynamicModule, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { rootDir } from '../../../utils/metaHelper/metaHelper.ts'

interface IEnvModuleOptions {
  test?: boolean
}

/**
 * 读取env文件
 */
@Module({})
export class EnvModule {
  static forRoot(options?: IEnvModuleOptions): DynamicModule {
    const isTest: boolean = !!options?.test
    const envFile: string = isTest ? 'test' : (env.NODE_ENV || 'production')

    return {
      module: EnvModule,
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: [
            `.env.${envFile}.locale`,
            `.env.${envFile}`,
            '.env.locale',
            '.env',
          ].map((p: string): string => join(rootDir, p)),
        }),
      ],
    }
  }
}
