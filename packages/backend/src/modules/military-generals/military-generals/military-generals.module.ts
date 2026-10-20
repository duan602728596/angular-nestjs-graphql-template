import { Module } from '@nestjs/common'
import { MilitaryGeneralInformationService } from '../military-general-information/military-general-information.service.ts'
import { MilitaryGeneralItemResolver, MilitaryGeneralsResolver } from './military-generals.resolver.ts'
import { MilitaryGeneralsService } from './military-generals.service.ts'

@Module({
  providers: [
    MilitaryGeneralsResolver,
    MilitaryGeneralItemResolver,
    MilitaryGeneralsService,
    MilitaryGeneralInformationService,
  ],
})
export class MilitaryGeneralsModule {}
