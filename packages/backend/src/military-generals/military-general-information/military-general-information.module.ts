import { Module } from '@nestjs/common';
import { MilitaryGeneralInformationService } from './military-general-information.service.js';
import { MilitaryGeneralInformationResolver } from './military-general-information.resolver.js';

@Module({
  providers: [
    MilitaryGeneralInformationResolver,
    MilitaryGeneralInformationService
  ]
})
export class MilitaryGeneralInformationModule {}