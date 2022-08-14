const logger =  require("../logger/logger");
import User from "../model/userModel";

const {connect, desconnect} = require('../config/dbConfig');

class UserRepository {
    
    constructor () {
        connect();
    }

    async getUsers() {
        const users = await User.find({});
        logger.info("users::" + users);
        return users;
    }

    async createUser(user: any) {
        let res = {}
        try {
            res = await User.create(user);
        } catch (err: any) {
            logger.error("Error:::: " + err);
        }
        return res;
    }

    async updateUser(user: any) {
        let res = {}
        const {_id, firstName, lastName, email} = user;
        try {
            res = await User.updateOne({_id: _id}, {firstName: firstName, lastName: lastName, email: email});
        } catch (err: any) {
            logger.error("Error:::: " + err);
        }
        return res;
    }

    async deleteUser(userId: Number) {
        let res = {};
        try {
            res = await User.deleteOne({_id: userId});
        } catch (err: any) {
            logger.error("Error::" + err);
        }
        return res;
    }
}

export default new UserRepository();