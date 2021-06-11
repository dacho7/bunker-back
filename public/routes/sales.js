const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const randomId = require('random-id');

const Sale = require ('../models/Sale');
const Box = require ('../models/Box');
const Invoice = require('../models/Invoice')

//const port = 3000 || process.env.PORT;

//parse aplication /x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}));

//parse aplication json()
app.use(bodyParser.json());

app.get('/sales', (req, res) =>{
  
  Sale.findAll()
    .then(results => {
      if (!results){
        return res.status(500).json({
          ok:false,
          err: 'error al buscar usuarios'
        })
      }
      res.json({
        ok: true,
        Sales: results
      })
    })
})

app.post('/sale', (req, res) => {

  let body = req.body;

  let sale = Sale.build({
    idSale: randomId(30, 'aA0'),
    month: body.month,
    invoice: body.invoice,
    client: body.client,
    product: body.product,
    type: body.type,
    amount: body.amount,
    value: body.subtotal,
    state: body.state,
    address: body.address,
    dateCreated: new Date()
  })

  sale.save()
    .then( saleDB => { 
      res.json({
        ok: true,
        sale: saleDB.dataValues
      })
    })
    .catch( err => {
      res.status(400).json({
        ok: false, 
        err: err.message      
      })
    })

})

app.put('/sale', (req, res) => {

  Sale.update({state: 'cancelado'}, {where: {state:'facturado'}})
    .then( result => {
      if (result[0] === 0 ){
        return res.json({
          ok:false,
          message: 'no hay registros para realizar'
        })
      }
      return res.json({
        ok:true,
        message: 'se registraron '+result[0]+' Sales'
      })
    })
})

module.exports = app;
//app.listen(port)
