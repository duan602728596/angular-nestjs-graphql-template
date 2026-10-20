import { Module } from '@nestjs/common'
import { MilitaryGeneralInformationResolver } from './military-general-information.resolver.ts'
import { MilitaryGeneralInformationService } from './military-general-information.service.ts'

@Module({
  providers: [
    MilitaryGeneralInformationResolver,
    MilitaryGeneralInformationService,
  ],
})
export class MilitaryGeneralInformationModule {}
