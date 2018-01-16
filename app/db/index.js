import pgp from 'pg-promise'
import { ENV, DB_NAME, DB_USER, DB_PASS, DB_HOST, DB_PORT } from '../cfg'
import tables from './tables'
require('require-sql')

const initOptions = {}
const connectOptions = {
  host: DB_HOST,
  port: DB_PORT,
  database: DB_NAME,
  user: DB_USER,
  password: DB_PASS
}

const db = pgp(initOptions)(connectOptions)

if (ENV === 'dev') {
  // create or alter tables
  tables(db)
}


// db
//   .any('SELECT ONE FROM "users" WHERE "USERNAME" IS ${username}', { username: username })
//   .then(data => {
//     console.log(data)
//   })
//   .catch(error => {
//     console.error(error)
//   })

export default db