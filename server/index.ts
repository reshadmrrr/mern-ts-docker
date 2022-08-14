const logger = require('./logger/logger');
import  App  from "./app";
import http from "http";


const port: number =  8000;

App.set('port', port);

const server = http.createServer(App);

server.listen(port);

server.on("listening", () => {
    logger.info(`Server listening on port ${port}`);
});

module.exports = App;
