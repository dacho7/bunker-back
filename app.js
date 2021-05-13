const express = require('express');
const app = express();

const port = 3000

// peticiones de usuarios y ventas
app.use(require('./public/routes/index'));

app.listen(port)
