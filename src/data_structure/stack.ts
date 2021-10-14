import { DataStruct } from '../typings'
import { LinkedList } from './linkedList'
import { ArrayQueue } from './queue'

interface Stack<T> extends DataStruct {
  /** 入栈 */
  push(e: T): void
  /** 出栈 */
  pop(): T | undefined
  /** 获取栈顶元素 */
  peek(): T | undefined
}

/** 数组栈 */
export class ArrayStack<T> implements Stack<T> {
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

  push = (e: T) => {
    this.array.push(e)
  }

  pop = () => {
    return this.array.pop()
  }

  peek = () => {
    if (!this.array.length) {
      return
    }
    return this.array[this.getSize() - 1]
  }

  toString = () => {
    let res = `Stack: [`
    const len = this.getSize()
    this.array.forEach((item, i) => {
      res += item
      if (i !== len - 1) {
        res += ', '
      }
    })
    res += '] top'
    return res
  }
}

/** 队列实现栈 */
export class QueueStack<T> implements Stack<T> {
  private queue: ArrayQueue<T>

  constructor() {
    this.queue = new ArrayQueue<T>()
  }

  getSize = () => {
    return this.queue.getSize()
  }

  isEmpty = () => {
    return this.queue.isEmpty()
  }

  peek = () => {
    const len = this.getSize()
    const newQueue = new ArrayQueue<T>()
    let currentItem: T | undefined

    for (let i = 0; i < len; i++) {
      currentItem = this.queue.dequeue()
      currentItem && newQueue.enqueue(currentItem)
    }
    this.queue = newQueue

    return currentItem
  }

  push = (e: T) => {
    this.queue.enqueue(e)
  }

  pop = () => {
    const len = this.getSize()
    const newQueue = new ArrayQueue<T>()
    let currentItem: T | undefined

    for (let i = 0; i < len; i++) {
      currentItem = this.queue.dequeue()
      if (i < len - 1 && currentItem) {
        newQueue.enqueue(currentItem)
      }
    }
    this.queue = newQueue

    return currentItem
  }
}

/** 链表实现栈 */
export class LinkedListStack<T> implements Stack<T> {
  private list: LinkedList<T>

  constructor() {
    this.list = new LinkedList()
  }

  getSize = () => {
    return this.list.getSize()
  }

  isEmpty = () => {
    return this.list.isEmpty()
  }

  push = (e: T) => {
    this.list.addFirst(e)
  }

  pop = () => {
    return this.list.removeFirst()
  }

  peek = () => {
    return this.list.getFirst()
  }

  toString = () => {
    let res = 'Stack: top '
    res += this.list.toString()
    return res
  }
}