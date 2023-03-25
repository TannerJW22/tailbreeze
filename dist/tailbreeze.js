// :::
var Tailbreeze = /** @class */ (function () {
    function Tailbreeze(model) {
        this.build = model;
    }
    Tailbreeze.model = function (model) {
        return new Tailbreeze(model);
    };
    Tailbreeze.prototype.overwrite = function (newProp) {
        // @ts-ignore
        for (var _i = 0, _a = Object.entries(newProp); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], val = _b[1];
            this.build[key] = val;
        }
        return this.build;
    };
    Tailbreeze.prototype.clear = function (propName) {
        if (!propName) {
            this.build = {};
            return this.build;
        }
        return this.build;
    };
    // Returns valid Tailwind CSS className (string)
    Tailbreeze.prototype.toString = function () {
        var className = "";
        // @ts-ignore
        for (var _i = 0, _a = Object.entries(this.build); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], val = _b[1];
            switch (typeof val) {
                case "string":
                    className = className.concat(" ".concat(val, " "));
                    break;
                //
                case "object":
                    // @ts-ignore
                    var string = this.configObjToString(this.build[key]);
                    className = className.concat(" ".concat(string, " "));
                    break;
                //
                default:
                    console.log("Tailbreeze Error: \"".concat(key, "\" has an invalid value type.")); // <<--*
            }
        }
        className = className.trim().replace(/\s+/g, " ");
        return className;
    };
    // Returns valid Tailwind CSS className (string)
    Tailbreeze.prototype.toAltString = function () {
        var className = "";
        // @ts-ignore
        for (var _i = 0, _a = Object.entries(this.build); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], val = _b[1];
            switch (typeof val) {
                case "string":
                    className = className.concat(" ".concat(val, " "));
                    break;
                //
                case "object":
                    var string = "";
                    // @ts-ignore
                    for (var _c = 0, _d = Object.entries(this.build[key]); _c < _d.length; _c++) {
                        var _e = _d[_c], key2 = _e[0], val2 = _e[1];
                        string = string.concat(" ".concat(val2));
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
    };
    // Stringify Method for Object Conversions
    Tailbreeze.prototype.configObjToString = function (configObj) {
        var string = "";
        // @ts-ignore
        for (var _i = 0, _a = Object.entries(configObj); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], val = _b[1];
            var x = val.split(" ");
            for (var i = 0; i < x.length; ++i) {
                x[i] = "".concat(key, ":").concat(x[i]);
                string = string.concat(" ".concat(x[i]));
            }
        }
        return string;
    };
    return Tailbreeze;
}());
module.exports = Tailbreeze;
