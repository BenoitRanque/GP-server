import pgp from 'pg-promise'
import { DB_NAME, DB_USER, DB_PASS, DB_HOST, DB_PORT } from '../cfg'

const initOptions = {}
const connectOptions = {
  host: DB_HOST,
  port: DB_PORT,
  database: DB_NAME,
  user: DB_USER,
  password: DB_PASS
}

const db = pgp(initOptions)(connectOptions)

export default db