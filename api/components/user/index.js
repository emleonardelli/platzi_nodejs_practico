const config = require('../../../config')
let store=null;
if (config.remoteDB){
  store=require('../../../store/remote-mysql')
}else{
  store=require('../../../store/mysql')
}
const ctrl=require('./controller')

module.exports= ctrl(store)