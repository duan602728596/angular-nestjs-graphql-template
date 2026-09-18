import type { InfluencesEnum as InfluencesEnumKey } from '@backend/graphql/schema.js'
import { InfluencesEnum } from '@angular-nestjs-graphql-template/shared/enum/influences.enum.js'
import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'influence' })
export class InfluencePipe implements PipeTransform {
  transform(value: InfluencesEnumKey): InfluencesEnum {
    return InfluencesEnum[value]
  }
}
