import  App  from "./app";
import logger from './logger/logger';

import http from "http";


const port: number =  8000;

App.set('port', port);

const server = http.createServer(App);

server.listen(port);

server.on("listening", () => {
    let address = server.address();
    let bindAddress = typeof address === "string" ? `pipe ${address}` : `port ${address}`;
    logger.info(`Listening on ${bindAddress}`);
});

module.exports = App;
