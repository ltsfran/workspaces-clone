import { Sequelize } from 'sequelize'
import config from '@/db/config'

const {
  database,
  username,
  password,
  host,
  dialect
} = config
const isProd = process.env.NODE_ENV === 'production'

export const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
  ...(isProd && {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  })
})
