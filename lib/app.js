const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use('/api/v1/flowers', require('./controllers/flowers'));
app.use('/api/v1/trees', require('./controllers/trees'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app; 