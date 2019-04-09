---
title:  "NoSQL cheatsheet"
topic: "languages"
---

# Databases
* List databases: `show dbs`
* Specify database: `use database_name`
* Check current database: `db`
* Delete database: `db.dropDatabase()`

# Collections
* List collections: `show collections`
* Create collection: `db.createCollection(name)`
* Create collection with automatic `_id` field: `db.createCollection(name, {autoIndexId: true})`
* Delete collection: `db.collection_name.drop()`
* Rename collection: `db.collection_name.renameCollection("new_collection_name")`

# Operations examples
```
db.logins.find();
db.logins.find({}).pretty(); // Find all documents
db.logins.find({$and: {key1: value1}, {key2: value2}});
db.logins.find({$or: {key1: value1}, {key2: value2}});
db.logins.find({key1: value1});
db.logins.find({key1: {$ne: value1}}); // Not equal
db.logins.find({key1: {$lt: value1}}); // Less than
db.logins.find({key1: {$lte: value1}}); // Less than or equal
db.logins.find({key1: {$gt: value1}}); // Greater than
db.logins.find({key1: {$gte: value1}}); // Greater than or equal
db.logins.distinct("username", query); // Show all possible values of the field
```


# Resources and references
* [NoSQL cheatsheet](/programming/nosql)
