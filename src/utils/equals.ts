/**
 * 比较两个值是否相等
 * @param a
 * @param b
 * @returns
 */
function equals<T>(a: T, b: T) {
  if (a instanceof Object) {
    return isObjectValueEqual(a, b)
  }
  return a === b
}

function hasOwnProperty<T>(obj: T, key: PropertyKey) {
  return Object.prototype.hasOwnProperty.call(obj, key)
}

/**
 * 深度对比对象的值
 * @param a
 * @param b
 * @returns
 */
function isObjectValueEqual<T extends Record<string, any>>(a: T, b: T) {
  const aProps = Object.getOwnPropertyNames(a)
  const bProps = Object.getOwnPropertyNames(b)
  if (aProps.length !== bProps.length) {
    return false
  }
  for (let i = 0; i < aProps.length; i++) {
    const propName = aProps[i]
    const propA = a[propName]
    const propB = b[propName]

    if (!hasOwnProperty(a, propName)) {
      return false
    }
    if (propA instanceof Object) {
      if (!isObjectValueEqual(propA, propB)) {
        return false
      }
    } else if (propA !== propB) {
      return false
    }
  }
  return true
}

export default equals
