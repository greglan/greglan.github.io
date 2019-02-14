---
title:  "Encoding cheat sheet"
---
# URL encoding
* Dot: `%2e`
* Forward slash: `%2f`
* Backslash: `%5c`
* Ampersand: `%26`
* Equal: `%3d`
* Question mark: `%3f`
* Space: `%20`
* Plus: `%2b`
* Percent: `%25`
* ';': `%3b`
* '#': `%23`
* Newline: `%0a`
 Quote: `%27`


# Double encoding
* Encodes user request parameters twice in hexadecimal format. Possible to bypass security filters that only decode user input once. The second decoding process is executed by the backend platform or modules that properly handle encoded data, but don't have the corresponding security checks in place.
* Quote: `' -> %27 -> %2527'`
* Dot: `%252e`
* Forward slash: `%25f`
* Backslash: `%255c`
* Path traversal: `../ -> %2E%2E%2f -> %252E%252E%252F`
* Script tag: `</script> -> %3C%2Fscript%3E -> %253C%252Fscript%253E`
* PHP filter: `php://filter/convert.base64-encode/resource=index -> php%253A%252F%252Ffilter%252Fconvert%252Ebase64-encode%252Fresource%253Dindex`


# 16-bit unicode
* Dot: `%u002e`
* Forward slash: `%2215`
* Backslash: `%2216`


# Overlong UTF-8 unicode
* Dot: `%c0%2e, %e0%40%ae, %c0ae`
* Forward slash: `%c0%af, %e0%80%af, %c0%2f`
* Backslash: `%c0%5c, %c0%80%5c`


# HTML encoding
* Forward slash: `&#47`
* `<script>`: `&lt;script&gt;`


# Resources
* [OWASP double encoding](https://www.owasp.org/index.php/Double_Encoding)
