import { Module } from '@nestjs/common'
import { MilitaryGeneralInformationService } from '../military-general-information/military-general-information.service.js'
import { MilitaryGeneralsResolver, MilitaryGeneralItemResolver } from './military-generals.resolver.js'
import { MilitaryGeneralsService } from './military-generals.service.js'

@Module({
  providers: [
    MilitaryGeneralsResolver,
    MilitaryGeneralItemResolver,
    MilitaryGeneralsService,
    MilitaryGeneralInformationService,
  ],
})
export class MilitaryGeneralsModule {}
