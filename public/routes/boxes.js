const express = require('express');
const app = express();
const randomID = require('random-id');
const bodyParser = require('body-parser');

//require('../models/Cliente');
const Box = require('../models/Box');

//parse aplication /x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get('/checkbox', (req, res) => {
  
  Box.findOne({ where: { isClose: 0} }).then( results => {
    if (!results){
      return res.json({
        ok: false,
        idBox: null
      })
    }  
    res.json({
      ok:true,
      idBox: results.dataValues.idBox
    })
  })
  .catch( err => {
    res.status(500).json({
      ok:false,
      err: err.message 
    })
  })
});

app.post('/createbox', (req, res) => {

  const idBox = randomID(30,'aA0');
  const month = req.body.month;

  const fecha = new Date()
  fecha.setHours(fecha.getHours()-5)

  const box = Box.build({
    idBox,
    month,
    dateCreated: fecha
  })

  box.save().then( boxDB => {
    return res.json({
      ok: true,
      idBox
    })

  })
  .catch( err => {
    res.status(500).json({
      ok:false,
      err:err.message 
    })
  })

})

app.put('/closebox', (req, res) => {

  const body = req.body;

  if (!body.idBox || !body.total){
    return res.json({
      ok:false,
      err: 'debe ingresar un id y un total'
    })
  }

  if(isNaN(body.total) || parseFloat(body.total) < 0){
    return res.json({
      ok:false,
      err: 'debe ingresar un valor valido'
    })
  }

  const idBox=body.idBox;

  const newDayBox = {
    dayClose: 1,
    total: body.total,
    note: body.note,
    difference: body.difference
  }

  if (!newDayBox.note){
    newDayBox.note = ''
  }

  if (!newDayBox.difference){
    newDayBox.difference = 0
  }

  Box.update( newDayBox , { where: { idBox }})
    .then( result => {
      if (result[0] === 0){
        return res.json({
          ok:false,
          err: 'error dia no existe', 
        })
      }

      Box.findOne({ where: { idBox } }).then( results => {
          res.json({
            ok:true,
            dayBox: results.dataValues
          })
        })
        .catch( err => {
          res.status(500).json({
            ok:false,
            err: 'Error interno con la base de datos'
          })
        })
    }
  )

})

module.exports = app;
