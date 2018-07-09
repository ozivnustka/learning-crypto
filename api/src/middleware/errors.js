const errors = require('../common/errors')

module.exports = {
  async handleErrors(ctx, middleware) {
    try {
      await middleware()
    } catch (err) {
      // Known error, we threw it
      if (err instanceof errors.ApiError) {
        return void processKnownError(ctx, err)
      }

      // Unknown error
      processUnknownError(ctx, err)
    }
  },
}

function processKnownError(ctx, err) {
  ctx.status = err.status || 500
  ctx.body = {
    type: err.type,
    message: err.message,
  }
}

function processUnknownError(ctx, err) {
  ctx.status = 500
  ctx.body = {
    message: err.message,
  }
}
