const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const randomId = require('random-id');

const Venta = require ('../models/Venta');

//const port = 3000 || process.env.PORT;

//parse aplication /x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}));

//parse aplication json()
app.use(bodyParser.json());

app.get('/venta', (req, res) =>{
  
  let body = req.body;

  Venta.findAll()
    .then(results => {
      if (!results){
        return res.status(500).json({
          ok:false,
          err: 'error al buscar usuarios'
        })
      }
      res.json({
        ok: true,
        usuarios: results
      })
    })
})

app.post('/venta', (req, res) => {

  let body = req.body;

  let venta = Venta.build({
    nFactura: randomId(30, 'aA0'),
    product: body.product,
    client: body.client,
    amount: body.amount,
    subtotal: body.subtotal,
    address: body.address,
    date: new Date(),
    state: body.state
  })

  venta.save()
    .then( clientedB => { 
      res.json({
        ok: true,
        cliente: clientedB.dataValues
      })
    })
    .catch( err => {
      res.status(400).json({
        ok: false, err: 'no se pudo guardar'
      })
    }
  )
})

app.put('/venta', (req, res) => {

  Venta.update({state: 'facturado'}, {where: {state:'cancelado'}})
    .then( result => {
      if (result[0] === 0 ){
        return res.json({
          ok:false,
          message: 'error al realizar el registro',
          result
        })
      }
      return res.json({
        ok:true,
        message: 'Registro de caja realizado con exito'
      })
    })
})

module.exports = app;
//app.listen(port)
