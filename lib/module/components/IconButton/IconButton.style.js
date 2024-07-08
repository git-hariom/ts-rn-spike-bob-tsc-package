"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconButtonLabel = exports.IconButtonWrapper = void 0;
var native_1 = __importDefault(require("styled-components/native"));
exports.IconButtonWrapper = native_1.default.View(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 40px;\n  width: 100px;\n  border-radius: ", ";\n  background-color: red;\n  display: flex;\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n"], ["\n  height: 40px;\n  width: 100px;\n  border-radius: ", ";\n  background-color: red;\n  display: flex;\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n"])), function (props) { return ((props === null || props === void 0 ? void 0 : props.borderRadius) ? props === null || props === void 0 ? void 0 : props.borderRadius : 0); });
exports.IconButtonLabel = native_1.default.Text(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  fontsize: 12px;\n"], ["\n  fontsize: 12px;\n"])));
var templateObject_1, templateObject_2;
