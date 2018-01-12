import Sequelize from 'sequelize';
import db from '../libraries/db';

const DeliveryType = db.define('deliverytype', {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },

  type: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  }
});

export default DeliveryType;
