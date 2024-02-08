import type { Meta, StoryObj } from '@storybook/react';
import { Example } from '../components/Example';

// === Setup ===
const StoryComponent = Example; // <-- Set to your component
const meta: Meta<typeof StoryComponent> = {
  title: 'Stories/Example', // <-- Set to your story title
  component: StoryComponent,
  parameters: {
    options: { showPanel: false }, // Don't show addons panel
  },
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
