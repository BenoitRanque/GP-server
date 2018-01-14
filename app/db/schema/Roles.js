import Sequelize from 'sequelize'
import db from '../'

import privileges from './privileges'

const roles = db.define('ROLES', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

roles.hasMany(privileges, {})

export default roles
