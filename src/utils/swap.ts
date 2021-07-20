/**
 * 交换数组内两个元素的位置
 * @param array
 * @param i
 * @param j
 */
export function swap<T>(array: T[], i: number, j: number) {
  const temp = array[i]
  array[i] = array[j]
  array[j] = temp
}
