const express = require('express');
const apiRoutes = require('./routes/api');
const htmlRoutes = require('./routes/html');

const app = express();

const PORT = process.env.PORT || 3001;
const BASE_URL = process.env.BASE_URL || 'localhost';

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`Serving file at http://${BASE_URL}:${PORT}`);
})