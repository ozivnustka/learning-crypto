const { Client } = require('pg')
const config = require('../common/config')

const client = new Client({
  connectionString: config.database.connectionString,
})

const start = () => client.connect()
const end = () => client.end()

module.exports = {
  client,
  start,
  end,
}
