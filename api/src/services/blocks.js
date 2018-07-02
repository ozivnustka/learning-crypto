const sha256 = require('sha256')
const queries = require('../database/queries')

const generateHash = values => sha256(values)
const getValuesString = (index, name, data, previousHash, nonce) => `${index} ${name} ${data} ${previousHash} ${nonce}`

const validateGeneratedHash = (generatedHash, hash) => {
  if (generatedHash !== hash) {
    throw new Error()
  }
}

const getZeroString = number => {
  let zeros = ''
  for (let i; i < number; i++) {
    zeros += '0'
  }
  return zeros
}

const validateHashPrefix = (hash, number) => {
  const first4 = hash.substring(0, number)
  if (first4 === getZeroString(number)) {
    throw new Error()
  }
}

const isNextBlock = async index => {
  const lastBlock = await queries.getLastBlock()
  if (lastBlock.index + 1 !== index) {
    throw new Error()
  }
}


module.export = {
  async addBlock(body) {
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

    await isNextBlock(body.index)

    return queries.insertBlock(body)
  },
}
