const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/products', productRoute);

app.listen(port, async () => {
  console.log(`Connection running on port ${port}`);
  await mongoose.connect('mongodb://localhost:27017')
    .then(() => console.log('Db connected'))
    .catch(() => console.error('Db connection failed'))
});