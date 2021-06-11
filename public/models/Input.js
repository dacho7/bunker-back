const DBSOURCE = 'sqlite:../database/ventas.sqlite';
const sequelize = new Sequelize(DBSOURCE);

const Input = sequelize.define('input', {
  idInput: {
    type: DataTypes.TEXT,
    allowNull: false,
    primaryKey: true,
    unique: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  price: {
    type: DataTypes.REAl,
    allowNull: false
  },
  unitPrice: {
    type: DataTypes.REAL
  }}, { tableName: 'productos', timestamps: false}
);

Input.sync()
module.exports = Input;
