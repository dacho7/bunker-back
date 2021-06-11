const sqlite3 = require('sqlite3').verbose();
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database/bunkerdb.sqlite'
});

const Sale = sequelize.define('sales', {
  idSale: {
    type: DataTypes.TEXT,
    allowNull: false,
    primaryKey: true,
    unique: true
  },
  invoice: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  product: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  type: {
    type: DataTypes.TEXT,
    allowNull: false,
    defaultValue: 'HOME_SALE'
  },
  amount: {
    type: DataTypes.REAL,
    allowNull: false,
    defaultValue: 1
  },
  value: {
    type: DataTypes.REAL,
    allowNull: false
  },
  address: {
    type: DataTypes.TEXT
  },
  dateCreated: {
    type:DataTypes.DATE,
    allowNull: false
  }}, { timestamps: false }
);
Sale.sync()
module.exports = Sale;
