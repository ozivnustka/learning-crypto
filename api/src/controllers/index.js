const log = require('../common/logger')
const queries = require('../database/queries')
const blockServices = require('../services/blocks')

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
    ctx.body = await queries.getAllBlocks()
  },

  async addBlock(ctx) {
    ctx.status = 201
    ctx.body = await blockServices.addBlock(ctx.request.body)
  },

  async getLastBlock(ctx) {
    ctx.status = 200
    ctx.body = await queries.getLastBlock()
  },
}
