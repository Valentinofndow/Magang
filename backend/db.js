import mysql from 'mysql2';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // ganti sesuai user MySQL kamu
  password: '`1234567890-=', // password dari DBeaver
  database: 'inspection_db', // pastiin database ini udah ada di MySQL
});

db.connect(err => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

export default db;
