const { json } = require('express');
const UserModel = require('../models/User_model');
const bycrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

exports.userRegistration = async (req, res) => {
    const {email,username,password} = req.body;
    if(!email || !username || !password) return res.status(400).json({message:"all fields are required"});
   
    const existingUser = await UserModel.findOne({username}).exec();
    const existingEmail = await UserModel.findOne({email}).exec();

    if(existingUser){
        return res.status(409).json({message:"this username already exist... try new username"})
     }else if(existingEmail){
        return res.status(409).json({message:"this email already exist... try new email"})
     }
    


    // encrypt password
    const hashedPassword =await bycrypt.hash(password, 10);

    // create and store the user
    const result = await UserModel.create({
        email, 
        username, 
        password:hashedPassword
    });
    console.log(result)

    res.status(201).json({message: "User Created Successfully"});
};


exports.userLogin =async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password) return res.status(400).json({message:"email and password are required"});

    const foundUser = UserModel.findOne({username}).exec();
    if(!foundUser) return res.status(401).json({message:"user not found"})

    // check if password is correct
    const match = await bycrypt.compare(password,foundUser.password);

    if(match){
        const roles = Object.values(foundUser.roles);
        // create access token 
        const accessToken = jwt.sign(
            {
                'UserInfo':{
                    "email":foundUser.email,
                    "username":foundUser.email,
                    "roles":roles,
                }
            },
            process.env.ACCESS_TOKEN_SECRETE,
            {expiresIn: '30s'}
        );

        // saving refreshtoken with associated username
        const refreshtoken = jwt.sign(
            {'username': foundUser.username},
            process.env.REFRESH_TOKEN_SECRETE,
            {expiresIn:'45s'}
        );

        const result = foundUser.save();
        console.log(result);

        res.cookie('jwt', refreshtoken, {
            httpOnly:true,
            secure:true,
            sameSite:true,
            maxAge:60
        });
        res.json({accessToken})
    }else{
        res.sendStatus(401)
    }
}




