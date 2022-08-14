require('dotenv').config({path:'.env'});
const mongoose = require('mongoose');
const logger = require('../logger/logger');

const connect = () => {
    const url = process.env.MONGO_DB_URL;
    logger.info("MONGO_DB_URL" + url);
    mongoose.connect(url);

    mongoose.connection.on('open', () => {
        logger.info("MONGO_DB_Connected");
    });

    mongoose.connection.on('error', (err: any) => {
        logger.error("MONGO_DB_Connection Error: " + err);
    });
};

const disconnect = () => {
    if (!mongoose.connection) {
        return;
    } 

    mongoose.disconnect();

    mongoose.once("close", () => logger.info("MONGO_DB_Disconnected"));
};

module.exports = {
    connect, disconnect  
}