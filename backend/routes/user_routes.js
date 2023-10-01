const express = require('express');
const { getAllUser, getUserById, updateUser, deleteUser, getUsersStats } = require('../controllers/userController');
const userRouter = express.Router();
const verifyJWT = require('../middlewares/VerifyJwt');
const verifyRoles = require('../middlewares/verifyRoles');
const Role_List = require('../config/roles_lists') 


userRouter.get('/users',  getAllUser);
userRouter.get('/user/:id',verifyRoles(Role_List.Admin), getUserById);
userRouter.put('/updateuser/:id',verifyRoles(Role_List.Admin), updateUser);
userRouter.delete('/deleteuser/:id',verifyRoles(Role_List.Admin), deleteUser);
userRouter.get('/userstats',verifyRoles(Role_List.Admin), getUsersStats);

module.exports = userRouter;