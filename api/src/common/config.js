/* eslint-disable no-process-env  */
module.exports = {
  appName: 'crypto',
  server: {
    port: process.env.PORT || 5000,
  },
  database: {
    connectionString: process.env.DATABASE_URL || 'postgres://postgres@localhost:5432/crypto-db',
  },
  logging: {
    stdout: {
      level: 'debug',
    },
    pretty: false,
  },
}

