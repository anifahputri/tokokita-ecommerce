// import express dan running express menghasilkan return object
import express from 'express';
import cors from 'cors';
import data from './data';

const app = express();
// memakai cors untuk mencegah blocked policy
app.use(cors());
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
