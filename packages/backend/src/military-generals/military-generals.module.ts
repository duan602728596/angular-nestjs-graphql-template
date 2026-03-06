import { Module, type Provider } from '@nestjs/common';
import { MilitaryGeneralsService } from './military-generals.service.js';
import { MilitaryGeneralsResolver } from './military-generals.resolver.js';

const _modules: Array<Provider> = [
  MilitaryGeneralsService,
  MilitaryGeneralsResolver
];

@Module({
  providers: _modules,
  exports: _modules
})
export class MilitaryGeneralsModule {}