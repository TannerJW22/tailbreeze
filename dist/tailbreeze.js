"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tailbreeze = void 0;
function tailbreeze(model) {
    var arr = [];
    for (var _i = 0, _a = Object.entries(model); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], val = _b[1];
        if (typeof val === "string") {
            arr.push(val);
        }
        else if (typeof val === "object" && Object.keys(val).length !== 0) {
            var subarr = tailbreeze(val);
            arr = arr.concat(subarr);
        }
        else {
            console.log("Tailbreeze Error: \"".concat(key, "\" is not a string or object."));
            return "Tailbreeze Error: \"".concat(key, "\" is not a string or object.");
        }
    }
    arr.filter(function (className) { return className !== ""; });
    var classNames = arr.join(" ");
    return classNames;
}
exports.tailbreeze = tailbreeze;
