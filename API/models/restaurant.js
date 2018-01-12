import Sequelize from 'sequelize';
import db from '../libraries/db';

const Restaurant = db.define('restaurant', {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },

  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false
  },

  postcode: {
    type: Sequelize.STRING,
    allowNull: false
  },

  town: {
    type: Sequelize.STRING,
    allowNull: false
  },

  phone: {
    type: Sequelize.STRING,
    allowNull: false
  },

  image: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

export default Restaurant;
