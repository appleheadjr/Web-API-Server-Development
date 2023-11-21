const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true, //there should be a first name
    },
    lastName:{
        type:String, //not neccessary that there should be a last name
    },
    email:{
        type:String,
        required:true,
        unique: true, //email should be unique for all users
    },
    jobTitle:{
        type:String,
    },
    gender:{
        type:String,
    }

}, {timestamps:true}); //adding timestamps

//model
const User = mongoose.model("user", userSchema);

module.exports = User;