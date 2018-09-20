"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const app_1 = require("./app");
const port = process.env.PORT || 4040;
app_1.default.listen(port, function () {
    console.log('Express server listening on port ' + port);
});
//# sourceMappingURL=server.js.map