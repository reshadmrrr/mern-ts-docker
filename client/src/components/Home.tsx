import React, {useState, useEffect} from 'react';
import Header from './Header';
import Users from './Users';
import { UserService } from "../services/UserService";
import MyAlert from './Alert';
import UserModel from '../models/UserModel';


const Home =  () => {
    const [users, setUsers] = useState<UserModel[] | null>([]);
    const [totalUsers, setTotalUsers] = useState(0);
    const [message, setMessage] = useState<JSX.Element | null>();

    const userService = new UserService();

    useEffect(() => {
        userService.getAllUsers().then(users => {
            setUsers(users);
            setTotalUsers(users.length);
        });
    }, [totalUsers]);

    const removeAlert = () => {
        setTimeout(() => {
            setMessage(null);
        }, 4000);
    };
    const delUser = (userId: number) => {
        userService.deleteUser(userId).then(res => {
            if (res.deletedCount === 1) {
                setTotalUsers(totalUsers - 1);
            }
        });
        setMessage(<MyAlert message="User has been deleted successfully."/>);
        removeAlert();
    };

    const editUser = (user: UserModel) => {
        userService.updateUser(user);
        setMessage(<MyAlert message="User has been updated successfully."/>);
        removeAlert();
    };

    const addUser = (user: UserModel) => {
        userService.createUser(user).then(res => {
            if (res._id !== undefined) {
                setTotalUsers(totalUsers - 1);
            }
        });
        setMessage( <MyAlert message="User has been saved successfully."/>);
        removeAlert();
    };

    return (
        <div className="App">
            <Header />
            {message}
            <Users users={users} deleteUser={delUser} editUser={editUser} addUser={addUser}/>
        </div>
    );
}

export default Home;