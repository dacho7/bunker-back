const sqlite3 = require('sqlite3').verbose();
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database/bunkerdb.sqlite'
});

const Shop = sequelize.define('shops', {
  idShop: {
    type: DataTypes.TEXT,
    allowNull: false,
    primaryKey: true,
    unique: true
  },
  invoice: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  input: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  amount: {
    type: DataTypes.REAL,
    allowNull: false,
    defaultValue: 1
  },
  value: {
    type: DataTypes.REAL,
    allowNull: false
  }
  dateCreated: {
    type: DataTypes.DATE,
    allowNull: false
  }}, { timestamps: false }
);
Shop.sync()
module.exports = Shop;
