import express from 'express'
import authorize from '../utils/authorize'

const router = express.Router()

router.get('/:collection', authorize, (req, res) => {

})

export default router