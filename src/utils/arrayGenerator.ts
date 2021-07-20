/**
 * 生成顺序整数数组
 * @param n 数组长度
 * @returns
 */
export function generateOrderedArray(n: number) {
  const arr: number[] = []

  for (let i = 0; i < n; i++) {
    arr[i] = i
  }

  return arr
}

/**
 * 生成随机整数数组
 * @param len 数组长度
 * @returns
 */
export function generateRandomArray(len: number) {
  const arr: number[] = []

  for (let i = 0; i < len; i++) {
    arr[i] = Math.floor(Math.random() * len)
  }

  return arr
}
