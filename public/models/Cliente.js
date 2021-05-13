const {Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database/bunkerdb.sqlite'
});

const Cliente = sequelize.define('clientes', {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    unique: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  phone: {
    type: DataTypes.STRING
  },
  address: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  dateCreated: {
    type: DataTypes.DATE,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    defaultValue:'USER'
  },
  state: {
    type: DataTypes.STRING,
    defaultValue: 'ACTIVE'
  }}, { timestamps: false}
);

Cliente.sync()
module.exports = Cliente;
