export const Checker = {
  // Primitives
  isExist: x => !(Object.prototype.toString.call(x) === '[object Undefined]'),
  isNull: x => Object.prototype.toString.call(x) === '[object Null]',
  isObject: x => Object.prototype.toString.call(x) === '[object Object]',
  isNumber: x => Object.prototype.toString.call(x) === '[object Number]',
  isBool: x => x === true || x === false,
  isString: x => Object.prototype.toString.call(x) === '[object String]',
  isList: x => Object.prototype.toString.call(x) === '[object Array]',
  isBigInt: x => Object.prototype.toString.call(x) === '[object BigInt]',
  isSymbol: x => Object.prototype.toString.call(x) === '[object Symbol]',
  isFunction: x => Object.prototype.toString.call(x) === '[object Function]',
  // Data Structrues
  isListOf: checker => list => (Object.prototype.toString.call(x) === '[object Array]') && (!list.some(i => !checker(i)))
};

export const match = (template) => (target) => {
  return structureMatching(template)(new SafeObject(target))
}

const structureMatching = (template) => (targetSafe) => {
  const obj = {};
  if(!Checker.isExist(template)) throw new Error('template must be given')
  if (!Checker.isObject(template)) {
    if(!Checker.isList(template) || template.length < 1) {  // template只会是对象或者一个二元数组
      throw new Error('type definition must be given as a Array with at list one element')
    }
    const [defaultValue, checker] = template;
    if(Checker.isList(defaultValue)) { // 当默认值为一个List，且里面的元素是Object的时候
      const [listObjTemplate] = defaultValue
      if(listObjTemplate && Checker.isObject(listObjTemplate)) {
        const targetList = targetSafe.getList([])
        let res = []
        targetList.forEach((item, index) => {
          res[index] = match(listObjTemplate)(item)
        })
        return res
      }
    }
    const val = targetSafe.get(defaultValue, checker);
    return val
  } 
  Object.keys(template).forEach((key) => {
    obj[key] = structureMatching(template[key])(
      targetSafe.field(key)
    );
  });
  return obj;
};

export class SafeObject {
  constructor(target, isValid = true) {
    this.target = target;
    this._isValid = isValid;
  }
  field(fieldName) {
    if(!Checker.isString(fieldName)) throw new Error('field name must be string')
    if (!this._isValid) {
      // if previous field() is not passed
      return new SafeObject(this.target, false);
    }
    if (Checker.isNull(this.target) || !Checker.isExist(this.target)) {
      return new SafeObject(this.target, false);
    }
    if (Checker.isExist(this.target[fieldName])) {
      return new SafeObject(this.target[fieldName]);
    }
    return new SafeObject(this.target, false);
  }
  get(defaultValue, checker = () => true) {
    // return the value if the check pass
    if(!Checker.isFunction(checker)) throw new Error('checker must be a function')
    if (!this._isValid || checker(this.target) !== true) {
      if (!checker(defaultValue)) {
        throw new Error("default value must pass the check");
      }
      return defaultValue;
    }
    return this.target;
  }
  getInt(def) {
    return this.get(def, Checker.isNumber);
  }
  getString(def) {
    return this.get(def, Checker.isString);
  }
  getList(def) {
    return this.get(def, Checker.isList);
  }
  getBool(def) {
    return this.get(def, Checker.isBool);
  }
  getNull(def) {
    return this.get(def, Checker.isNull);
  }
  getListOf(def, checker) {
    return this.get(def, Checker.isListOf(checker));
  }
}
