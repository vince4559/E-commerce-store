const Product_Model = require("../models/Product_Model");

exports.addProduct = async (req, res) => {
    const {title,desc,img,categories,size,color, price} = req.body;
    let product;
    if(!req.body) return res.status(400).json({message:"all fields are required"})

    try {
        product = await Product_Model.create({
            title,desc,img,categories,size,color, price
        })
        res.status(201).json(product)
    } catch (err) {
        res.status(500).json(err)
    };

    if(!product) return res.status(404).json({message:"Product not added successfully"}) 
};

exports.getAllProducts = async (req, res) => {
    const qCategory= req.query.category;
    const qNew= req.query.new;

    let products;
    
    try {
        if(qNew){
            products = await Product_Model.find().sort({createdAt: -1}).limit(4);
        }else if(qCategory){
            products = await Product_Model.find({
                categories:{
                    $in:[qCategory],
                }
            });
        }else{
            products = await Product_Model.find();
        }
       
        res.status(200).json(products)
        
    } catch (err) {
        res.status(500).json(err)
    };
    if(!products) return res.status(404).json({message:"product not found"});
};

exports.getProductById = async (req, res) => {
    const {id} = req.params;
    let product;

    try {
        product = await Product_Model.findById(id);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err)
    };
    
    if(!product) return res.status(404).json({message:"product not found"})
};



exports.updateProduct = async (req, res) => {
    const {id} = req.params;
    let product;

    try {
        product = await Product_Model.findByIdAndUpdate(id, {$set:req.body}, {new:true});
        res.status(200).json(product)
    } catch (err) {
        res.status(500).json(err)
    };

    if(!product) return res.status(404).json({message:"product not found"});
};

exports.deleteProduct = async (req, res) => {
    const {id} = req.params;
    let product;

    try {
        product = await Product_Model.findByIdAndDelete(id);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err)
    };

    if(!product) return res.status(404).json({message:"product not found"})
};

