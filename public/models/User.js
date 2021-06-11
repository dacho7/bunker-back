const {Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database/bunkerdb.sqlite'
});

const User = sequelize.define('users', {
  idUser: {
    type: DataTypes.TEXT,
    allowNull: false,
    primaryKey: true,
    unique: true
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true
  },
  role: {
    type: DataTypes.TEXT,
    defaultValue:'USER'
  },
  phone: {
    type: DataTypes.TEXT
  },
  address: {
    type: DataTypes.TEXT
  },
  email: {
    type: DataTypes.TEXT
  },
  dateCreated: {
    type: DataTypes.DATE,
    allowNull: false
  }}, { timestamps: false}
);

User.sync()
module.exports = User;
