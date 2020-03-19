import {
  Sequelize, DataTypes
} from "sequelize";
import configJson from '../config/config.json'

const config = configJson['development']
const sequelize = new Sequelize(config.database, config.username, config.password, config)

const User = sequelize.define('users', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false
  }
})

export default User