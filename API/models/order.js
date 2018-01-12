import Sequelize from 'sequelize';
import db from '../libraries/db';

const Order = db.define('order', {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },

  location: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: -1
  },

  status: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: -1
  },

  customerId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  instructions: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: ''
  }
});

export default Order;
