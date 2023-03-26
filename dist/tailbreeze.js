"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tailbreeze = void 0;
function tailbreeze(model) {
    var className = "";
    for (var _i = 0, _a = Object.entries(model); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], val = _b[1];
        switch (typeof val) {
            case "string":
                className = className.concat(" ".concat(val, " "));
                break;
            //
            case "object":
                var string = "";
                for (var _c = 0, _d = Object.entries(model[key]); _c < _d.length; _c++) {
                    var _e = _d[_c], l2_key = _e[0], l2_val = _e[1];
                    var x = l2_val.split(" ");
                    for (var i = 0; i < x.length; ++i) {
                        x[i] = "".concat(l2_key, ":").concat(x[i]);
                        string = string.concat(" ".concat(x[i]));
                    }
                    string = string.replace(/default:/g, "");
                }
                className = className.concat(" ".concat(string, " "));
                break;
            //
            default:
                console.log("Tailbreeze Error: \"".concat(key, "\" has an invalid value type.")); // <<--*
        }
    }
    className = className.trim().replace(/\s+/g, " ");
    return className;
}
exports.tailbreeze = tailbreeze;
