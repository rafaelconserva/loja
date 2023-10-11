var mysql = require('mysql2');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Rafael1598*',
  database: 'loja'
});

module.exports = connection