const Pool = require("pg").Pool
const pool = new Pool({
  user: process.env.dbUser,
  password: process.env.dbPassword,
  port: process.env.dbPort,
  host: process.env.dbHost,
  database: process.env.dbName,
})

module.exports = pool
