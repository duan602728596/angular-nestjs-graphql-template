import { Test, type TestingModule } from '@nestjs/testing'
import { MilitaryGeneralsService } from './military-generals.service.js'

describe('militaryGeneralsService', (): void => {
  let service: MilitaryGeneralsService

  beforeEach(async (): Promise<void> => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MilitaryGeneralsService],
    }).compile()

    service = module.get<MilitaryGeneralsService>(MilitaryGeneralsService)
  })

  it('should be defined', (): void => {
    expect(service).toBeDefined()
  })
})
