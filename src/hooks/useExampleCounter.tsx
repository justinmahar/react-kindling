import * as React from 'react';

// Learn how to write hooks:
// https://reactjs.org/docs/hooks-intro.html

/**
 * Simple counter hook used as an example. Returns the count and functions to increment and reset.
 */
export const useExampleCounter = (initialValue = 0): { count: number; increment: () => void; reset: () => void } => {
  const [count, setCount] = React.useState(initialValue);
  const increment = React.useCallback(() => setCount(x => x + 1), []);
  const reset = React.useCallback(() => setCount(initialValue), [initialValue]);
  return { count, increment, reset };
};
