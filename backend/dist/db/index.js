"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
module.exports = {
    query: (text, params) => pg_1.Pool.query(text, params),
};
//# sourceMappingURL=index.js.map