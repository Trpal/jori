const { Pool } = require('pg')

const pool = new Pool()

export default {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  }
}