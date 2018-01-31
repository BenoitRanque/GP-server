import { io } from './init'

console.log('socket.io initiated')
io.sockets.on('connection', socket => {
  console.log('connection established')
  socket.send('connection establsished successfully')
})

export default io
