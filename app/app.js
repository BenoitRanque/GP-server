import express from 'express'
import bodyParser from 'body-parser'
import api from './api'
import headers  from './utils/headers'
import pg from './utils/pg'
import session from './utils/session'
import { app } from './utils/init'

app.request.pg = pg

app.use(headers)
app.use(session)
app.use('/api', bodyParser.json(), api)
app.use('/', express.static('public'))

export default app