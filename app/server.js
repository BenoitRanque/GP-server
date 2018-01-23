import app from './app'
import { PORT, HOST } from './cfg'

const server = app.listen(PORT, HOST, function (err) {
  if (err) throw err
  console.log('listening at ' + HOST + ' on port ' + PORT)
})
