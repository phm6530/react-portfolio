import mysql from 'mysql2/promise';

//.env 파일 읽기

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    timezone: '+09:00',
});

export default pool;
