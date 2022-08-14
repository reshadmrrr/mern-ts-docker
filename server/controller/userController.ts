const logger = require("../logger/logger")
import  userService  from "../service/userService";

class UserController {
    constructor() {}

    async getUsers() {
        logger.info("Controller: getUsers");
        return await userService.getUsers();
    }

    async createUser(user: any) {
        logger.info("Controller: createUser");
        return await userService.createUser(user);
    }

    async updateUser(user: any) {
        logger.info("Controller: updateUser");
        return await userService.updateUser(user);
    }

    async deleteUser(userId: Number) {
        logger.info("Controller: deleteUser");
        return await userService.deleteUser(userId);
    }
}

export default new UserController();