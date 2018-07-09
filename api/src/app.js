const Koa = require('koa')
const koaBody = require('koa-body')
const koaCors = require('kcors')
const config = require('./common/config')
const log = require('./common/logger')
const routes = require('./common/routes')
const db = require('./database')
const errorMiddleware = require('./middleware/errors')

const app = new Koa()

app.use(koaBody())
app.use(koaCors())
app.use(errorMiddleware.handleErrors)

// Setup routes
app.use(routes)

// Start method
app.start = async () => {
  log.info('Starting server ...')
  await db.start()
  app.server = app.listen(config.server.port, () => {
    log.info(`==> 🌎  Server listening on port ${config.server.port}.`)
  })
}

// Stop method
app.stop = async () => {
  if (!app.server) {
    log.warn('Server not initialized yet.')
    return
  }

  log.info('Closing database connections.')
  await db.end()

  log.info('Stopping server ...')
  app.server.close(() => {
    log.info('Server stopped.')
  })
}

// Something can happen outside the error handling middleware, keep track of that
app.on('error', err => log.error(err, 'Unhandled application error.'))

// Something can go terribly wrong, keep track of that
process.once('uncaughtException', fatal)
process.once('unhandledRejection', fatal)

function fatal(err) {
  log.fatal(err, 'Fatal error occurred. Exiting the app.')

  // If the server does not terminate itself in a specific time, just kill it
  setTimeout(() => {
    throw err
  }, 5000).unref()
}

// If app was executed directly through node command or in a worker process
if (require.main === module) {
  app.start()

  process.once('SIGINT', () => app.stop())
  process.once('SIGTERM', () => app.stop())
}

module.exports = app
