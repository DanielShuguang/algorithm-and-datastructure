import { DataStruct } from '../typings'
import { LinkedNode } from './linkedList'
import { ArrayStack } from './stack'

interface Queue<T> extends DataStruct {
  /** 入队操作 */
  enqueue(e: T): void
  /** 出队操作 */
  dequeue(): T | undefined
  /** 获取队首 */
  getFront(): T | undefined
}

/** 数组队列 */
export class ArrayQueue<T> implements Queue<T> {
  private array: T[]

  constructor() {
    this.array = []
  }

  getSize = () => {
    return this.array.length
  }

  isEmpty = () => {
    return this.getSize() === 0
  }

  enqueue = (e: T) => {
    this.array.push(e)
  }

  dequeue = () => {
    return this.array.shift()
  }

  getFront = () => {
    return this.array[0]
  }

  toString = () => {
    let res = 'Queue: front ['
    const len = this.getSize()
    this.array.forEach((item, i) => {
      res += item
      if (i !== len - 1) {
        res += ', '
      }
    })
    res += '] tail'
    return res
  }
}

/** 环形队列 */
export class LoopQueue<T> implements Queue<T> {
  private data: T[]
  private front: number
  private tail: number
  private size: number

  constructor(capacity = 10) {
    this.data = new Array<T>(capacity)
    this.front = 0
    this.tail = 0
    this.size = 0
  }

  getSize = () => {
    return this.size
  }

  getCapacity = () => {
    return this.data.length
  }

  isEmpty = () => {
    return this.front === this.tail
  }

  enqueue = (e: T) => {
    const capacity = this.getCapacity()
    if ((this.tail + 1) % this.data.length === this.front) {
      this.resize(capacity * 2)
    }
    this.data[this.tail] = e
    this.tail = (this.tail + 1) % capacity
    this.size++
  }

  private resize = (newCapacity: number) => {
    const newData = new Array<T>(newCapacity + 1)
    const capacity = this.getCapacity()
    for (let i = 0; i < this.size; i++) {
      newData[i] = this.data[(this.front + i) % capacity]
    }
    this.data = newData
    this.front = 0
    this.tail = this.size
  }

  dequeue = () => {
    if (this.isEmpty()) {
      return
    }
    const ret = this.data[this.front]
    const capacity = this.getCapacity()
    this.size--
    this.front = (this.front + 1) % this.data.length
    if (this.size === capacity / 4 && capacity / 2 !== 0) {
      this.resize(capacity / 2)
    }
    return ret
  }

  getFront = () => {
    if (this.isEmpty()) {
      return
    }
    return this.data[this.front]
  }

  toString = () => {
    let res = `Queue: size = ${this.size}, capacity = ${this.getCapacity()}\n`
    res += 'front ['
    for (let i = this.front; i !== this.tail; i = (i + 1) % this.data.length) {
      res += this.data[i]
      if ((i + 1) % this.data.length !== this.tail) {
        res += ', '
      }
    }
    res += '] tail'
    return res
  }
}

/** 栈实现队列 */
export class StackQueue<T> implements Queue<T> {
  private data: ArrayStack<T>

  constructor() {
    this.data = new ArrayStack<T>()
  }

  enqueue = (e: T) => {
    this.data.push(e)
  }

  dequeue = () => {
    const len = this.getSize()
    const newStack = new ArrayStack<T>()
    let currentItem: T | undefined
    for (let i = 0; i < len; i++) {
      currentItem = this.data.pop()
      if (i < len - 1 && currentItem) {
        newStack.push(currentItem)
      }
    }
    this.data = newStack

    return currentItem
  }

  getSize = () => {
    return this.data.getSize()
  }

  isEmpty = () => {
    return this.data.isEmpty()
  }

  getFront = () => {
    const len = this.getSize()
    const newStack = new ArrayStack<T>()
    let currentItem: T | undefined
    for (let i = 0; i < len; i++) {
      currentItem = this.data.pop()
      currentItem && newStack.push(currentItem)
    }
    this.data = newStack

    return currentItem
  }
}

/** 链表实现队列 */
export class LinkedListQueue<T> implements Queue<T> {
  head?: LinkedNode<T>
  tail?: LinkedNode<T>
  size: number

  constructor() {
    this.size = 0
  }

  getSize = () => {
    return this.size
  }

  isEmpty = () => {
    return this.size === 0
  }

  enqueue = (e: T) => {
    if (!this.tail) {
      this.tail = new LinkedNode(e)
      this.head = this.tail
    } else {
      this.tail.next = new LinkedNode(e)
      this.tail = this.tail.next
    }
    this.size++
  }

  dequeue = () => {
    if (this.isEmpty()) {
      return
    }
    let retNode = this.head
    this.head = this.head?.next
    retNode && (retNode.next = undefined)
    if (!this.head) {
      this.tail = undefined
    }
    this.size--
    return retNode?.data
  }

  getFront = () => {
    if (this.isEmpty()) {
      return
    }
    return this.head?.data
  }

  toString = () => {
    let res = 'Queue: front '
    let current = this.head
    while (current) {
      res += current.data + '->'
      current = current.next
    }
    res += 'NULL tail'
    return res
  }
}
