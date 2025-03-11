import { Pool } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config()

const pool = new Pool({
	user: process.env.DBUSER,
	host: "localhost",
	database: "restaurant_db",
	password: process.env.DBPASSWORD,
	port: 5432,
});

console.log(process.env.DBUSER)

export default pool;
