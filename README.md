1.利用 mockjs 生成动态数据,到 mock 中,在db.js 中引入
2.json-server 执行 db.js 文件,模拟接口
3.nodemon 监听 mock 文件夹下 文件的变更
4.重新执行 json-serve 执行 db.json
5.在package.json 中设置 命令,根据 dev , prod 来分环境执行
改变 请求的 api地址