// import express dan running express menghasilkan return object
import express from 'express';
import cors from 'cors';
import data from './data';
import mongoose from 'mongoose';
import config from './config';
import userRouter from './routers/userRouter';

mongoose
  .connect(config.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }).then(() => {
  console.log('Connected to Database');
})
.catch((error) => {
  console.log(error.reason);
});
const app = express();
// memakai cors untuk mencegah blocked policy
app.use(cors());
app.use('/api/users', userRouter);
app.get('/api/products', (request, response) => {
  // return array dari data.js
  // sending data ke client
  response.send(data.products);
});
app.get('/api/products/:id', (request, response) => {
  const product = data.products.find((x) => x._id === request.params.id);
  if (product) {
    response.send(product);
  } else {
    response.status(404).send({ message: 'Produk Tidak Ditemukan!' });
  }
});


app.listen(5000, () => {
  console.log('berjalan pada http://localhost:5000');
});
