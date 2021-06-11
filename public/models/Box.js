const {Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database/bunkerdb.sqlite'
});

const Box = sequelize.define('boxes', {
  idBox: {
    type: DataTypes.TEXT,
    allowNull: false,
    primaryKey: true,
    unique: true
  },
  month: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  isClose: {
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
  note: {
    type: DataTypes.TEXT,
    defaultValue: 'NORMAL'
  },
  difference: {
    type: DataTypes.REAL,
    defaultValue: 0
  },
  dateCreated: {
    type: DataTypes.DATE,
    allowNull: false
  }}, { timestamps: false}
);

Box.sync()
module.exports = Box;
