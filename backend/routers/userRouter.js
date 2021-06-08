import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import User from '../models/userModel';
import { generateToken } from '../utils';

const userRouter = express.Router();

userRouter.get(
  '/createadmin', 
  expressAsyncHandler(async (request, response) => {
    try {
      const user = new User({
        name: 'admin',
        email: 'adminn@example.com',
        password: 'admin',
        isAdmin: true,
      });
      const createdUser = await user.save();
      response.send(createdUser);
    } catch (err) {
      response.status(500).send({message: err.message});
    }
  }));
userRouter.post(
  '/login', 
  expressAsyncHandler (async (request, response) => {
    const loginUser = await User.findOne({
      email: request.body.email,
      password: request.body.password,
    });
    if (!loginUser) {
      response.status(401).send({
        message: 'Email atau Password yang dimasukkan Salah!',
      });
    } else {
      response.send({
        _id: loginUser._id,
        name: loginUser.name,
        email: loginUser.email,
        isAdmin: loginUser.isAdmin,
        token: generateToken(loginUser),
      })
    }
  }));
export default userRouter;
