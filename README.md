# neo-traverse
Traverse and transform objects by visiting every node on a recursive walk without `this`!

## Install

```sh
npm install neo-traverse
```

or

```sh
yarn add neo-traverse
```

## Usage

```js
var traverse = require('neo-traverse');
var obj = [ 5, 6, -3, [ 7, 8, -2, 1 ], { f: 10, g: -13 } ];

traverse(obj).forEach((node, x) => {
    if (x < 0) node.update(x + 128);
});

console.dir(obj);
```

Output:

```json
[ 5, 6, 125, [ 7, 8, 126, 1 ], { f: 10, g: 115 } ]
```

## Mehotd