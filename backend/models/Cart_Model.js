const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Cart_Schema = new Schema({
    userId:{type:String, require:true, unique:true},
    products:[
        {
            productId:{type:String},
            quantity:{type:Number, default:1},
        } 
    ],
},{timestamps:true});


module.exports = mongoose.model('cart', Cart_Schema)