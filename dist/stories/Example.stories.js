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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.World = exports.Hello = void 0;
var react_1 = __importDefault(require("react"));
var Example_1 = require("../components/Example");
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
exports.default = {
    title: 'Components/Example',
    component: Example_1.Example,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
var Template = function (args) { return react_1.default.createElement(Example_1.Example, __assign({}, args)); };
exports.Hello = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
exports.Hello.args = {
    label: 'Hello',
};
exports.World = Template.bind({});
exports.World.args = {
    label: 'World',
};
