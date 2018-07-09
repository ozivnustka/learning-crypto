const Joi = require('joi')
const errors = require('../common/errors')

const addBlockSchema = Joi.object().keys({
  index: Joi.number().required(),
  minedBy: Joi.string().required(),
  data: Joi.string().required(),
  previousHash: Joi.string().required(),
  hash: Joi.string().required(),
  nonce: Joi.number().required(),
})


module.exports = {
  validateAddBlock(body) {
    const res = Joi.validate(body, addBlockSchema)
    if (res.error) {
      throw new errors.ValidationError()
    }
    return res.value
  },
}
