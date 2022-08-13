import  App  from "./app";

import http from "http";

const port: number =  5000;

App.set('port', port);

const server = http.createServer(App);

server.listen(port);

server.on("listening", () => {
    let address = server.address();
    let bindAddress = typeof address === "string" ? `pipe ${address}` : `port ${address}`;
    // console.log(`Listening on ${bindAddress}`);
    console.log("Server started");
    
    
});

module.exports = App;
