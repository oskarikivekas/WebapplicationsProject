const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    username:{
       type: String,
       required: true,
       unique: true 
    }, 
    email:{
        type: String,
        required: true,
        unique: true 
    },
    password:{
        type: String,
        required: true
    },
    profileImg: {
        type: String,
        default: "",
        required: false
    },
    bio: {
        type: String,
        default: "This use has no bio yet",
        required: false,
    }
});

const User = mongoose.model('users', usersSchema);

module.exports = {User};