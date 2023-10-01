const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email:{
        type:String, 
        require:true,
         unique:true,
    },
    username:{
        type:String, 
        require:true,
        unique:true
    },
    roles:{
        User:{
            type:Number, 
            default:2000,            
        },
        Admin:Number
    },
    password:{
        type:String, 
        require:true
    },
    refreshToken: String
},{timestamps:true});

module.exports =mongoose.model('user', UserSchema)

