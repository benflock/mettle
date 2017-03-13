const env = process.env.NODE_ENV || 'development',
  knex = require('knex'),
  config = require('./knexfile'),
  connect = knex(config[env]);
