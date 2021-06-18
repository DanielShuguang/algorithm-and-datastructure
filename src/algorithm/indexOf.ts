import equals from '../utils/equals'

type EqualFn<T> = (a: T, b: T) => boolean

/**
 * 线性查找方法
 * @param array 待查找的数组
 * @param target 需要查找的目标值
 * @param equalFn 设置独特的相等判断方法
 * @returns
 */
function indexOf<T>(array: T[], target: T, equalFn: EqualFn<T> = equals) {
  for (let i = 0; i < array.length; i++) {
    if (equalFn(array[i], target)) {
      return i
    }
  }
  return -1
}

export default indexOf
