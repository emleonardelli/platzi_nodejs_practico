const mysql=require('mysql')
const config=require('../config')
const dbconf={
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
}

let connection

function handleCon() {
  connection=mysql.createConnection(dbconf)
  connection.connect((err) => {
    if (err){
      console.error('[db error]', err);
      setTimeout(handleCon, 2000)
    }else{
      console.log('DB Connected!');
      
    }
      
  })
  connection.on('error', err => {
    console.error('[db error]', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST'){
      setTimeout(handleCon, 2000)
    }else{
      throw err
    }
    
  })
}

handleCon()

function list(table){
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${table}`, (err, data) => {
      if (err) return reject(err)
      resolve(data)
    } )
  }) 
}

module.exports = {
  list,
}