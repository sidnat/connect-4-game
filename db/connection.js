// PG database client/connection setup
import pg from "pg";
import * as dotenv from 'dotenv'

dotenv.config()

const { Pool } = pg;

const dbParams = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
};

const db = new Pool(dbParams);

db.connect();

export default db