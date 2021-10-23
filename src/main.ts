import { BinaryTree } from './data_structure/binaryTree'

function main() {
  const tree = new BinaryTree()
  const arr = [1, 2, 3, 4, 5, 6, 7]
  tree.createByArray(arr)

  tree.frontShow()
}

main()
