import React from 'react';
import { action } from '@storybook/addon-actions';
import { ExampleComponent } from '../components/ExampleComponent';

// Learn how to write stories:
// https://storybook.js.org/docs/basics/writing-stories/

// A Storybook is a collection of stories. Each story represents a single visual state of a component.
// Technically, a story is a function that returns something that can be rendered to screen.

// The default export defines metadata that applies to the group.
export default {
  title: 'Example Component',
  component: ExampleComponent,
};

// The named exports define the stories
export const TextState = () => <ExampleComponent onClick={action('clicked')} text="Example text! Click me." />;
TextState.story = {
  name: 'Text State',
  parameters: {
    notes: "This example component shows the text it's given.",
  },
};

export const EmojiState = () => <ExampleComponent onClick={action('clicked')} text="😀 😎 👍 💯" />;
EmojiState.story = {
  name: 'Emoji State',
  parameters: {
    notes: 'This story shows the example component with some emojis.',
  },
};
