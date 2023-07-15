migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5qdynn9ut8fpn0k")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bt9unqtm",
    "name": "images",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 99,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5qdynn9ut8fpn0k")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bt9unqtm",
    "name": "images",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
})
