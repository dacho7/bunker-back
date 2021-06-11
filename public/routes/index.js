const express = require('express');
const app = express();

app.use(require('./clients'));
app.use(require('./sales'));
app.use(require('./boxes'));
app.use(require('./months'));
app.use(require('./invoices'));

//app.use(require('./products'));

module.exports = app;
