import pgp from 'pg-promise'
import { PG_NAME, PG_USER, PG_PASS, PG_HOST, PG_PORT } from '../cfg'

// enable require for .sql files
require('require-sql')

const initOptions = {}
const connectOptions = {
  host: PG_HOST,
  port: PG_PORT,
  database: PG_NAME,
  user: PG_USER,
  password: PG_PASS
}

const db = pgp(initOptions)(connectOptions)

export default db
