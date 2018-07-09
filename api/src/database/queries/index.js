const db = require('../index')

const serializeBlock = r => ({
  index: r.index,
  data: r.data,
  minedBy: r.mined_by,
  nonce: r.nonce,
  hash: r.hash,
  previousHash: r.previous_hash,
  createdAt: r.created_at,
})

module.exports = {
  async getAllBlocks({ order = 'asc' }) {
    const res = await db.client.query(`SELECT * from blocks order by index ${order}`)
    return res.rows.map(serializeBlock)
  },

  async getLastBlock() {
    const res = await db.client.query('SELECT * from blocks order by index desc limit 1')
    return serializeBlock(res.rows[0])
  },

  async getBlocksWithTransaction() {
    const res = await db.client.query('SELECT * from blocks where data iLike \'transaction,%\'')
    return res.rows.map(serializeBlock)
  },

  async insertBlock(data) {
    const text = 'INSERT INTO blocks(index, data, mined_by, nonce, hash, previous_hash) VALUES($1, $2, $3, $4, $5, $6) RETURNING *'
    const values = [data.index, data.data, data.minedBy, data.nonce, data.hash, data.previousHash]
    const res = await db.client.query(text, values)
    return serializeBlock(res.rows[0])
  },
}
