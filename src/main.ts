import indexOf from './algorithm/indexOf'
import arrayGenerator from './utils/arrayGenerator'

function main() {
  const arr = arrayGenerator(100000)

  console.time('计时')
  indexOf(arr, 16)
  console.timeEnd('计时')
}

main()
