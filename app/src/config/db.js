const mysql = require("mysql");

const db = mysql.createConnection({
  host:"login-lecture-ccamang.cqkawnw3melc.ap-northeast-2.rds.amazonaws.com",
  user : "admin",
  password: "rkdlfem1!",
  databases: "login_lecture",
});

db.connect();

module.exports = db;