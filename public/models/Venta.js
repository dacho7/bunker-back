const sqlite3 = require('sqlite3').verbose();
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database/bunkerdb.sqlite'
});

const Venta = sequelize.define('ventas', {
  nFactura: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    unique: true
  },
  product: {
    type: DataTypes.STRING,
    allowNull: false
  },
  client: {
    type: DataTypes.STRING
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  subtotal: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING
  },
  date: {
    type:DataTypes.DATE
  },
  state: {
    type:DataTypes.STRING,
    defaultValue: 'facturado'
  }}, { timestamps: false }
);
Venta.sync()
module.exports = Venta;
