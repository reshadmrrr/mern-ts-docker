import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    _id: Number, 
    firstName: String,
    lastName: String,
    email: String,
    createdAt:  Date,  
    updatedAt:  Date,
}, {timestamps: {createdAt: 'createdAt', updatedAt: 'updatedAt', }} );

const User = mongoose.model('User', userSchema);

export default User;