import type { MilitaryGeneralInformationModel } from './military-general-information.model.ts'
import { Injectable } from '@nestjs/common'
import { militaryGeneralInformationMockData } from './military-general-information.mock.ts'

@Injectable()
export class MilitaryGeneralInformationService {
  getMilitaryGeneralInformation(id: number): MilitaryGeneralInformationModel | null {
    return militaryGeneralInformationMockData.find((o: MilitaryGeneralInformationModel): boolean => o.id === id) ?? null
  }
}
