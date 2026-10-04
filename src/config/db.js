import dotenv from 'dotenv';
import { drizzle } from 'drizzle-orm/node-postgres';
// import pkg from 'pg';

// const { Pool } = pkg;
dotenv.config();


const db = drizzle(process.env.DB_URI);


// const pool = new Pool({
//     connectionString: process.env.DB_URI
//     // host: process.env.DB_HOST,
//     // port: process.env.DB_PORT,
//     // database: process.env.DB_NAME,
//     // user: process.env.DB_USER,
//     // password:  process.env.DB_PASS,
// })

// pool.connect()
//     .catch(err => console.log(err));

// pool.on('connect', () => console.log(`Connected to DB...!!!`));
    
export { db }



