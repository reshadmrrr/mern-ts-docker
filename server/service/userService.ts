import userRepository from "../repository/userRepository";

class UserService {
    
    constructor(){};

    async getUsers() {
        return await userRepository.getUsers();
    }

    async createUser(user: any) {
        return await userRepository.createUser(user);
    }

    async updateUser(user: any) {
        return await userRepository.updateUser(user);
    }

    async deleteUser(userId: Number) {
        return await userRepository.deleteUser(userId);
    }

}

export default new UserService();