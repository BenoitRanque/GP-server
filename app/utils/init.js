import http from 'http'
import express from 'express'
import socketio from 'socket.io'
import { PORT, HOST } from '../cfg'

const app = express()

const server = http.createServer(app).listen(PORT, HOST, err => {
  if (err) throw err
  console.log('listening at ' + HOST + ' on port ' + PORT)
})

const io = socketio.listen(server)

export default server

export {
  server,
  app,
  io
}
