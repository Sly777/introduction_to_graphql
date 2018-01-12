import Sequelize from 'sequelize';
import db from '../libraries/db';

const OrderDetail = db.define('orderdetail', {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },

  menuId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  priceTotal: {
    type: Sequelize.FLOAT,
    allowNull: false
  },

  priceSubtotal: {
    type: Sequelize.FLOAT,
    allowNull: false
  }
});

export default OrderDetail;
