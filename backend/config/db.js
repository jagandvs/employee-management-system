require("dotenv").config();
const mysql = require("mysql");

const dbconn = mysql.createPool({
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DBDATABASE,
});

module.exports = dbconn;
