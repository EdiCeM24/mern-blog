import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
       type: String,
       required: true,
       unique: true // here mongodb is going to check for similar id for us. 
    },
    email: {
       type: String,
       required: true,
       unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    }, 
}, {timestamps: true});

const User = mongoose.model('User', userSchema);