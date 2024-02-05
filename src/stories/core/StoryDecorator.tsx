import React from 'react';

// Wrap stories with extra markup. See: https://storybook.js.org/docs/writing-stories/decorators
export const StoryDecorator = (Story: any) => {
  return (
    <div style={{ display: 'flex' }}>
      <Story />
    </div>
  );
};
