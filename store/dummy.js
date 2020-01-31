const db = {
  'user': [
    {id: 1, name: 'Ezequiel'},
  ]
}

async function list(table){
  return db[table]
}

async function get(table, id){
  let col=await list(tabla)
  return col.filter(item => item.id === id)[0] || null
}

async function upsert(table, data){
  db[table].push(data)
}

async function remove(table, id){
  return true
}

module.exports = {
  list, 
  get, 
  upsert, 
  remove
}