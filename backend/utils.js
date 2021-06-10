/* eslint-disable arrow-body-style */
import jwt from "jsonwebtoken"
import config from "./config"

export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    config.JWT_SECRET
  );
};
export const isAuth = (request, response, next) => {
  const bearerToken = request.headers.authorization;
  if (!bearerToken) {
    response.status(401).send({message: 'Token tidak ditemukan'});
  } else{
    const token = bearerToken.slice(7, bearerToken.length);
    jwt.verify(token, config.JWT_SECRET, (err, data) => {
      if (err) {
        response.status(401).send({message: 'Token Salah'});
      } else {
        request.user = data;
        next();
      }
    });
  }
};