const pino = require('pino')
const config = require('./config')

let pretty = false

if (config.logging.pretty) {
  pretty = pino.pretty()
  pretty.pipe(process.stdout)
}


const logger = pino({
  name: config.appName,
  serializers: { ...pino.stdSerializers },
  level: config.logging.stdout.level,
}, pretty)

module.exports = logger
