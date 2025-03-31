const mongoose = require('mongoose');
const bcrypt =  require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:[true,'Username is required'],
        trim:true
    },

        lastName:{
            type:String,
            required:[true,'Username is required'],
            trim:true
        },

    email:{
        type:String,
        required:[true,'Email is required'],
        unique:[true,'Email is already exists'],
        trim:true
    },

    password:{
        type:String,
        required:[true,'Password is required'],
    },

    accountType:{
        type:String,
        enum:['Admin', 'Student', 'Instructor'],
        required:true
    },
    additionalDetails:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Profile'
    },

    courses: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:Course,
        }
    ],

    image:{
        type:String,
        required:true,
    },

    courseProgress: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:CourseProgress
        }
    ],

})

module.exports = mongoose.model('User',userSchema);