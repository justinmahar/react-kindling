import { render, RenderResult } from '@testing-library/react';
import React from 'react';
import { ExampleComponent } from '../components/ExampleComponent';

// Learn how to test React components:
// https://testing-library.com/docs/react-testing-library/intro

function renderExampleComponent(props: {}): RenderResult {
  return render(<ExampleComponent {...props} text="Example!" />);
}

describe('ExampleComponent', () => {
  test('should display a container with the text provided', async () => {
    const { findByTestId } = renderExampleComponent({});
    const exampleComponentHtmlElement = await findByTestId('example-component');
    expect(exampleComponentHtmlElement).toHaveTextContent('Example!');
  });
});
