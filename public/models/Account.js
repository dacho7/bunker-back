const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database/bunkerdb.sqlite'
});

const Account = sequelize.define('accounts', {
  idCount: {
    type: DataTypes.TEXT,
    allowNull: false,
    primaryKey: true,
    unique: true
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  value: {
    type: DataTypes.REAL,
    allowNull: false
  }}, { timestamps: false}
);

Account.sync()
module.exports = Account;
