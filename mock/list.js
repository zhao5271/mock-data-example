// 使用 Mock
var Mock = require('mockjs')
var data = Mock.mock({
  status: '0',
  code: '200',
  msg: '成功',
  data: {
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|10-20': [{
      'id|+1': 1,
      'name': '@cname()',
      'title': '@cword(5, 8)',
      'isImportant': '@boolean',
    }]
  }
})

module.exports = {
  data
}