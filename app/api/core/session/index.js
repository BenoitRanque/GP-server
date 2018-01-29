import express from 'express'

import login from './login.sql'

const router = express.Router()

console.log(login)

router.post('/login', function (req, res) {
  req.pg.any(login, { username: req.body.username })
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.log(error)
  })

})

router.get('/logout', function (req, res) {
  req.session.destroy()
})

export default router