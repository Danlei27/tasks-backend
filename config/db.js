const config = require('../knexfile.js')
const knex = require('knex')(config)

knex.migrate.latest([knex])
module.exports = knex