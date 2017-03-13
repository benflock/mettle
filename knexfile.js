module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'mettle'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
};
