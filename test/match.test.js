import { match, Checker} from '../index.js'

it('通用的情况', () => {
  const target = {
    data: {
      statistics: {
        total_play: "41232",
        new_fans: "1231413",
        ratio: "33%"
      },
      stats: ["a", "b", "c"]
    },
    code: 500,
    msg: "hjh"
  };
  
  const template = {
    data: {
      statistics: {
        total_play: ["--", Checker.isString],
        new_fans: ["--", Checker.isString],
        ratio: ["--%", Checker.isString],
        total_pay: ["--", Checker.isString],
        item_purchased: ["123312321", Checker.isString]
      },
      stats: [[1, 2], Checker.isList]
    },
    code: [200, Checker.isInt],
    msg: ["", Checker.isString],
    extra: [123123, Checker.isInt]
  };
  
  const result = {
    data: {
      statistics: {
        total_play: "41232",
        new_fans: "1231413",
        ratio: "33%",
        total_pay: "--",
        item_purchased: "123312321"
      },
      stats: ["a", "b", "c"]
    },
    code: 500,
    msg: "hjh",
    extra: 123123
  }
  expect( match(template)(target)).toStrictEqual(result)
})

it('检查类型，如果通过优先选择', () => {
  const target = {
    code: 500,
    msg: "hjh"
  };
  const template = {
    code: [200, Checker.isInt],
    msg: ["", Checker.isString],
  };
  expect( match(template)(target)).toStrictEqual({
    code: 500,
    msg: "hjh"
  });
});

it('List of object类型', () => {
  const CarTemplate = {
    brand: ['', Checker.isString],
    year: [0, Checker.isNumber],
    make: ['', Checker.isString],
  }
  const template = {
    cars: [[CarTemplate], Checker.isList]
  }
  const target = {
    cars: [
      { brand: 'bmw', year: 2000, make: 'M3'},
      { brand: 'mercedece', year: 2010, make: 'C300'},
      { brand: 'honda', year: 2019, make: 'civic'},
      { brand: 'toyota', year: 2000 },
      { foo: 'wow', bar: 123}
    ]
  }
  expect( match(template)(target)).toStrictEqual({
    cars: [
      { brand: 'bmw', year: 2000, make: 'M3'},
      { brand: 'mercedece', year: 2010, make: 'C300'},
      { brand: 'honda', year: 2019, make: 'civic'},
      { brand: 'toyota', year: 2000, make: '' },
      { brand: '', year: 0, make: ''}
    ]
  })
})