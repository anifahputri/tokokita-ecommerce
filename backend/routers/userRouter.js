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
      });
    }
  }));
  userRouter.post(
    '/daftar', 
    expressAsyncHandler (async (request, response) => {
      const user = new User({
        name: request.body.name,
        email: request.body.email,
        password: request.body.password
      });
      const createdUser = await user.save();
      if (!createdUser) {
        response.status(401).send({
          message: 'Data yang dimasukkan Salah!',
        });
      } else {
        response.send({
          _id: createdUser._id,
          name: createdUser.name,
          email: createdUser.email,
          isAdmin: createdUser.isAdmin,
          token: generateToken(createdUser),
        });
      }
    }));
export default userRouter;
