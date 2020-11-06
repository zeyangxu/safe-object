import { Checker } from '../index.js'

describe('Checker.isBool', () => {
  it('give number return false', () => {
    const flag = false
    expect(Checker.isBool(1)).toBe(flag)
    expect(Checker.isBool(99)).toBe(flag)
    expect(Checker.isBool(-1)).toBe(flag)
    expect(Checker.isBool(111)).toBe(flag)
    expect(Checker.isBool(-999)).toBe(flag)
    expect(Checker.isBool(129341209840281)).toBe(flag)
    expect(Checker.isBool(0x123)).toBe(flag)
  })
  it('give string return false', () => {
    const flag = false
    expect(Checker.isBool('1')).toBe(flag)
    expect(Checker.isBool('99')).toBe(flag)
    expect(Checker.isBool('-1')).toBe(flag)
    expect(Checker.isBool('111')).toBe(flag)
    expect(Checker.isBool('-999')).toBe(flag)
    expect(Checker.isBool('129341209840281')).toBe(flag)
    expect(Checker.isBool('0x123')).toBe(flag)
  })
  it('give boolean return false', () => {
    const flag = true
    expect(Checker.isBool(true)).toBe(flag)
    expect(Checker.isBool(false)).toBe(flag)
  })
  it('give array return false', () => {
    const flag = false
    expect(Checker.isBool([])).toBe(flag)
    expect(Checker.isBool([1,2,3])).toBe(flag)
  })
  it('give object return false', () => {
    const flag = false
    expect(Checker.isBool({})).toBe(flag)
    expect(Checker.isBool({a: 1, b: 2, c: 3})).toBe(flag)
    expect(Checker.isBool({a: 1, b: 2, c: { d: 3, e: 4, f: { g: 5, h: 6}}})).toBe(flag)
  })
  it('give null return false', () => {
    expect(Checker.isBool(null)).toBe(false)
  })
  it('give undefined return false', () => {
    expect(Checker.isBool(undefined)).toBe(false)
  })
})

describe('Checker.isNumber', () => {
  it('give number return true', () => {
    const flag = true
    expect(Checker.isNumber(1)).toBe(flag)
    expect(Checker.isNumber(99)).toBe(flag)
    expect(Checker.isNumber(-1)).toBe(flag)
    expect(Checker.isNumber(111)).toBe(flag)
    expect(Checker.isNumber(-999)).toBe(flag)
    expect(Checker.isNumber(129341209840281)).toBe(flag)
    expect(Checker.isNumber(0x123)).toBe(flag)
  })
  it('give string return false', () => {
    const flag = false
    expect(Checker.isNumber('1')).toBe(flag)
    expect(Checker.isNumber('99')).toBe(flag)
    expect(Checker.isNumber('-1')).toBe(flag)
    expect(Checker.isNumber('111')).toBe(flag)
    expect(Checker.isNumber('-999')).toBe(flag)
    expect(Checker.isNumber('129341209840281')).toBe(flag)
    expect(Checker.isNumber('0x123')).toBe(flag)
  })
  it('give boolean return false', () => {
    const flag = false
    expect(Checker.isNumber(true)).toBe(flag)
    expect(Checker.isNumber(false)).toBe(flag)
  })
  it('give array return false', () => {
    const flag = false
    expect(Checker.isNumber([])).toBe(flag)
    expect(Checker.isNumber([1,2,3])).toBe(flag)
  })
  it('give object return false', () => {
    const flag = false
    expect(Checker.isNumber({})).toBe(flag)
    expect(Checker.isNumber({a: 1, b: 2, c: 3})).toBe(flag)
    expect(Checker.isNumber({a: 1, b: 2, c: { d: 3, e: 4, f: { g: 5, h: 6}}})).toBe(flag)
  })
  it('give null return false', () => {
    expect(Checker.isNumber(null)).toBe(false)
  })
  it('give undefined return false', () => {
    expect(Checker.isNumber(undefined)).toBe(false)
  })
})

