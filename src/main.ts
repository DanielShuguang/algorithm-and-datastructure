import { generateRandomArray } from './utils/arrayGenerator'
import { sortTest } from './utils/sortingHelper'

function main() {
  const arr = generateRandomArray(100000)

  // sortTest('selectionSort', arr)
  sortTest('insertionSort', arr)
  console.time('计时 - System Sort')
}

main()
