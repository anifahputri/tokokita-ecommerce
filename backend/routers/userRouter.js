import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import User from '../models/userModel';
import { generateToken, isAuth } from '../utils';

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
    userRouter.put(
      '/:id',
      isAuth,
      expressAsyncHandler (async (request, response) => {
        const user = await User.findById(request.params.id);
        const createdUser = await user.save();
        if (!user) {
          response.status(404).send({
            message: 'Pengguna Tidak Ditemukan!',
          });
        } else {
          user.name = request.body.name || user.name
          user.email = request.body.email || user.email
          user.password = request.body.password || user.password
          const updatedUser = await user.save();
          response.send({
            _id: createdUser._id,
            name: createdUser.name,
            email: createdUser.email,
            isAdmin: createdUser.isAdmin,
            token: generateToken(updatedUser),
          });
        }
      }));
export default userRouter;
