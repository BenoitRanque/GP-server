const tables = [
  'users'
]

export default function (db) {
  tables.forEach(table => {
    let query = require(`./${table}.sql`)
    db
      .any(query)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  })
}