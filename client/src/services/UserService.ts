import UserModel from "../models/UserModel";

export class UserService {

    public async getAllUsers(): Promise<UserModel[]> {
        const response = await fetch('/api/user/users');
        return new UserModel().listFromJson(await response.json());
    }

    public async createUser(user: UserModel): Promise<UserModel> {
        const response = await fetch('/api/user/user', { 
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user),
         });
         return new UserModel().fromJson(await response.json());
    }

    public async updateUser(user: UserModel): Promise<UserModel> {
        const response = await fetch('/api/user/user', { 
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user),
         });
        return new UserModel().fromJson(await response.json());
    }

    public async deleteUser(_id:number): Promise<any> {
        const response = await fetch(`/api/user/user/${_id}`, {
            method: 'DELETE',            
        });
        return await response.json();
    }
}