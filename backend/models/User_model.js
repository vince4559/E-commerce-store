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
        user:{
            type:String, 
            default:201,            
        },
        Editor:String,
        Admin:String
    },
    password:{
        type:String, 
        require:true
    },
    refreshToken: String
});

module.exports =mongoose.model('user', UserSchema)

