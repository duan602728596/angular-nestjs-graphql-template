import { Module } from '@nestjs/common'
import { MilitaryGeneralInformationResolver } from './military-general-information.resolver.js'
import { MilitaryGeneralInformationService } from './military-general-information.service.js'

@Module({
  providers: [
    MilitaryGeneralInformationResolver,
    MilitaryGeneralInformationService,
  ],
})
export class MilitaryGeneralInformationModule {}
