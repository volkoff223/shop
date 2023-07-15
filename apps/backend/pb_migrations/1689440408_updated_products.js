migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5qdynn9ut8fpn0k")

  collection.createRule = "@request.auth.isAdmin = true"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5qdynn9ut8fpn0k")

  collection.createRule = null

  return dao.saveCollection(collection)
})
