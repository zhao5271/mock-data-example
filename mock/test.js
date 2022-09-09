var Mock = require('mockjs')
var data = Mock.mock({
  code: '200',
  msg: '成功',
  data: {
    'list|10-20': [{
      'id|+1': 1,
      'tstName': '@cname()',
      'title': '@cword(5, 8)',
      'title2': '@cword(5, 8)',
    }]
  }
})

module.exports = {
  data
}