import * as React from 'react';

// Learn React:
// https://reactjs.org/docs/

export interface ExampleComponentProps {
  /** The text to render. */
  text?: string;
}

/**
 * Example component that renders the text its given.
 *
 * @returns The rendered component.
 */
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
      {typeof props.text !== 'undefined' ? props.text : 'Example Component'}
    </div>
  );
}

ExampleComponent.defaultProps = {};
