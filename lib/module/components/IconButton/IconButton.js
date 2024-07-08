"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var IconButton_style_1 = require("./IconButton.style");
var IconButton = function (_a) {
    var _b = _a.label, label = _b === void 0 ? 'Submit' : _b, borderRadius = _a.borderRadius;
    return ((0, jsx_runtime_1.jsx)(IconButton_style_1.IconButtonWrapper, { borderRadius: borderRadius, children: (0, jsx_runtime_1.jsxs)(IconButton_style_1.IconButtonLabel, { children: ["V1-IconButton-", label] }) }));
};
exports.default = IconButton;
