migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("av34ezp5prmwbud")

  collection.createRule = "@request.auth.isAdmin = true"
  collection.deleteRule = "@request.auth.isAdmin = true"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("av34ezp5prmwbud")

  collection.createRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
