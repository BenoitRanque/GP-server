import runQuery from './runQuery'

runQuery('drop', { table: 'sessions' })
// runQuery('users')
// runQuery('roles')
// runQuery('privileges')
runQuery('sessions')