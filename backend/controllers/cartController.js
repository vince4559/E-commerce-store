const Cart_model = require("../models/Cart_Model");


exports.createCart = async (req, res) => {
//  const {userId, products} = req.body;
const newCart = new Cart_model(req.body)
    let cart;

    try {
         cart = await newCart.save();
         res.status(201).json(cart)
    } catch (err) {
        res.status(500).json(err)
    };

    if(!cart) return res.status(404).json({message:"cart not saved"})
};

exports.getAllCarts = async (req, res) => {
    let carts;

    try {
        carts = await Cart_model.find();
        res.status(200).json(carts)
    } catch (err) {
        res.status(500).json(err)
    };

    if(!carts) return res.status(404).json('No cart found')
};


exports.getCartById = async (req, res) => {
    const {userId} = req.params;
    let cart;

    try {
        cart = await Cart_model.findById(userId);
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json(err)
    };

    if(!cart) return res.status(404).json({message:"no cart found"});
};

exports.updateCart = async (req, res) => {
    const {id} = req.params;
    let cart;

    try {
        cart = await Cart_model.findByIdAndUpdate(id, {$set:req.body}, {new:true});
        res.status(200).json(cart)
    } catch (err) {
        res.status(500).json(err)
    }

}


exports.deleteCart = async (req, res) => {
    const {id} = req.params;
    let cart; 

    try {
        cart = await Cart_model.findByIdAndDelete(id);
        res.status(200).json(cart)
    } catch (err) {
        res.status(500).json(err)
    };

    if(!cart) return res.status(404).json({message:"No cart found"})
};


