import Sequelize from 'sequelize'
import db from '../'

import roles from './roles'

const users = db.define('USERS', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    defaultValue: ''
  },
  displayname: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    defaultValue: ''
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: ''
  }
})

users.hasMany(roles, {})

export default users