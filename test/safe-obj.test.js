import { SafeObject } from '../index.js'

describe('non object target', () => {
  it('number target return value', () => {
    const target = 99
    expect(new SafeObject(target).getInt(0)).toBe(99)
  })
  it('number target return default value when step in', () => {
    const target = 99
    expect(new SafeObject(target).field('a').getInt(123)).toBe(123)
  })
  it('string target return value', () => {
    expect(new SafeObject('99').getString('test')).toBe('99')
    expect(new SafeObject('abc').getString('test')).toBe('abc')
  })
  it('string target return default value when step in', () => {
    expect(new SafeObject('99').field('a').getString('test')).toBe('test')
    expect(new SafeObject('abc').field('trump').getString('test')).toBe('test')
  })
  it('array target return value', () => {
    expect(new SafeObject([]).getList([1,2,3])).toStrictEqual([])
    expect(new SafeObject(['a', 'b', 'c']).getList([1,2,3])).toStrictEqual(['a', 'b', 'c'])
  })
  it('array target return default value when step in', () => {
    expect(new SafeObject([]).field('a').getList([1,2,3])).toStrictEqual([1,2,3])
    expect(new SafeObject(['a', 'b', 'c']).field('a').getList([1,2,3])).toStrictEqual([1,2,3])
  })
  it('boolean target return value', () => {
    expect(new SafeObject(true).getBool(true)).toBe(true)
    expect(new SafeObject(false).getBool(false)).toBe(false)
  })
  it('boolean target return default value when step in', () => {
    expect(new SafeObject(true).field('a').getBool(true)).toBe(true)
    expect(new SafeObject(true).field('a').getBool(false)).toBe(false)
  })
  it('null target return value', () => {
    expect(new SafeObject(null).getNull(0)).toBeNull()
  })
  it('null target return default value when step in', () => {
    expect(new SafeObject(null).field('a').getNull(null)).toBeNull()
  })
})

describe('undefined target', () => {
  it('return default value', () => {
    expect(new SafeObject(undefined).getInt(123)).toBe(123)
    expect(new SafeObject(undefined).getString('123')).toBe('123')
    expect(new SafeObject(undefined).getInt(123)).toBe(123)
    expect(new SafeObject(undefined).field('a').getInt(123)).toBe(123)
    expect(new SafeObject(undefined).field('a').field('b').getInt(123)).toBe(123)
  })
})

describe('one level object target', () => {
  it('access valid field with expected type', () => {
    const target = {
      a: 1,
      b: 2
    }
    expect(new SafeObject(target).field('a').getInt(0)).toBe(1)
    expect(new SafeObject(target).field('a').getInt(999)).toBe(1)
    expect(new SafeObject(target).field('b').getInt(0)).toBe(2)
  })
  it('access invalid field', () => {
    const target = {
      a: 1,
      b: 2,
      d: undefined
    }
    expect(new SafeObject(target).field('c').getInt(999)).toBe(999)
    expect(new SafeObject(target).field('d').getInt(0)).toBe(0)
  })
  it('access invalid field with unexpected type', () => {
    const target = {
      a: 1,
      b: 2,
      d: undefined
    }
    expect(new SafeObject(target).field('a').getString('999')).toBe('999')
    expect(new SafeObject(target).field('b').getString('abc')).toBe('abc')
  })
  it('access invalid field with unexpected type', () => {
    const target = {
      a: 1,
      b: 2,
      d: undefined
    }
    expect(new SafeObject(target).field('c').getString('999')).toBe('999')
    expect(new SafeObject(target).field('d').getString('abc')).toBe('abc')
  })
})

describe('multiple levels object target', () => {
  const target = {
    a: 1,
    b: 2,
    c: {
      d: 3,
      e: {
        f: 4,
        g: {
          h: {
            i: {
              j: 5,
              k: 6
            }
          }
        }
      }
    }
  }
  it('access valid field', () => {
    expect(new SafeObject(target).field('c').field('e').field('g').field('h').field('i').field('j').getInt(0)).toBe(5)
    expect(new SafeObject(target).field('c').field('e').field('g').field('h').field('i').field('k').getInt(0)).toBe(6)
    expect(new SafeObject(target).field('c').field('e').field('f').getInt(0)).toBe(4)
    expect(new SafeObject(target).field('c').field('d').getInt(0)).toBe(3)
  })
  it('access invalid field', () => {
    expect(new SafeObject(target).field('c').field('wow').getInt(123)).toBe(123)
  })
})