import * as React from 'react';

// Learn React:
// https://reactjs.org/docs/

export interface ExampleComponentProps {}

/** */
export function ExampleComponent(props: ExampleComponentProps): JSX.Element {
  return (
    <div
      style={{
        padding: 10,
        border: 'solid 2px #0F52BA',
        color: '#0F52BA',
        backgroundColor: '#D9F1FF',
        display: 'inline-block',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        userSelect: 'none',
      }}
    >
      Example Component
    </div>
  );
}

ExampleComponent.defaultProps = {};
