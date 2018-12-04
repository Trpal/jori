import { Pool } from 'pg';

const pool = new Pool();

const query = text => pool.query(text);

export { query };
