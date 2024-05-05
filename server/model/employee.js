const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String, 
        required:true
    },
    email:{
        type:String, 
        unique: true, 
        required:true
    },
    password:{
        type:String,
        required:true
    },
    address: {
        type: String,
        required: true,
    },
    category:{
        type:String
    },
    role: {
        type: String,
        required:true
    },
    leaves:[
        {
            type:mongoose.Schema.ObjectId,
            ref:'Leave',
        }
    ]
},{timestamps:true})

const userModel = mongoose.model("userData",userSchema);
module.exports = userModel;