const UserModel = require('../models/User_model');
const bycrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
require('dotenv').config();


exports.userRegistration = async (req, res) => {
    const {email,username,password} = req.body;
    if(!email || !username || !password) return res.status(400).json({message:"all fields are required"});
   
    // check for existing user
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
        password:hashedPassword,
    });
    console.log(result)

    res.status(201).json({message: "User Created Successfully"});
};



exports.userLogin =async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password) return res.status(400).json({"message":'email and password are required'});

    const foundUser = await UserModel.findOne({email}).exec();
    console.log(foundUser)
    if(!foundUser) return res.status(401).json({'message':"email not found"});

    // check if password is correct
    const matchpwd = await bycrypt.compare(password, foundUser.password);
    if(matchpwd) {
        const roles = Object.values(foundUser.roles);

        // create jwt
        const accessToken = jwt.sign(
            {
                "UserInfo":{
                    "email":foundUser.email,
                    "roles":roles
                }
            },
            process.env.ACCESS_TOKEN_SECRETE,
            {expiresIn:'30s'}
        );
        // console.log(`accessToken:${accessToken}`)

        const refreshToken = jwt.sign(
            {"email":foundUser.email},
            process.env.REFRESH_TOKEN_SECRETE,
            {expiresIn:'60s'}
        );
        // console.log(`refresh:${refreshToken}`)

        // // saving refreshtoken with current user
        foundUser.refreshToken = refreshToken;
        const result = await foundUser.save();
            console.log(result)

        res.cookie('jwt', refreshToken, {httpOnly:true, sameSite:'none', secure:true, maxAge:60*1000});
        res.status(200).json({accessToken, roles})
    }else{
        res.status(401).json({"message":'incorrect password'})
    }

    
};

exports.refreshToken = async(req, res) => {
    const cookies = req.cookies;
    if(!cookies) return res.sendStatus(401);
    
    const refreshToken = cookies.jwt;
    // console.log(refreshToken);

    const foundUser =await UserModel.findOne({refreshToken}).exec();
    console.log(foundUser)
    if(!foundUser) return res.sendStatus(403) //forbiden

    // evaluate jwt
    jwt.verify(
        refreshToken, process.env.REFRESH_TOKEN_SECRETE, (err, decoded) => {
            if(err || foundUser.username !== decoded.username) return res.sendStatus(403) // 

            const roles = Object.values(foundUser.roles);

            const accessToken = jwt.sign(
                {
                    "UserInfo":{
                        "username":decoded.username,
                        "email":decoded.email,
                        "roles":roles,
                    }
                },
                process.env.ACCESS_TOKEN_SECRETE,
                {expiresIn:'60s'}
            );
            res.json({accessToken})
        }
    )
};

exports.logOut = async (req, res) => {
    const cookies = req.cookies;
    if(!cookies?.jwt) return res.sendStatus(204) // no content

    const refreshToken = cookies.jwt;
    // console.log(refreshToken)

    // check if refresh token is in db
    const foundUser = await UserModel.findOne({refreshToken}).exec();
    // console.log(foundUser)

    if(!foundUser){
        res.clearCookie('jwt', {httpOnly:true, sameSite:'none',secure:true }); 
        res.sendStatus(204);
    }
     //delete refreshtoken in the db
    foundUser.refreshToken = '';
    const result = await foundUser.save();
    console.log(result);
    res.clearCookie('jwt', {httpOnly:true, sameSite:'none',secure:true}); 
    res.sendStatus(204);
}





