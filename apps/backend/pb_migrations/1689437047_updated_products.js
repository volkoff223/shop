migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5qdynn9ut8fpn0k")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5qdynn9ut8fpn0k")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
