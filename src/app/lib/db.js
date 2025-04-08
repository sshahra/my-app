import mysql from 'mysql2/promise';

export async function connectDB() {
  const connection = await mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    port: process.env.DATABASE_PORT,
    ssl: {
      rejectUnauthorized: true, // Set to false if using a self-signed SSL certificate
    },
  });
  return connection;
}
