import type { Meta, StoryObj } from '@storybook/react';

import { Example } from '../components/Example';
const StoryComponent = Example;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Stories/Example',
  component: StoryComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof StoryComponent>;

export default meta;
type Story = StoryObj<typeof meta>;
// For help writing stories, see: https://storybook.js.org/docs/writing-stories

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
