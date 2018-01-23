import pgp from 'pg-promise'
import { ENV, DB_NAME, DB_USER, DB_PASS, DB_HOST, DB_PORT } from '../cfg'
import tables from './tables'

// enable require for sql files
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
  tables.forEach(table => {
    let query = require(`./tables/${table}.sql`)
    db
      .any(query)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  })
  console.log('')
  console.log('Finished creating and altering tables')
  console.log('')
  console.log('')
}

export default db
