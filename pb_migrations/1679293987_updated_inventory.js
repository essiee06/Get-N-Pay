migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ckz2aukd0zdjpuf")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "74cxxuil",
    "name": "quantity",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ckz2aukd0zdjpuf")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "74cxxuil",
    "name": "quanity",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
})
