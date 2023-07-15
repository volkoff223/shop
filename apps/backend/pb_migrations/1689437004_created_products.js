migrate((db) => {
  const collection = new Collection({
    "id": "5qdynn9ut8fpn0k",
    "created": "2023-07-15 16:03:24.463Z",
    "updated": "2023-07-15 16:03:24.463Z",
    "name": "products",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "irt2hb75",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 64,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "racsgjvn",
        "name": "description",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": 300,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "bt9unqtm",
        "name": "images",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 99,
          "maxSize": 5242880,
          "mimeTypes": [
            "image/jpeg",
            "image/png",
            "image/svg+xml",
            "image/gif",
            "image/webp"
          ],
          "thumbs": [],
          "protected": false
        }
      },
      {
        "system": false,
        "id": "egjglw4m",
        "name": "price",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "bu9sw4qu",
        "name": "rating",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 10
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("5qdynn9ut8fpn0k");

  return dao.deleteCollection(collection);
})
