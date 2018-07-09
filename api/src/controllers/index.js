const log = require('../common/logger')
const queries = require('../database/queries')
const blocksService = require('../services/blocks')
const validation = require('../services/validation')
const transactionsService = require('../services/transactions')

const start = new Date()

module.exports = {
  getStatus(ctx) {
    log.info('Status route hit.')
    ctx.status = 200
    ctx.body = {
      start,
    }
  },

  async getAllBlocks(ctx) {
    ctx.status = 200
    ctx.body = await queries.getAllBlocks(ctx.query)
  },

  async addBlock(ctx) {
    const validatedBody = validation.validateAddBlock(ctx.request.body)
    ctx.status = 201
    ctx.body = await blocksService.addBlock(validatedBody)
  },

  async getLastBlock(ctx) {
    ctx.status = 200
    ctx.body = await queries.getLastBlock()
  },

  async getTransactions(ctx) {
    ctx.status = 200
    ctx.body = await transactionsService.getTransactions()
  },

  async getBalance(ctx) {
    ctx.status = 200
    ctx.body = await transactionsService.getBalance()
  },
}
