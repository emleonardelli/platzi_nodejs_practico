const db = {
  'user': [
    {id: 1, name: 'Ezequiel'},
  ]
}

function list(table){
  return db[table]
}

function get(table, id){
  let col=list(tabla)
  return col.filter(item => item.id === id)[0] || null
}

function upsert(table, data){
  db[table].push(data)
}

function remove(table, id){
  return true
}

module.exports = {
  list, 
  get, 
  upsert, 
  remove
}