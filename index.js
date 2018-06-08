"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Traverse = /** @class */ (function () {
    function Traverse(obj) {
        this.obj = obj;
    }
    Traverse.prototype.get = function () {
        var path = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            path[_i] = arguments[_i];
        }
        var node = this.obj;
        for (var _a = 0, path_1 = path; _a < path_1.length; _a++) {
            var p = path_1[_a];
            if (node && node.hasOwnProperty(p)) {
                node = node[p];
            }
            else {
                node = undefined;
                break;
            }
        }
        return node;
    };
    return Traverse;
}());
exports.Traverse = Traverse;
exports.traverse = function (obj) {
    return new Traverse(obj);
};
exports.default = exports.traverse;
