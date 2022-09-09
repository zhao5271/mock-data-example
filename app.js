// 可以调用.exec执行shell命令
const shell = require('shelljs');

// const apiEnv = process.env.API_ENV;
// console.log('%c [ apiEnv ]-5', 'font-size:14px; background:#1890ff; color:#fff;', apiEnv)


// 配合nodemon 热更新数据
shell.exec("json-server db.js");