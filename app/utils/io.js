import socketio from 'socket.io'
import server from '../server'

const io = socketio.listen(server)
export default io
export default function (server) {
  const io = socketio

  io.sockets.on('connection', socket => {
    
  })
  io.sockets.on('connection', socket => {

  })
  io.sockets.on('connection', socket => {

  })
}