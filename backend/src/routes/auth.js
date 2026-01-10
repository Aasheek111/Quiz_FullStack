import express from 'express'
import {login} from '../controllers/loginController.js'
import {register} from '../controllers/registerController.js'
import { googleLogin } from '../controllers/google.js';

const userRouter=express.Router()
userRouter.post('/register',register);
userRouter.post('/login',login);
userRouter.post('/google',googleLogin)

export default userRouter;
