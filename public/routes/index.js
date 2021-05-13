const express = require('express');
const app = express();

app.use(require('./clientes'));
app.use(require('./ventas'));

module.exports = app;
