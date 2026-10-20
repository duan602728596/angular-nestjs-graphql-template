import { existsSync } from 'node:fs'

/* 验证字符串是否为空 */
export function nil(value: string | null | undefined, errorMessage: string): string {
  if (!value)
    throw new Error(errorMessage)
  return value
}

/* 验证文件是否存在 */
export function exists(value: string, errorMessage: string): string {
  if (!existsSync(value))
    throw new Error(errorMessage)
  return value
}
