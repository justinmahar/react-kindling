import React from 'react';
import { DivProps } from 'react-html-props';

export interface ExampleProps extends DivProps {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * Label shown in the component
   */
  label: string;
}

/**
 * This is the description for the Example component
 */
export const Example = ({ backgroundColor = '#5454fc', label, ...props }: ExampleProps) => {
  return (
    <div
      {...props}
      style={{
        backgroundColor,
        padding: 10,
        borderRadius: 5,
        color: 'white',
        display: 'inline-block',
        cursor: 'pointer',
        userSelect: 'none',
        ...props.style,
      }}
    >
      {label}
    </div>
  );
};
