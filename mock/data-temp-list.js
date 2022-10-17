// 使用 Mock
const Mock = require("mockjs");
const data = Mock.mock({
  status: "0",
  code: "200",
  msg: "成功",
  result: {
    "list|10-20": [
      {
        "no|+1": 1,
        "sex|1": ["男", "女"],
        "study|1-4": ["语文", "数学", "英语", "体育"],
        "studyArr|3": ["语文", "数学", "英语", "体育"],
        "age|18-28": 18,
        "number1|1-100.1-10": 1,
        "number2|123.1-10": 1,
        "number3|123.3": 1,
        "number4|123.10": 1.123,
      },
    ],
  },
});

module.exports = {
  data,
};
