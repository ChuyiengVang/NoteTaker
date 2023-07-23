const express = require('express');
const {Api} = require('./routes/api');

const app = express();

const PORT = process.env.PORT || 3001;
const BASE_URL = process.env.BASE_URL || 'localhost';
const api = new Api('./db/db.json');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', api.router);
//app.on('exit', api.store.save());

  app.listen(PORT, () => {
    console.log(`Serving file at http://${BASE_URL}:${PORT}`);
  })