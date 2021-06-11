const sqlite3 = require('sqlite3').verbose();
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database/bunkerdb.sqlite'
});

const Trust = sequelize.define('trusts', {
  idTrust: {
    type: DataTypes.TEXT,
    allowNull: false,
    primaryKey: true,
    unique: true
  },
  client: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  value: {
    type: DataTypes.REAL,
    allowNull: false
  },
  dateCreated: {
    type: DataTypes.DATE,
    allowNull: false
  }}, { timestamps: false }
);
Trust.sync()
module.exports = Trust;
