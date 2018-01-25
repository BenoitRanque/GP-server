import express from 'express'

import query from './query'

const router = express.Router()

router.use('/query', query)

export default router