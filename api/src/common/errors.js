
class ApiError extends Error {
  constructor(message, status) {
    super(message)
    Error.captureStackTrace(this, this.constructor)
    this.name = this.constructor.name
    this.status = status
  }
}

class ValidationError extends ApiError {
  constructor(message = 'Validation did not passed.') {
    super(message, 400)
  }
}

module.exports = {
  ApiError,
  ValidationError,
}
