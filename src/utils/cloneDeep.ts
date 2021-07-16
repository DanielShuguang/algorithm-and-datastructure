/**
 * 深拷贝
 * @param value 
 * @returns 
 */
function cloneDeep<T>(value: T): T {
  if (typeof value !== 'object') {
    return value
  }
  return JSON.parse(JSON.stringify(value))
}

export default cloneDeep
