import http from 'http'
import express from 'express'
import socketio from 'socket.io'

const app = express()
const server = http.createServer(app)
const io = socketio.listen(server)

export default server

export {
  server,
  app,
  io
}
