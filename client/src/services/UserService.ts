export class UserService {

    public async getAllUsers(): Promise<any> {
        const response = await fetch('/api/user/users');
        return await response.json();
    }

    public async createUser(user: any): Promise<any> {
        const response = await fetch('/api/user/user', { 
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user),
         });
         return await response.json();
    }

    public async updateUser(user: any): Promise<any> {
        const response = await fetch('/api/user/user', { 
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user),
         });
        return await response.json();
    }

    public async deleteUser(userId: number): Promise<any> {
        const response = await fetch(`/api/user/user/${userId}`, {
            method: 'DELETE',            
        });
        return await response.json();
    }
}