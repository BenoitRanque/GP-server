import http from 'http'
import app from './app'
import socket from './socket'
import { PORT, HOST } from './cfg'

const server = http.createServer(app).listen(PORT, HOST, err => {
  if (err) throw err
  console.log('listening at ' + HOST + ' on port ' + PORT)
})

// const server = app.listen(PORT, HOST, function (err) {
// })

export default server