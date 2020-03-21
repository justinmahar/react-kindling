import * as React from 'react';

// Learn React:
// https://reactjs.org/docs/

interface ExampleComponentProps {
  text: string;
  onClick: () => void;
}

/**
 * Example component that displays whatever text you provide in a div and registers an onClick handler.
 */
export function ExampleComponent(props: ExampleComponentProps): JSX.Element {
  return (
    <div onClick={props.onClick} data-testid="example-component">
      {props.text}
    </div>
  );
}

ExampleComponent.defaultProps = {
  onClick: () => console.log('Click!'),
  text: 'Example text.',
};
