import express from "express";
import pool from './utils/db';

const app = express();
const PORT = 3333;

pool.connect()
	.then(() => console.log("Connected to PostgreSQL"))
	.catch((error: Error) => console.error("Database connection error", error));


app.listen(PORT, () => console.log("Server is running"));
