# basic-type-parser
Simple utility library to parse a string to basic types: bool, number, date or else keep it as string.

Install the library:
```
  npm install --save basic-type-parser
  yarn add basic-type-parser
```

Import the library in your javascript:
```javascript
  const btparser = require('basic-type-parser');
  or
  var btparser = require('basic-type-parser');
  or
  import btparser from 'basic-type-parser';
```
  
Use it to convert string to the type of data it applys:

Example:
```javascript
  btparser.parse('John'); // 'John'
  btparser.parse('3'); // 3 -- instead of '3'
  btparser.parse('1.6'); // 1.3 -- instead of '1.6'
  btparser.parse('true'); // true -- instead of 'true'
  btparser.parse('false'); // false -- instead of 'false'
  btparser.parse('1844-02-27'); // new Date('1844-02-27') -- instead of '1844-02-27' as string -- it uses moment to parse the date
```  

## Motivation
Because of Express and Google Datastore.
Using the Express request params, it is always string types and Google Datastore Key supports ints and strings values, so I want to support also both types, but when you get a request like this:
  /request/:id -> GET /request/1
The param 'id' is an '1' instead of a number.

This simple utility helps to parse any basic type that comes as string.
