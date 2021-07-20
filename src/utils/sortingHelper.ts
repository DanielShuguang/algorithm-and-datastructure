import { insertionSort } from '../algorithm/insertionSort'
import { selectionSort } from '../algorithm/selectionSort'
import { CompareFunc } from '../typings'
import { minimum } from './minimum'

export type SortType = 'selectionSort' | 'insertionSort'

function isSorted<T>(arr: T[], compareFn: CompareFunc<T> = minimum) {
  for (let i = 1; i < arr.length; i++) {
    if (compareFn(arr[i - 1], arr[i]) > 0) {
      return false
    }
  }
  return true
}

function sortTest<T>(sortname: SortType, arr: T[], compareFn?: CompareFunc<T>) {
  console.time('计时 - ' + sortname)
  if (sortname === 'selectionSort') {
    selectionSort(arr, compareFn)
  } else if (sortname === 'insertionSort') {
    insertionSort(arr, compareFn)
  }
  console.timeEnd('计时 - ' + sortname)

  if (!isSorted(arr, compareFn)) {
    throw new Error('排序失败')
  }
}

export { isSorted, sortTest }
