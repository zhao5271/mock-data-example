// 使用 Mock
const Mock = require('mockjs');
const random = Mock.Random;

const arr = [];
for (let i = 0; i < 10; i++) {
  // 随机中文名字
  const name = random.cname();
  // 随机一个图片
  const avatar = random.image("100x100", random.color(), random.color(), name);
  // 随机年龄的取值范围
  const age = random.integer(18, 28);
  // 随机省份
  const province = random.province();
  // 随机出身份证号码
  const idcare = random.id();
  // 随机出性别
  const sex = random.pick(["男", "女"]);
  // 数据放入数组arr
  arr.push({
    id: i,
    name,
    age,
    province,
    idcare,
    sex,
    avatar,
  })
};

module.exports = {
  arr
}
