/**
 * 生成顺序整数数组
 * @param n 数组长度
 * @returns
 */
function generateOrderedArray(n: number) {
  const arr: number[] = []

  for (let i = 0; i < n; i++) {
    arr[i] = i
  }

  return arr
}

/**
 * 生成随机整数数组
 * @param n 数组长度
 * @returns
 */
function generateRandomArray(n: number) {
  const arr: number[] = []
  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * n)
  }
  return arr
}

export { generateOrderedArray, generateRandomArray }
