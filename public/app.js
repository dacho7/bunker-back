const express = require('express');
const cors = require('cors')
const app = express();
require('dotenv').config()

// cors allow to access unknown origins
app.use(cors());

const port = process.env.PORT

// users and sales requests
app.use(require('./routes/index'));

/* headers
app.use(function(req, res, next) {
  req.header("Access-Control-Allow-Origin", GET);
});
*/
//app.use( cors({ origin: true, credentials: true  }) );

app.listen(port, () => {
  console.log('running on port', port)
})
