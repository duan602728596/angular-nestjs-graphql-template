import type { TestingModule } from '@nestjs/testing'
import { Test } from '@nestjs/testing'
import { MilitaryGeneralInformationService } from './military-general-information.service.js'

describe('militaryGeneralInformationService', (): void => {
  let service: MilitaryGeneralInformationService

  beforeEach(async (): Promise<void> => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MilitaryGeneralInformationService],
    }).compile()

    service = module.get<MilitaryGeneralInformationService>(MilitaryGeneralInformationService)
  })

  it('should be defined', (): void => {
    expect(service).toBeDefined()
  })
})
