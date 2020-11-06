import {structureMatching, Checker} from '../index.js'

var response = {
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

var init = {
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

it('检查类型，如果通过优先选择', () => {
  const target = {
    code: 500,
    msg: "hjh"
  };
  const template = {
    code: [200, Checker.isInt],
    msg: ["", Checker.isString],
  };
  expect(structureMatching(template)(target)).toStrictEqual({
    code: 500,
    msg: "hjh"
  });
});