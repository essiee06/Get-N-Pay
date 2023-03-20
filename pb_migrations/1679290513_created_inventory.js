migrate((db) => {
  const collection = new Collection({
    "id": "ckz2aukd0zdjpuf",
    "created": "2023-03-20 05:35:13.385Z",
    "updated": "2023-03-20 05:35:13.385Z",
    "name": "inventory",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kqpejd99",
        "name": "id_no",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "80t8svkr",
        "name": "product_name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "gihv1knf",
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
        "id": "74cxxuil",
        "name": "quanity",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ckz2aukd0zdjpuf");

  return dao.deleteCollection(collection);
})
