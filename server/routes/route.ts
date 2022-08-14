const logger = require("../logger/logger")
import express from 'express';
import bodyParser from 'body-parser';
import user from './user';
class Routes {
    public express: express.Application;
    public logger: any;

    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {
        this.express.use("/user", user);
    }

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.logger = logger;     
    }
}

export default new Routes().express;