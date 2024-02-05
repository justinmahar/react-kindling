import type { Meta, StoryObj } from '@storybook/react';

import { Example } from '../components/Example';
import { StoryDecorator } from './core/StoryDecorator';
const StoryComponent = Example;

// For help writing stories, see: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Stories/Example',
  component: StoryComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // tags: ['autodocs'],
  decorators: [StoryDecorator],
} satisfies Meta<typeof StoryComponent>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Hello: Story = {
  args: {
    label: 'Hello',
  },
};

export const World: Story = {
  args: {
    label: 'World',
  },
};
