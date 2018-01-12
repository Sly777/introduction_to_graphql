import Sequelize from 'sequelize';
import db from '../libraries/db';

const OrderItem = db.define('orderitem', {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },

  price: {
    type: Sequelize.STRING,
    allowNull: false
  },

  quantity: {
    type: Sequelize.STRING,
    allowNull: false
  },

  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

export default OrderItem;
