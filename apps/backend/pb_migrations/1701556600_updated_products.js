migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("av34ezp5prmwbud")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bpvvqh3x",
    "name": "date_created",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("av34ezp5prmwbud")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bpvvqh3x",
    "name": "date_created",
    "type": "date",
    "required": true,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
})
