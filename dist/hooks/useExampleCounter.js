const __importStar =
  (this && this.__importStar) ||
  function(mod) {
    if (mod && mod.__esModule) return mod;
    const result = {};
    if (mod != null) for (const k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result['default'] = mod;
    return result;
  };
Object.defineProperty(exports, '__esModule', { value: true });
const React = __importStar(require('react'));
// Learn how to write hooks:
// https://reactjs.org/docs/hooks-intro.html
/**
 * Simple counter hook used as an example. Returns the count and functions to increment and reset.
 */
const useExample = function(initialValue) {
  if (initialValue === void 0) {
    initialValue = 0;
  }
  const _a = React.useState(initialValue),
    count = _a[0],
    setCount = _a[1];
  const increment = React.useCallback(
    function() {
      return setCount(function(x) {
        return x + 1;
      });
    },
    [setCount]
  );
  const reset = React.useCallback(
    function() {
      return setCount(initialValue);
    },
    [initialValue, setCount]
  );
  return { count: count, increment: increment, reset: reset };
};
exports.default = useExample;
