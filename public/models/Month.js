const {Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database/bunkerdb.sqlite'
});

const Month = sequelize.define('months', {
  idMonth: {
    type: DataTypes.TEXT,
    allowNull: false,
    primaryKey: true,
    unique: true
  },
  description: {
    type: DataTypes.TEXT,
    defaultValue: ''
  },
  isClosed: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  totalSale: {
    type: DataTypes.REAL,
    allowNull: false,
    defaultValue: 0
  },
  totalShop: {
    type: DataTypes.REAL,
    allowNull: false,
    defaultValue: 0
  },
  totalTrust: {
    type: DataTypes.REAL,
    allowNull: false,
    defaultValue: 0
  },
  capital: {
    type: DataTypes.REAL,
    allowNull: false,
    defaultValue: 0
  },
  payroll: {
    type: DataTypes.REAL,
    allowNull: false,
    defaultValue: 0
  },
  dateCreated: {
    type: DataTypes.DATE,
    allowNull: false
  },
  dateFinish: {
    type: DataTypes.DATE,
    allowNull: false
  }}, { timestamps: false}
);

Month.sync()
module.exports = Month;
