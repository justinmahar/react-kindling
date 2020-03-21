import React from 'react';
import { useExampleCounter } from '../hooks/useExampleCounter';

// Learn how to write stories:
// https://storybook.js.org/docs/basics/writing-stories/

// A Storybook is a collection of stories. Each story represents a single visual state of a component.
// Technically, a story is a function that returns something that can be rendered to screen.

// The default export defines metadata that applies to the group.
export default {
  title: 'useExampleCounter Hook',
};

// The named exports define the stories

// Needed to wrap the hook and give it visual representation.
const HookComponent = () => {
  const counter = useExampleCounter();
  return (
    <>
      <div>Count: {counter.count}</div>
      <div>
        <button onClick={() => counter.increment()}>+ Increment</button>
        <button onClick={() => counter.reset()}>Reset</button>
      </div>
    </>
  );
};

export const UseExampleEffectHookComponent = () => <HookComponent />;
UseExampleEffectHookComponent.story = {
  name: 'Hook State',
  parameters: {
    notes: 'The counter hook provides a counter with an increment and reset function.',
  },
};
