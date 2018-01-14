import Sequelize from 'sequelize'
import db from '../'

import Roles from './Roles'

const privileges = db.define('PRIVILEGES', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true
  },
  value: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

Privileges.belongToMany(Roles, {
  as: ['Privileges'],
  through: ['id'], //this can be string or a model,
  foreignKey: 'Parent_rowId'
})

export default privileges