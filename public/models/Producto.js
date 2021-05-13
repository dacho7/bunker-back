const sqlite3 = require('sqlite3');
const randomID = require('random-id');

const DBSOURCE = 'sqlite:../database/ventas.sqlite';
const sequelize = new Sequelize(DBSOURCE);

console.log(randomID(30,'aA0'));

const modelProducto = sequelize.define('cliente', {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    unique: true
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  value: {
    type: DataTypes.FLOAT
  },
  amount: {
    type: DataTypes.FLOAT
  },
  date: {
    type: DataTypes.DATE
  },
  state: {
    type: DataTypes.ENUM({'facturado','cancelado','fiado'})
  }}, { tableName: 'productos', timestamps: false}
);
modelProducto.sync();
module.exports = { 'Producto': modelProducto }
