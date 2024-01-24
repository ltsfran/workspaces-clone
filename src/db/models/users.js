import { DataTypes } from 'sequelize'
import bcrypt from 'bcrypt'
import { sequelize } from '@/db/models'
import { Workspaces } from '@/db/models/workspaces'

export const Users = sequelize.define('users', {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    set (value) {
      const hashedPassword = bcrypt.hashSync(value, 10)
      this.setDataValue('password', hashedPassword)
    }
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false
  }
})

Users.hasMany(Workspaces, { foreignKey: 'admin_id' })
Workspaces.belongsTo(Users, { foreignKey: 'admin_id' })
