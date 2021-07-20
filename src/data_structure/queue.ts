interface Queue<T> {
  /** 队列元素个数 */
  getSize(): number
  /** 判空 */
  isEmpty(): boolean
  /** 入队操作 */
  enqueue(e: T): void
  /** 出队操作 */
  dequeue(): T | undefined
  /** 获取队首 */
  getFront(): T | undefined
}

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
    this.array.forEach((item, i) => {
      res += item
      if (i !== this.getSize() - 1) {
        res += ', '
      }
    })
    res += '] tail'
    return res
  }
}

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
    if ((this.tail + 1) % this.data.length === this.front) {
      this.resize(this.getCapacity() * 2)
    }
    this.data[this.tail] = e
    this.tail = (this.tail + 1) % this.getCapacity()
    this.size++
  }

  private resize = (newCapacity: number) => {
    const newData = new Array<T>(newCapacity + 1)
    for (let i = 0; i < this.size; i++) {
      newData[i] = this.data[(this.front + i) % this.getCapacity()]
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
    this.size--
    this.front = (this.front + 1) % this.data.length
    if (this.size === this.getCapacity() / 4 && this.getCapacity() / 2 !== 0) {
      this.resize(this.getCapacity() / 2)
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
