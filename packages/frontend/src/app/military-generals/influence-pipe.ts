import { Pipe, PipeTransform } from '@angular/core';
import { InfluencesEnum } from '@angular-nestjs-graphql-template/shared/enum/influences.enum.js';
import type { InfluencesEnum as InfluencesEnumKey } from '@backend/graphql/schema.js';

@Pipe({ name: 'influence' })
export class InfluencePipe implements PipeTransform {
  transform(value: InfluencesEnumKey): InfluencesEnum {
    return InfluencesEnum[value];
  }
}