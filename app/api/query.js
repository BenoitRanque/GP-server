import express from 'express'
import authorize from '../utils/authorize'

const router = express.Router()

router.get('/', authorize, (req, res) => {
  let query = require(`../db/pg/query/${req.params.query}.sql`)
  req.pg
    .any(query, { table: req.params.table, fields: req.params.fields })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.error(error)
    })
})

router.get('/route', authorize, handler({ type: 'select', table: users, where: [username, username]}))

function handler ({ table }) {
  return function (req, res, next) {
    switch (query) {
      case 'get':
        break
      case 'get_where':
        break
      case 'post_single':
        break
      case 'get':
        break
    }
    let query = require('../generic/query/get.sql')
    req.pg
      .any(query, { table })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.error(error)
      })
  }
}

function queryType () {
  'get'
  'get_where'
  ''
}


router.post('/', authorize, (req, res) => {

})
router.put('/', authorize, (req, res) => {

})
router.delete('/', authorize, (req, res) => {

})

export default router