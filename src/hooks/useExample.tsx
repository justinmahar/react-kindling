import * as React from 'react';

// Learn how to write hooks:
// https://reactjs.org/docs/hooks-intro.html

/** */
export const useExample = (defaultValue: string): ExampleHook => {
  const [value, setValue] = React.useState<string>(defaultValue);
  return [value, setValue];
};

export type ExampleHook = [string, (value: string) => void];
