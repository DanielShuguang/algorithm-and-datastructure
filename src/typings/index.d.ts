export type CompareFunc<T> = (a: T, b: T) => number

export interface DataStruct {
  /** 判空 */
  isEmpty(): boolean
  /** 元素数量 */
  getSize(): number
  /** 以字符串形式输出 */
  toString(): string
}
