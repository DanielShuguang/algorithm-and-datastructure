/**
 * 深拷贝
 * @param value
 * @returns
 */
export function cloneDeep<T>(value: T): T {
  if (typeof value !== 'object') {
    return value
  }
  return JSON.parse(JSON.stringify(value))
}
