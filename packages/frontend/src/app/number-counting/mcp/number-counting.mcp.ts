import type { JsonSchemaNull } from '@mcp-b/webmcp-types'
import type { IMcpContentExecuteReturnType } from '#types/angularTypes'
import { inject, type WebMcpToolDescriptor } from '@angular/core'
import { NumberCountingStore, type TNumberCountingStoreTypes } from '../number-counting.store'

export const numberCountingAddMcp: WebMcpToolDescriptor<JsonSchemaNull> = {
  name: 'number_counting_add',
  description: '执行add操作',
  inputSchema: {
    type: 'null',
  },
  execute(): IMcpContentExecuteReturnType {
    const numberCountingStore: TNumberCountingStoreTypes['Store'] = inject(NumberCountingStore)

    numberCountingStore.add()
    return {
      content: [{ type: 'text', text: 'number_counting_add执行成功' }],
    }
  },
}

export const numberCountingSubMcp: WebMcpToolDescriptor<JsonSchemaNull> = {
  name: 'number_counting_sub',
  description: '执行sub操作',
  inputSchema: {
    type: 'null',
  },
  execute(): IMcpContentExecuteReturnType {
    const numberCountingStore: TNumberCountingStoreTypes['Store'] = inject(NumberCountingStore)

    numberCountingStore.sub()
    return {
      content: [{ type: 'text', text: 'number_counting_sub执行成功' }],
    }
  },
}
