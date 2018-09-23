"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-var-requires
require('dotenv').config();
const app_1 = require("./app");
const port = process.env.PORT || 4040;
app_1.default.listen(port, () => {
    console.log('Express server listening on port ' + port);
});
//# sourceMappingURL=server.js.map