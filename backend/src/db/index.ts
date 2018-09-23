import { Pool } from 'pg';

module.exports = {
  query: (text, params) => Pool.query(text, params),
};
