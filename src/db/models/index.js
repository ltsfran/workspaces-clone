import { Sequelize } from 'sequelize'
import config from '@/db/config'

const env = process.env.NODE_ENV ?? 'development'
const {
  database,
  username,
  password,
  host,
  dialect,
  dialectModule,
  dialectOptions
} = config[env]

export const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
  dialectModule,
  dialectOptions
});

(async () => {
  await sequelize.sync()
  console.log('Models synchronized with the database')
})()
