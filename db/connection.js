const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'P*bH^5h)_cJsj2>/2n^h',
      database: 'election'
    },
    console.log('Connected to the election database.')
  );

module.exports = db;