describe('Checker.isString', () => {
  it('give number return false', () => {
    const flag = false
    expect(Checker.isString(1)).toBe(flag)
    expect(Checker.isString(99)).toBe(flag)
    expect(Checker.isString(-1)).toBe(flag)
    expect(Checker.isString(111)).toBe(flag)
    expect(Checker.isString(-999)).toBe(flag)
    expect(Checker.isString(129341209840281)).toBe(flag)
    expect(Checker.isString(0x123)).toBe(flag)
  })
  it('give string return true', () => {
    const flag = true
    expect(Checker.isString('1')).toBe(flag)
    expect(Checker.isString('99')).toBe(flag)
    expect(Checker.isString('-1')).toBe(flag)
    expect(Checker.isString('111')).toBe(flag)
    expect(Checker.isString('-999')).toBe(flag)
    expect(Checker.isString('129341209840281')).toBe(flag)
    expect(Checker.isString('0x123')).toBe(flag)
  })
  it('give boolean return false', () => {
    const flag = false
    expect(Checker.isString(true)).toBe(flag)
    expect(Checker.isString(false)).toBe(flag)
  })
  it('give array return false', () => {
    const flag = false
    expect(Checker.isString([])).toBe(flag)
    expect(Checker.isString([1,2,3])).toBe(flag)
  })
  it('give object return false', () => {
    const flag = false
    expect(Checker.isString({})).toBe(flag)
    expect(Checker.isString({a: 1, b: 2, c: 3})).toBe(flag)
    expect(Checker.isString({a: 1, b: 2, c: { d: 3, e: 4, f: { g: 5, h: 6}}})).toBe(flag)
  })
  it('give null return false', () => {
    expect(Checker.isString(null)).toBe(false)
  })
  it('give undefined return false', () => {
    expect(Checker.isString(undefined)).toBe(false)
  })
})

describe('Checker.isList', () => {
  it('give number return false', () => {
    const flag = false
    expect(Checker.isList(1)).toBe(flag)
    expect(Checker.isList(99)).toBe(flag)
    expect(Checker.isList(-1)).toBe(flag)
    expect(Checker.isList(111)).toBe(flag)
    expect(Checker.isList(-999)).toBe(flag)
    expect(Checker.isList(129341209840281)).toBe(flag)
    expect(Checker.isList(0x123)).toBe(flag)
  })
  it('give string return false', () => {
    const flag = false
    expect(Checker.isList('1')).toBe(flag)
    expect(Checker.isList('99')).toBe(flag)
    expect(Checker.isList('-1')).toBe(flag)
    expect(Checker.isList('111')).toBe(flag)
    expect(Checker.isList('-999')).toBe(flag)
    expect(Checker.isList('129341209840281')).toBe(flag)
    expect(Checker.isList('0x123')).toBe(flag)
  })
  it('give boolean return false', () => {
    const flag = false
    expect(Checker.isList(true)).toBe(flag)
    expect(Checker.isList(false)).toBe(flag)
  })
  it('give array return true', () => {
    const flag = true
    expect(Checker.isList([])).toBe(flag)
    expect(Checker.isList([1,2,3])).toBe(flag)
  })
  it('give object return false', () => {
    const flag = false
    expect(Checker.isList({})).toBe(flag)
    expect(Checker.isList({a: 1, b: 2, c: 3})).toBe(flag)
    expect(Checker.isList({a: 1, b: 2, c: { d: 3, e: 4, f: { g: 5, h: 6}}})).toBe(flag)
  })
  it('give null return false', () => {
    expect(Checker.isList(null)).toBe(false)
  })
  it('give undefined return false', () => {
    expect(Checker.isList(undefined)).toBe(false)
  })
})

describe('Checker.isNull', () => {
  it('give number return false', () => {
    const flag = false
    expect(Checker.isNull(1)).toBe(flag)
    expect(Checker.isNull(99)).toBe(flag)
    expect(Checker.isNull(-1)).toBe(flag)
    expect(Checker.isNull(111)).toBe(flag)
    expect(Checker.isNull(-999)).toBe(flag)
    expect(Checker.isNull(129341209840281)).toBe(flag)
    expect(Checker.isNull(0x123)).toBe(flag)
  })
  it('give string return false', () => {
    const flag = false
    expect(Checker.isNull('1')).toBe(flag)
    expect(Checker.isNull('99')).toBe(flag)
    expect(Checker.isNull('-1')).toBe(flag)
    expect(Checker.isNull('111')).toBe(flag)
    expect(Checker.isNull('-999')).toBe(flag)
    expect(Checker.isNull('129341209840281')).toBe(flag)
    expect(Checker.isNull('0x123')).toBe(flag)
  })
  it('give boolean return false', () => {
    const flag = false
    expect(Checker.isNull(true)).toBe(flag)
    expect(Checker.isNull(false)).toBe(flag)
  })
  it('give array return false', () => {
    const flag = false
    expect(Checker.isNull([])).toBe(flag)
    expect(Checker.isNull([1,2,3])).toBe(flag)
  })
  it('give object return false', () => {
    const flag = false
    expect(Checker.isNull({})).toBe(flag)
    expect(Checker.isNull({a: 1, b: 2, c: 3})).toBe(flag)
    expect(Checker.isNull({a: 1, b: 2, c: { d: 3, e: 4, f: { g: 5, h: 6}}})).toBe(flag)
  })
  it('give null return true', () => {
    expect(Checker.isNull(null)).toBe(true)
  })
  it('give undefined return false', () => {
    expect(Checker.isNull(undefined)).toBe(false)
  })
})

