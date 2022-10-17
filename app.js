// 可以调用.exec执行shell命令
const shell = require("shelljs");

// const apiEnv = process.env.API_ENV;

// 配合nodemon 热更新数据
shell.exec("json-server db.js");
