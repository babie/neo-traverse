"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ava_1 = require("ava");
var _1 = require("./");
ava_1.test('foo', function (t) {
    var obj = {};
    t.true(_1.traverse(obj) === obj);
});
