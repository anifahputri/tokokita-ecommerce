import express from 'express';
import User from '../models/userModel';

const userRouter = express.Router();

userRouter.get('/createadmin', async (request, response) => {
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
});
export default userRouter;
