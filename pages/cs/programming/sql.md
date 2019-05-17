---
layout: page
title:  "SQL cheatsheet"
permalink: "sql.html"
tags: [programming, web]
summary: ""
---

## Data types
* **INT**: signed integer on 4 bytes
* **DATE** and **TIME**: self-explanatory. Moron.
* **VARCHAR**: strings
* **BLOB** and **TEXT**: binary object of big size
* **ENUM** and **SET**: string in a list

## Queries examples
{% highlight sql %}
SHOW databases;
CREATE database database_name;
USE database_name;
CREATE TABLE users (id INT NOT NULL, login VARCHAR(20), password VARCHAR(40));
DESC users; # Display the structure of the table
INSERT INTO table_name VALUES(123, 'test_user', 'test_pass'); # Clear-text password
INSERT INTO table_name VALUES(1234, 'sec_user', password('test_pass'));
ALTER TABLE users MODIFY password VARCHAR(41);
UPDATE users SET password=password('better_pass_123') WHERE login='test_user';
SELECT * FROM users WHERE login='test_user' AND password=password(better_pass_123');
DROP TABLE users;
{% endhighlight %}
