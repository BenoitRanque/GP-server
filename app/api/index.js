import express from 'express'
import core from './core'
import io from '../utils/io'

const router = express.Router()

router.use(function (req, res, next) {
  next()
})

router.use(core)

export default router
