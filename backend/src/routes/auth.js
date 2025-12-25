import express from 'express'
import {login} from '../controllers/loginController.js'
import {register} from '../controllers/registerController.js'

const userRouter=express.Router()
userRouter.post('/register',register);
userRouter.post('/login',login);

export default userRouter;
