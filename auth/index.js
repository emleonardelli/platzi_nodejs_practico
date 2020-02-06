const jwt = require('jsonwebtoken')
const config = require('../config')
const secret = config.jwt.secret
const error=require('../utils/error')

function sign(data) {
  return jwt.sign(data, secret)
}

function verify(token){
  return jwt.verify(token, secret)
}
const check = {
  own: function(req, owner){
    const decoded = decodeHeader(req)
    if (decoded.id != owner) {
      throw error('No puedes hacer esto', 401)
    }
  },
}

function getToken(auth) {
  if (!auth) {
    throw error('No viene token', 403)
  }

  if (auth.indexOf('Bearer ') == -1){
    throw error('Formato invalido', 500)
  }

  let token = auth.replace('Bearer ', '')

  return token
}


function decodeHeader(req) {
  const authorization = req.headers.authorization || ''
  const token = getToken(authorization)
  const decoded = verify(token)

  req.user = decoded

  return decoded
}

module.exports = {
  sign,
  check
}