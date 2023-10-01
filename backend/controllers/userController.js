const User_model = require("../models/User_model");


exports.getAllUser = async(req, res) => {
    const query = req.query.new;
    let users;

    try {
         users = query
        ?await User_model.find().sort({_id:-1}).limit(5)
        : await User_model.find();
        
        res.status(200).json(users)
    } catch (err) {
        console.log(err)
    }

    if(!users){
        return res.status(404).json({message:'User not found'})
    }
};

exports.getUserById = async(req, res) => {
    const {id} = req.params;
    let user;

    try {
        user = await User_model.findById(id);
        res.status(200).json({user})
    } catch (err) {
        res.status(500).json(err)
    };

    if(!user){
        return res.status(404).json({message:'User not found'})
    }
};

exports.updateUser = async (req, res) => {
    const {id} = req.params;
    let user;

    try {
        user = await User_model.findByIdAndUpdate(id,{$set:req.body}, {new:true}); 
        res.status(200).json({user})
    } catch (err) {
        res.status(500).json(err)
    };

    if(!user){
        return res.status(404).json({message:'User not found'})
    }
};

exports.deleteUser = async (req, res) => {
    const {id} = req.params;
    let user;

    try {
        user = await User_model.findByIdAndDelete(id); 
        res.status(200).json({message:"user deleted"})
    } catch (err) {
        res.status(500).json(err)
    };

    if(!user){
        return res.status(404).json({message:'User not found'})
    }
};

exports.getUsersStats = async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    try {
        const data = await User_model.aggregate([
            {$match:{createdAt: {$gte: lastYear}}},

            {
                $project:{
                    month:{$month:"$createdAt"},
                }, 
            },
            {
                $group:{
                    _id:"$month",
                    total:{$sum:1},
                },
            }
        ]);
        res.status(200).json(data);
    } catch (err) {
       res.status(500).json(err)
    }
}
