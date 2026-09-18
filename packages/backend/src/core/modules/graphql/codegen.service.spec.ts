import type { TestingModule } from '@nestjs/testing'
import { Test } from '@nestjs/testing'
import { CodegenService } from './codegen.service.js'

describe('codegenService', (): void => {
  let service: CodegenService

  beforeEach(async (): Promise<void> => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CodegenService],
    }).compile()

    service = module.get<CodegenService>(CodegenService)
  })

  it('should be defined', (): void => {
    expect(service).toBeDefined()
  })
})
