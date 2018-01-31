import server from './utils/init'
import { PORT, HOST } from './cfg'

server.listen(PORT, HOST, err => {
  if (err) throw err
  console.log('listening at ' + HOST + ' on port ' + PORT)
})