export const Checker = {
  isExist: x => !(Object.prototype.toString.call(x) === '[object Undefined]'),
  isNull: x => Object.prototype.toString.call(x) === '[object Null]',
  isObject: x => Object.prototype.toString.call(x) === '[object Object]',
  isNumber: x => Object.prototype.toString.call(x) === '[object Number]',
  isBool: x => x === true || x === false,
  isString: x => Object.prototype.toString.call(x) === '[object String]',
  isList: x => Object.prototype.toString.call(x) === '[object Array]',
  isBigInt: x => Object.prototype.toString.call(x) === '[object BigInt]',
  isSymbol: x => Object.prototype.toString.call(x) === '[object Symbol]'
};

const hasSameType = (a) => (b) => {
  if (Checker.isList(a) && Checker.isList(b)) {
    return hasSameTypeList(a)(b);
  }
  const checkListA = Object.values(Checker).map((f) => f(a));
  const checkListB = Object.values(Checker).map((f) => f(b));
  let flag = true;
  for (let i = 0; i < checkListA.length; i++) {
    if (checkListA[i] !== checkListB[i]) flag = false;
  }
  return flag;
};

const hasSameTypeList = (a) => (b) => {
  // 以短的数组为基准
  const shorter = a.length < b.length ? a : b;
  let flag = true;
  for (let i = 0; i < shorter.length; i++) {
    if (!hasSameType(a[i])(b[i])) flag = false;
  }
  return flag;
};

export const structureMatching = (template) => (target) => {
  return _structureMatching(template)(new SafeObject(target))
}

const _structureMatching = (template) => (target) => {
  const obj = {};
  if (!Checker.isObject(template)) {
    const [defaultValue, checker] = template;
    const val = target.get(defaultValue, checker);
    if (hasSameType(defaultValue)(val)) {
      return val; // same type
    }
    return defaultValue; // not same type
  } 
  Object.keys(template).forEach((key) => {
    obj[key] = _structureMatching(template[key])(
      target.field(key)
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
    if (!this._isValid || !checker(this.target)) {
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
}
