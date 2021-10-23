import { DataStruct } from '../typings'

export class TreeNode {
  right?: TreeNode
  left?: TreeNode
  value: number

  constructor(value: number) {
    this.value = value
  }
}

export class BinaryTree implements DataStruct {
  root?: TreeNode
  private length = 0

  insert(value: number) {
    if (!this.root) {
      this.root = new TreeNode(value)
    } else {
      let currentNode = this.root
      while (true) {
        if (value > currentNode.value) {
          if (currentNode.right) {
            currentNode = currentNode.right
            continue
          } else {
            currentNode.right = new TreeNode(value)
            break
          }
        } else {
          if (currentNode.left) {
            currentNode = currentNode.left
            continue
          } else {
            currentNode.left = new TreeNode(value)
            break
          }
        }
      }
    }

    return ++this.length
  }

  createByArray(array: number[]) {
    const rootList: TreeNode[] = []
    const len = array.length
    let index = 0
    for (let i = 0; i < len; i++) {
      rootList[i] = new TreeNode(array[i])
    }

    for (let i = 0; i < len / 2 - 1; i++) {
      if (2 * i + 1 < len) {
        rootList[i].left = rootList[2 * i + 1]
      }
      if (2 * i + 2 < len) {
        rootList[i].right = rootList[2 * i + 2]
      }
    }
    this.root = rootList[0]
    this.length = len
  }

  /** 前序遍历 */
  frontShow(node = this.root) {
    if (!node) {
      return
    }
    console.log(node.value)
    node.left && this.frontShow(node.left)
    node.right && this.frontShow(node.right)
  }

  isEmpty() {
    return this.length === 0
  }

  getSize() {
    return this.length
  }

  toString() {
    return ''
  }
}
