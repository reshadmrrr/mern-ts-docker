export default class UserModel {
    public _id: number | undefined;
    public firstName: string | undefined;
    public lastName: string | undefined;
    public email: string | undefined;

    constructor(_id?: number, firstName?: string, lastName?: string, email?: string) {
        this._id = _id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    fromJson(data: any): UserModel {
        if (data) {
            return new UserModel(data._id, data.firstName, data.lastName, data.email);
        }
        return new UserModel();
    }

    listFromJson(data: Promise<any>[]): UserModel[] {
        if (data) {
            let listFromJson: UserModel[] = data.map(user => this.fromJson(user));
            return listFromJson;
        }
        return [];
    }
}