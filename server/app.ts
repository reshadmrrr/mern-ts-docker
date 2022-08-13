import express from 'express';
import bodyParser from 'body-parser';
import Routes from './routes/route';
class App {

    public express: express.Application;
    
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {        
        
        this.express.get('/', (req, res, next) => res.send("Typescript Server's working!!!"));
        
        this.express.use("/api", Routes);

        this.express.use("*", (req, res, next) => {
            res.send("URL isn't correct!");
        });
    
    }

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

}

export default new App().express;