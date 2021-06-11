const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const randomId = require('random-id');

const Invoice = require('../models/Invoice')

//parse aplication /x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}));

//parse aplication json()
app.use(bodyParser.json());

app.post('/createinvoice', (req, res) => {

  let body = req.body

  let invoice = Invoice.build({
    idInvoice: randomId(30, 'aA0'),
    day: body.day,
    user: body.user,
    account: body.account,
    dateCreated: new Date(),
    dateFinish: new Date()
  })

  invoice.save()
    .then( monthDB => { 
      res.json({
        ok: true,
        sale: monthDB.dataValues
      })
    })
    .catch( err => {
      res.status(400).json({
        ok: false, 
        err: err.message      
      })
    })
})

app.get('/verifymonth', (req, res) => {

  Month.findOne({where : {isClosed: 0}})
    .then( monthDB => {
      res.json({
        ok:true,
        idMonth: monthDB.idMonth
      })
    })
    .catch(err => {
      res.json({
        ok:false,
        err: err.message
      })
    })
})

module.exports = app;
