"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var Button_style_1 = require("./Button.style");
var Button = function (_a) {
    var _b = _a.label, label = _b === void 0 ? 'Submit' : _b, borderRadius = _a.borderRadius;
    return ((0, jsx_runtime_1.jsx)(Button_style_1.ButtonWrapper, { borderRadius: borderRadius, children: (0, jsx_runtime_1.jsxs)(Button_style_1.ButtonLabel, { children: ["V1", label] }) }));
};
exports.default = Button;
