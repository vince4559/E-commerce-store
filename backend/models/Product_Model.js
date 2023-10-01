const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema =new Schema({
    title:{type:String, required:true, unique:true},
    desc:{type:String, required:true},
    img:{type:String, required:true},
    categories:{type:Array,required:true},
    size:{type:Array, required:true},
    color:{type:Array, required:true},
    price:{type:Number, required:true},
    inStock:{type:Boolean, default:true},
},{timestamps:true});

module.exports = mongoose.model("product", ProductSchema)