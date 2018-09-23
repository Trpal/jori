"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express = require("express");
const index_1 = require("./db/index");
class App {
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    routes() {
        const router = express.Router();
        router.get('/', (req, res) => {
            index_1.query('SELECT now()').then((mes) => {
                console.log(mes);
            });
            res.status(200).send({
                message: 'helloas world!',
            });
        });
        router.post('/', (req, res) => {
            const data = req.body;
            // query a database and save data
            res.status(200).send(data);
        });
        this.app.use('/', router);
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map