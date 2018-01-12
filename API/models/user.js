import Sequelize from 'sequelize';
import db from '../libraries/db';

const User = db.define('user', {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },

  password: {
    type: Sequelize.STRING,
    allowNull: false
  },

  last_login: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.fn('NOW')
  },

  status: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  }
});

export default User;
