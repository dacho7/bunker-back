const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const randomId = require('random-id');

const Month = require('../models/Month')

//parse aplication /x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}));

//parse aplication json()
app.use(bodyParser.json());

app.get('/createmonth', (req, res) => {


  let fecha = new Date();
  fecha.setHours(fecha.getHours()-5);

  let month = Month.build({
    idMonth: randomId(30, 'aA0'),
    dateCreated: fecha,
    dateFinish: fecha
  })

  month.save()
    .then( monthDB => { 
      res.json({
        ok: true,
        month: monthDB.dataValues
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
