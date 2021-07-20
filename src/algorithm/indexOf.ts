import { equals } from '../utils/equals'

type EqualFn<T> = (a: T, b: T) => boolean

/**
 * 线性查找方法
 * @param array 待查找的数组
 * @param target 需要查找的目标值
 * @param equalFn 自定义相等判断方法
 * @description 时间复杂度 O(n)
 * @returns
 */
export function indexOf<T>(
  array: T[],
  target: T,
  equalFn: EqualFn<T> = equals
) {
  const length = array.length

  for (let i = 0; i < length; i++) {
    if (equalFn(array[i], target)) {
      return i
    }
  }
  return -1
}
