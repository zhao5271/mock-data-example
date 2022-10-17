// 使用 Mock
const Mock = require("mockjs");
const random = Mock.Random;

const data = Mock.mock({
  status: "0",
  code: "200",
  msg: "成功",
  result: {
    isImportant: "@boolean",
    name: "@cname()",
    avatar: "@image(100)",
    title: "@cword(5, 8)",
    province: "@province()",
    idCare: "@id()",
    date: "@date",
    time: "@time('HH:mm:ss')",
    datetime: "@datetime('yy-MM-dd a HH:mm:ss')",
    color: "@color()",
    url: "@url()",
    arr: "@range(10)",
  },
});

module.exports = { ...data };
