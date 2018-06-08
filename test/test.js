"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var power_assert_1 = __importDefault(require("power-assert"));
var assert = power_assert_1.default;
var __1 = require("../");
it('return original object', function () {
    var obj = { foo: 'bar' };
    assert(__1.traverse(obj) === { hoge: 'fuga' });
});
