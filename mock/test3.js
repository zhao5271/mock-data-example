var Mock = require('mockjs')
var data = Mock.mock({
  code: '200',
  msg: '成功',
  data: {
    'test3List|10-20': [{
      'id|+1': 1,
      'tstName': '@cname()',
      'title': '@cword(5, 9)',
      'title2': '@cword(5, 8)',
    }]
  }
})

module.exports = {
  data
}