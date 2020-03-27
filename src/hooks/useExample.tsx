import * as React from 'react';

// Learn how to write hooks:
// https://reactjs.org/docs/hooks-intro.html

/** */
export const useExample = (): ExampleHook => {
  const [value, setValue] = React.useState<string>('');
  return [value, setValue];
};

export type ExampleHook = [string, (value: string) => void];
