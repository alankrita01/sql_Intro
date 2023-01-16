const mysql = require('mysql2');


// we want to use many queries that's why use pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'node-complete',
  password: 'mysql123'
});

module.exports = pool.promise();