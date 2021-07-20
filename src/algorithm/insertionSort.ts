import { CompareFunc } from '../typings'
import { cloneDeep } from '../utils/cloneDeep'
import { minimum } from '../utils/minimum'

/**
 * 插入排序
 * @param array
 * @param compareFn 自定义大小比较函数
 * @description 时间复杂度 O(n^2)
 */
export function insertionSort<T>(
  array: T[],
  compareFn: CompareFunc<T> = minimum
) {
  const length = array.length

  for (let i = 1; i < length; i++) {
    let temp = array[i]
    let j: number
    for (j = i; j - 1 >= 0 && compareFn(temp, array[j - 1]) < 0; j--) {
      array[j] = cloneDeep(array[j - 1])
    }
    array[j] = cloneDeep(temp)
  }
}
