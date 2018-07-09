const sha256 = require('sha256')
const queries = require('../database/queries')
const errors = require('../common/errors')

const generateHash = values => sha256(values)
const getValuesString = (index, name, data, previousHash, nonce) => `${index} ${name} ${data} ${previousHash} ${nonce}`

const validateGeneratedHash = (generatedHash, hash) => {
  if (generatedHash !== hash) {
    throw new errors.ValidationError('Hash is different from payload')
  }
}

const getZeroString = number => {
  let zeros = ''
  for (let i = 0; i < number; i++) {
    zeros += '0'
  }
  return zeros
}

const validateHashPrefix = (hash, number) => {
  const first4 = hash.substring(0, number)
  if (first4 !== getZeroString(number)) {
    throw new errors.ValidationError('Hash does not start with zeros')
  }
}

const validateNewBlockInput = async newBlock => {
  const lastBlock = await queries.getLastBlock()

  if (lastBlock.index + 1 !== newBlock.index) {
    throw new errors.ValidationError('Bad index input')
  }

  if (lastBlock.hash !== newBlock.previousHash) {
    throw new errors.ValidationError('Bad previous hash input')
  }
}


module.exports = {
  async addBlock(body) {
    await validateNewBlockInput(body)

    const valueString = getValuesString(
      body.index,
      body.minedBy,
      body.data,
      body.previousHash,
      body.nonce,
    )
    const hash = generateHash(valueString)

    validateGeneratedHash(body.hash, hash)
    validateHashPrefix(hash, 4)

    return queries.insertBlock(body)
  },
}
