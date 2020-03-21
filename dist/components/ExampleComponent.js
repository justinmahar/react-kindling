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
/**
 * Example component that displays whatever text you provide in a div and registers an onClick handler.
 */
function ExampleComponent(props) {
    return (React.createElement("div", { onClick: props.onClick, "data-testid": "example-component" }, props.text));
}
exports.default = ExampleComponent;
ExampleComponent.defaultProps = {
    onClick: function () { return console.log('Click!'); },
    text: 'Example text.',
};
