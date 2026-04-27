import { Module } from '@nestjs/common';
import { MilitaryGeneralsService } from './military-generals.service.js';
import { MilitaryGeneralsResolver, MilitaryGeneralItemResolver } from './military-generals.resolver.js';
import { MilitaryGeneralInformationService } from '../military-general-information/military-general-information.service.js';

@Module({
  providers: [
    MilitaryGeneralsResolver,
    MilitaryGeneralItemResolver,
    MilitaryGeneralsService,
    MilitaryGeneralInformationService
  ]
})
export class MilitaryGeneralsModule {}