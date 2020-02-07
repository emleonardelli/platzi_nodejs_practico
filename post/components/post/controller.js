const TABLA = 'post'

module.exports=function(injectedStore) {
  let store=injectedStore
  if (!store){
    store=require('../../../store/mysql')
  }
  function list(){
    return store.list(TABLA)
  }

  function get(id){
    return store.get(TABLA, id)
  }

  function upsert(body){
    const post={
      text: body.text,
      user: body.user_id,
    }

    if (body.id){
      post.id=body.id
    }

    return store.upsert(TABLA, post)
  }

  function remove(id){
    return store.remove(TABLA, id)
  }

  return {
    list, 
    get,
    upsert,
    remove
  }
}
