import http from 'http'
import express  from 'express'
import bodyParser from 'body-parser'

import headers  from './utils/headers'
import api from './api'
import pg from './utils/pg'

express.request.pg = pg

const app = express()

app.use(function (req, res, next) {
  console.log('request made')
  next()
})

app.use(headers)
app.use('/api', bodyParser.json(), api)
app.use('/', express.static('public'))

export default app