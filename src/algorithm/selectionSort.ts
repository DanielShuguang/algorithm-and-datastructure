import { CompareFunc } from '../typings'
import { minimum } from '../utils/minimum'
import { swap } from '../utils/swap'

/**
 * 选择排序
 * @param array
 * @param compareFn 自定义大小比较函数
 * @description 时间复杂度 O(n^2)
 */
export function selectionSort<T>(
  array: T[],
  compareFn: CompareFunc<T> = minimum
) {
  const length = array.length

  for (let i = 0; i < length; i++) {
    let minIndex = i
    for (let j = i; j < length; j++) {
      if (compareFn(array[j], array[minIndex]) < 0) {
        minIndex = j
      }
    }
    swap(array, minIndex, i)
  }
}
