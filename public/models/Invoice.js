const {Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database/bunkerdb.sqlite'
});

const Invoice = sequelize.define('invoices', {
  idInvoice: {
    type: DataTypes.TEXT,
    allowNull: false,
    primaryKey: true,
    unique: true
  },
  day:{
    type: DataTypes.TEXT,
    allowNull: false
  },
  user: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  subtotal: {
    type: DataTypes.REAL,
    allowNull: false,
    defaultValue: 0
  },
  isTrust: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0 
  },
  account: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  dateCreated: {
    type: DataTypes.DATE,
    allowNull: false
  }}, { timestamps: false}
);

Invoice.sync()
module.exports = Invoice;
