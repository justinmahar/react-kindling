import * as React from 'react';

/**
 * See documentation: https://devboldly.github.io/react-library-starter/useExample
 *
 *
 */
export const useExample = (defaultValue: string): ExampleHook => {
  const [value, setValue] = React.useState<string>(defaultValue);
  return [value, setValue];
};

export type ExampleHook = [string, (value: string) => void];
