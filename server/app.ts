import express from 'express';
import bodyParser from 'body-parser';

class App {

    public express: express.Application;
    
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {        
        this.express.use('/', (req, res, next) => res.send("Typescript Server's working!!!"));
    }

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

}

export default new App().express;