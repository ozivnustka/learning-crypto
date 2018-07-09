const { isEmpty, flatten, toPairs, descend, prop, sortWith } = require('ramda')
const queries = require('../database/queries')

const parseLine = line => {
  const items = line.split(',')
  return {
    from: items[1],
    to: items[2],
    amount: Number(items[3]),
  }
}

const isValid = transaction =>
  !isEmpty(transaction.from)
    && !isEmpty(transaction.to)
    && !isEmpty(transaction.amount)
    && !isNaN(transaction.amount)

module.exports = {
  async getTransactions() {
    const blocks = await queries.getBlocksWithTransaction()
    const transactions = blocks.map(block => {
      const lines = block.data.split('\n')
      return lines.map(line => {
        const transaction = parseLine(line)
        return isValid(transaction)
          ? {
            ...transaction,
            createdAt: block.createdAt,
          }
          : null
      })
    })

    return flatten(transactions).filter(trans => Boolean(trans))
  },

  async getBalance() {
    const sortByAmount = sortWith([descend(prop('amount'))])

    const result = {}
    const transactions = await this.getTransactions()

    transactions.forEach(trans => {
      if (result[trans.from]) {
        result[trans.from] -= trans.amount
      } else {
        result[trans.from] = -trans.amount
      }
      if (result[trans.to]) {
        result[trans.to] += trans.amount
      } else {
        result[trans.to] = trans.amount
      }
    })

    return sortByAmount(toPairs(result).map(res => ({
      name: res[0],
      amount: res[1],
    })))
  },
}
