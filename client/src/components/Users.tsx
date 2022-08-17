import React from 'react';
import UserModel from '../models/UserModel';
import MyModal from './Modal';

type Usertype = {
    users: UserModel[] | null,
    deleteUser: Function,
    editUser: Function,
    addUser: Function,
}

const Users = ({users, deleteUser, editUser, addUser}: Usertype) => {
    const loading = (
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    );
    
    const UserRow = (user: UserModel, index: number) => (
        <tr key={index}>
            <td>{user._id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>
                <MyModal title="Edit User" user={user} func={editUser}/>
                <button className="btn btn-danger ms-2" onClick={(e) => deleteUser(user._id)}>Delete</button>
            </td>
        </tr>
    );

    const userTable = users?.map((user: UserModel, index: number) => UserRow(user, index));
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h2>Users List</h2>
                </div>
                <div className="col-md-6 text-end">
                <MyModal title="Add User" user={new UserModel(users ? users.length + 1 : 1)} func={addUser}/>
                </div>
                <div className="col-md-12">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>#ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users ?  userTable: loading}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
    
}

export default Users;