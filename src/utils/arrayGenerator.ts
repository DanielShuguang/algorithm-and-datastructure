/**
 * 快速生成整数数组
 * @param n 数组长度
 * @returns
 */
function arrayGenerator(n: number) {
  const arr: number[] = []

  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * n)
  }

  return arr
}

export default arrayGenerator
