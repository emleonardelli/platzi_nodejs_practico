module.exports = {
  api: {
    port: process.env.API_PORT || 3000
  },
  jwt: {
    secret: process.env.JWT_SECRET || '123456'
  },
  mysql: {
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'ezequiel',
    password: process.env.MYSQL_PASS || 'no11lo22',
    database: process.env.MYSQL_DB || 'platzi_nodejs',
  }
}