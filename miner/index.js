const program = require('commander');
const sha256 = require('sha256')
const config = require('./config')
const rn = require('random-number')

var options = {
    min:  0,
    max:  999999999,
    integer: true
}

const getZeroString = number => {
    let zeros = ''
    for (let i = 0; i < number; i++) {
      zeros += '0'
    }
    return zeros
  }

function isHashPrefixValid(hash, number) {
  const first4 = hash.substring(0, number)
  return first4 === getZeroString(number)
}

function getValuesString(index, name, data, previousHash, nonce) {
    return `${index} ${name} ${data} ${previousHash} ${nonce}`
}

function generateHash(index, name, data, previousHash) {
  for(let i = 0; i<100000000; i++) {
    const nonce = rn(options)
    const stringValues = getValuesString(index, name, data, previousHash, nonce)
    const hash = sha256(stringValues)
    if(isHashPrefixValid(hash, config.zeroCounts)) {
        return {
            hash: hash.toLowerCase(),
            nonce,
        } 
    }
  }  
}


program
  .command('generate <index> <name> <data> <previousHash>')
  .description('generate hash')
  .action((index, name, dataParam, previousHash) => {
    const data = dataParam.split(';').join('\n')
    console.log({
        ...generateHash(index, name, data, previousHash),
        index,
        name,
        data,
        previousHash
    })
  })

program.parse(process.argv);