import pgp from 'pg-promise'
import { ENV, PG_NAME, PG_USER, PG_PASS, PG_HOST, PG_PORT } from '../../cfg'
import tables from './tables'

// enable require for sql files
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
