import { Test, TestingModule } from '@nestjs/testing';
import { CodegenService } from './codegen.service.js';

describe('CodegenService', (): void => {
  let service: CodegenService;

  beforeEach(async (): Promise<void> => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CodegenService]
    }).compile();

    service = module.get<CodegenService>(CodegenService);
  });

  it('should be defined', (): void => {
    expect(service).toBeDefined();
  });
});