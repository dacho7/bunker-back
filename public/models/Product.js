const sqlite3 = require('sqlite3');
const randomID = require('random-id');

const DBSOURCE = 'sqlite:../database/ventas.sqlite';
const sequelize = new Sequelize(DBSOURCE);

const modelProducto = sequelize.define('cliente', {
  idProduct: {
    type: DataTypes.TEXT,
    allowNull: false,
    primaryKey: true,
    unique: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  costPrice: {
    type: DataTypes.REAl,
    allowNull: false
  },
  salePrice: {
    type: DataTypes.REAl,
    allowNull: false
  }}, { timestamps: false }
);
modelProducto.sync();
module.exports = { 'Product': modelProducto }
