interface Stack<T> {
  getSize(): number
  isEmpty(): boolean
  push(e: T): void
  pop(): T | undefined
  peek(): T
}

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
    if (this.array.length) {
      throw new RangeError('Get failed. Index is illegal.')
    }
    return this.array[this.getSize() - 1]
  }

  toString = () => {
    let res = `Stack: [`
    this.array.forEach((item, i) => {
      res += item
      if (i !== this.getSize() - 1) {
        res += ', '
      }
    })
    res += '] top'
    return res
  }
}
