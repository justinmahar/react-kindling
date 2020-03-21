"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
// Learn how to write hooks:
// https://reactjs.org/docs/hooks-intro.html
/**
 * Simple counter hook used as an example. Returns the count and functions to increment and reset.
 */
var useExampleCounter = function (initialValue) {
    if (initialValue === void 0) { initialValue = 0; }
    var _a = React.useState(initialValue), count = _a[0], setCount = _a[1];
    var increment = React.useCallback(function () { return setCount(function (x) { return x + 1; }); }, []);
    var reset = React.useCallback(function () { return setCount(initialValue); }, [initialValue]);
    return { count: count, increment: increment, reset: reset };
};
exports.default = useExampleCounter;
