const express=require('express')
const response=require('../../../network/response')
const controller=require('./index')
const router=express.Router()

router.post('/login', (req, res) => {
  controller.login(req.body.username, req.body.password)
    .then((token) => {
      response.success(req, res, token, 201)
    })
    .catch((err) =>{
      response.error(req, res, 'Informacion invalida', 400, err)
    })
})
module.exports = router