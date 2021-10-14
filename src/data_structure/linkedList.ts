import { DataStruct } from '../typings'

export class LinkedNode<T> {
  data?: T
  next?: LinkedNode<T>

  constructor(e?: T, next?: LinkedNode<T>) {
    this.data = e
    this.next = next
  }
}

export class LinkedList<T> implements DataStruct {
  private dummyHead: LinkedNode<T>
  private size: number

  constructor() {
    this.dummyHead = new LinkedNode()
    this.size = 0
  }

  getSize = () => {
    return this.size
  }

  isEmpty = () => {
    return this.size === 0
  }

  /**
   * 在链表头添加新元素
   * @param e
   */
  addFirst = (e: T) => {
    this.add(0, e)
  }

  /**
   * 添加新元素
   * @param index
   * @param e
   * @returns
   */
  add = (index: number, e: T) => {
    if (index < 0 || index > this.size) {
      return
    }
    let prev = this.dummyHead
    for (let i = 0; i < index && prev.next; i++) {
      prev = prev.next
    }
    prev.next = new LinkedNode(e, prev.next)
    this.size++
  }

  /**
   * 在链表尾部添加元素
   * @param e
   */
  addLast = (e: T) => {
    this.add(this.size, e)
  }

  get = (index: number) => {
    if (index < 0 || index >= this.size) {
      return
    }

    let current = this.dummyHead.next
    for (let i = 0; i < index; i++) {
      current = current?.next
    }
    return current?.data
  }

  getFirst = () => {
    return this.get(0)
  }

  getLast = () => {
    this.get(this.size - 1)
  }

  set = (index: number, e: T) => {
    if (index < 0 || index >= this.size) {
      return
    }

    let current = this.dummyHead.next
    for (let i = 0; i < index; i++) {
      current = current?.next
    }
    current && (current.data = e)
  }

  contains = (e: T) => {
    let current = this.dummyHead.next
    while (current) {
      if (current.data === e) {
        return true
      }
      current = current.next
    }
    return false
  }

  remove = (index: number) => {
    if (index < 0 || index >= this.size) {
      return
    }

    let prev = this.dummyHead
    for (let i = 0; i < index && prev.next; i++) {
      prev = prev.next
    }
    const retNode = prev.next
    prev.next = retNode?.next
    retNode && (retNode.next = undefined)
    this.size--
    return retNode?.data
  }

  removeFirst = () => {
    return this.remove(0)
  }

  removeLast = () => {
    return this.remove(this.size - 1)
  }

  toString = () => {
    let res = ''
    let current = this.dummyHead.next
    while (current) {
      res += current.data + '->'
      current = current.next
    }
    res += 'NULL'

    return res
  }
}
