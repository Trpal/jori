"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Pool } = require('pg');
const pool = new Pool();
exports.default = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback);
    }
};
//# sourceMappingURL=index.js.map