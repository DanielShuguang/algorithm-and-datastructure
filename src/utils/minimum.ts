/**
 * 比较大小
 * @param a
 * @param b
 * @returns -1 为 a < b
 */
export function minimum<T>(a: T, b: T) {
  if (a < b) {
    return -1
  } else if (a === b) {
    return 0
  }
  return 1
}
