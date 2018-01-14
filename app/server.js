import app from './app'
import { PORT, IP } from './cfg'

const server = app.listen(PORT, IP, function (err) {
  if (err) throw err
  console.log('listening at ' + IP + ' on port ' + PORT)
})
