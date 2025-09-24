const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql123',
  database: 'justificantes_db'
});

db.connect((err) => {
  if (err) throw err;
  console.log('📦 Conexión a MySQL exitosa');
});

module.exports = db;