describe('Checker.isObject', () => {
  it('give number return false', () => {
    const flag = false
    expect(Checker.isObject(1)).toBe(flag)
    expect(Checker.isObject(99)).toBe(flag)
    expect(Checker.isObject(-1)).toBe(flag)
    expect(Checker.isObject(111)).toBe(flag)
    expect(Checker.isObject(-999)).toBe(flag)
    expect(Checker.isObject(129341209840281)).toBe(flag)
    expect(Checker.isObject(0x123)).toBe(flag)
  })
  it('give string return false', () => {
    const flag = false
    expect(Checker.isObject('1')).toBe(flag)
    expect(Checker.isObject('99')).toBe(flag)
    expect(Checker.isObject('-1')).toBe(flag)
    expect(Checker.isObject('111')).toBe(flag)
    expect(Checker.isObject('-999')).toBe(flag)
    expect(Checker.isObject('129341209840281')).toBe(flag)
    expect(Checker.isObject('0x123')).toBe(flag)
  })
  it('give boolean return false', () => {
    const flag = false
    expect(Checker.isObject(true)).toBe(flag)
    expect(Checker.isObject(false)).toBe(flag)
  })
  it('give array return false', () => {
    const flag = false
    expect(Checker.isObject([])).toBe(flag)
    expect(Checker.isObject([1,2,3])).toBe(flag)
  })
  it('give object return true', () => {
    const flag = true
    expect(Checker.isObject({})).toBe(flag)
    expect(Checker.isObject({a: 1, b: 2, c: 3})).toBe(flag)
    expect(Checker.isObject({a: 1, b: 2, c: { d: 3, e: 4, f: { g: 5, h: 6}}})).toBe(flag)
  })
  it('give null return false', () => {
    expect(Checker.isObject(null)).toBe(false)
  })
  it('give undefined return false', () => {
    expect(Checker.isObject(undefined)).toBe(false)
  })
})

describe('Checker.isExist', () => {
  it('give number return true', () => {
    const flag = true
    expect(Checker.isExist(1)).toBe(flag)
    expect(Checker.isExist(99)).toBe(flag)
    expect(Checker.isExist(-1)).toBe(flag)
    expect(Checker.isExist(111)).toBe(flag)
    expect(Checker.isExist(-999)).toBe(flag)
    expect(Checker.isExist(129341209840281)).toBe(flag)
    expect(Checker.isExist(0x123)).toBe(flag)
  })
  it('give string return true', () => {
    const flag = true
    expect(Checker.isExist('1')).toBe(flag)
    expect(Checker.isExist('99')).toBe(flag)
    expect(Checker.isExist('-1')).toBe(flag)
    expect(Checker.isExist('111')).toBe(flag)
    expect(Checker.isExist('-999')).toBe(flag)
    expect(Checker.isExist('129341209840281')).toBe(flag)
    expect(Checker.isExist('0x123')).toBe(flag)
  })
  it('give boolean return true', () => {
    const flag = true
    expect(Checker.isExist(true)).toBe(flag)
    expect(Checker.isExist(false)).toBe(flag)
  })
  it('give array return true', () => {
    const flag = true
    expect(Checker.isExist([])).toBe(flag)
    expect(Checker.isExist([1,2,3])).toBe(flag)
  })
  it('give object return true', () => {
    const flag = true
    expect(Checker.isExist({})).toBe(flag)
    expect(Checker.isExist({a: 1, b: 2, c: 3})).toBe(flag)
    expect(Checker.isExist({a: 1, b: 2, c: { d: 3, e: 4, f: { g: 5, h: 6}}})).toBe(flag)
  })
  it('give null return true', () => {
    expect(Checker.isExist(null)).toBe(true)
  })
  it('give undefined return false', () => {
    expect(Checker.isExist(undefined)).toBe(false)
  })
})
