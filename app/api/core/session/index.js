import express from 'express'

import login from './login.sql'

const router = express.Router()

router.post('/login', function (req, res) {
  req.pg.any(login, { username: req.body.username })

})

router.get('/logout', function (req, res) {
  req.session.destroy()
})

export default router