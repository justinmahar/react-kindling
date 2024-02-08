import type { Meta, StoryObj } from '@storybook/react';
import { Example } from '../components/Example';

// === Setup ===
const StoryComponenet = Example; // <-- Set to your component
const meta: Meta<typeof StoryComponenet> = {
  title: 'Stories/Example', // <-- Set to your story title
  component: StoryComponenet,
};
export default meta;
type Story = StoryObj<typeof meta>;

// === Stories ===
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
