import express from 'express'
import core from './core'
import io from '../utils/io'

const router = express.Router()

router.use(function (req, res, next) {
  console.log('request made')
  next()
})

router.post('/test', (req, res) => {
  console.log(req.body.message)
  req.session.message = req.body.message
  res.status(200).send()
})

router.get('/test', (req, res) => {
  res.status(200).json(req.session.message)
})

router.get('/session', (req, res) => {
  res.status(200).json(req.session)
})

router.use(core)

export default router
