const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.send('test');
});

app.listen(port, async () => {
  console.log(`Connection running on port ${port}`);
  await mongoose.connect('mongodb://localhost:27017')
    .then(() => console.log('Db connected'))
    .catch(() => console.error('Db connection failed'))
});