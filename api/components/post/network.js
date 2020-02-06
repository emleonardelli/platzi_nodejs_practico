const express=require('express')
const response=require('../../../network/response')
const controller=require('./index')
const router=express.Router()

router.get('/', list)
router.get('/:id', get)
router.post('/', upsert)
router.put('/', upsert)
router.delete('/:id', remove)

function list(req, res, next){
  controller.list()
    .then((data) => {
      response.success(req, res, data, 200)
    })
    .catch(next)
}

function get(req, res) {
  controller.get(req.params.id)
    .then((post) => {
      response.success(req, res, post, 200)
    })
    .catch((err) =>{
      response.error(req, res, err.message, 500)
    })
}

function upsert(req, res) {
  controller.upsert(req.body)
    .then((post) => {
      response.success(req, res, post, 201)
    })
    .catch((err) =>{
      response.error(req, res, err.message, 500)
    })
}

function remove(req, res) {
  controller.remove(req.params.id)
    .then(() => {
      response.success(req, res, 'Post eliminado', 201)
    })
    .catch((err) =>{
      response.error(req, res, err.message, 500)
    })
}

module.exports = router