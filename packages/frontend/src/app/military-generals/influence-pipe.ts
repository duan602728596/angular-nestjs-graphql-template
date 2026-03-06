import { Pipe, PipeTransform } from '@angular/core';
import { InfluencesEnum } from '@backend/src/enum/influences.enum/influences.enum.js';
import type { InfluencesEnum as InfluencesEnumKey } from '@backend/graphql/schema.js';

@Pipe({ name: 'influence' })
export class InfluencePipe implements PipeTransform {
  transform(value: InfluencesEnumKey): InfluencesEnum {
    return InfluencesEnum[value];
  }
}