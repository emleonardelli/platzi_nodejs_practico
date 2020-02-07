module.exports = {
  remoteDB: false,
  api: {
    port: process.env.API_PORT || 3000
  },
  post: {
    port: process.env.POST_PORT || 3002
  },
  jwt: {
    secret: process.env.JWT_SECRET || '123456'
  },
  mysql: {
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'ezequiel',
    password: process.env.MYSQL_PASS || 'no11lo22',
    database: process.env.MYSQL_DB || 'platzi_nodejs',
  },
  mysqlService: {
    host: process.env.MYSQL_SRV_HOST || 'localhost',
    port: process.env.MYSQL_SRV_PORT || 3001,
  }
}