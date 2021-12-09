"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
var components_1 = require("./components");
require("./App.css");
function App() {
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "App" }, { children: (0, jsx_runtime_1.jsx)("header", __assign({ className: "App-header" }, { children: (0, jsx_runtime_1.jsx)(components_1.Game, {}, void 0) }), void 0) }), void 0));
}
exports["default"] = App;
