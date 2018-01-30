import session from 'express-session'
import pgSession from 'connect-pg-simple'
import pg from './pg'
import { COOKIE_SECRET } from '../cfg'

export default session({
  store: new pgSession({
    pgPromise : pg,                // Connection pool
    tableName : 'user_session'   // Use another table-name than the default "session" one
  }),
  secret: COOKIE_SECRET,
  resave: false,
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 days
})
