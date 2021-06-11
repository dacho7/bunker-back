const express = require('express');
const app = express();
const randomID = require('random-id');
const bodyParser = require('body-parser');

//require('../models/User');
const User = require('../models/User');

//parse aplication /x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}));

//parse aplicacion json()
app.use(bodyParser.json());

app.get('/cliente', (req, res) => {
  
  const name = req.body.name;

  if (!name){
    return res.status(400).json({
      ok:false,
      err: 'debe ingresar un nombre de usario'
    })
  }

  User.findOne({ where: {name: name}})
    .then(results => {
      if (!results){
        return res.status(400).json({
          ok:false,
          err:'usuario no encontrado'
        })
      }  
      return res.json({
        ok: true,
        usuario: results
      })
    })
    .catch( err => {
      return res.status(500).json({
        ok:false,
        err: 'Error interno con la base de datos'
      })
    })

});

app.post('/cliente', ( req, res ) => {

  let body = req.body

  if (!body.name | !body.address){
    return res.json({
      ok:false,
      err:'el nombre y direccion es obligatorio'
    })
  }
  
  let cliente = User.build({
    id: randomID(30, 'aA0'),
    name: body.name,
    phone: body.phone,
    address: body.address,
    email: body.email,
    dateCreated: new Date()
  })

  cliente.save()
    .then( (clientedB) => {
      res.json({
        ok:true,
        cliente: clientedB.dataValues
      })
    })
    .catch( err => {
      res.json({
        ok:false,
        err:'Error al registrar usuario duplicado'
      })
    })

});

app.put('/cliente', (req, res) => {

  let user = req.body.usuario

  if(!user){
    return res.status(400).json({
      ok:false,
      err: 'debe ingresar un usuario'
    })
  }
  
  let userUpdate = {
    name: req.body.name,
    phone: req.body.phone,
    address: req.body.address,
    email: req.body.email,
    role: req.body.role
  }

  User.update( userUpdate, { where: { name: user}})
    .then( result => {
      if (result[0] === 0){
        return res.json({
          ok:false,
          err: 'error usuario no existe', 
        })
      }
      return res.json({
        ok:true,
        userUpdate
      })
    }
  )

})

app.delete('/cliente', (req, res) => {

  let id = req.body.id

  if(!id){
    return res.json({
      ok:false,
      err:'Debe ingresar un id de usuario'
    })
  }

  User.findOne({where:{id}})
    .then( userDB => {
      if(!userDB){
        return res.json({
          ok:false,
          err:'usuario no existe'
        })
      }
      let nombre = userDB.name
      User.update( {state: 'DISABLED'}, { where: { id }})
        .then( result => {
          if (result[0] === 0){
            return res.json({
              ok:false,
              err: 'error al actualizar usuario', 
            })
          }
          return res.json({
            ok: true,
            nombre
          })
        })
    })
})
module.exports = app;
