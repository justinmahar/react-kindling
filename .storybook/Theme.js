import { create } from '@storybook/theming';

const title = '🔥 React Kindling';
const url = 'https://justinmahar.github.io/react-kindling/';
// const image = `/brand.png`;

export default create({
  // [lock:core] 🚫---------------------------------------
  base: 'light',
  brandTitle: title,
  brandUrl: url,
  brandImage: undefined,
  // [/lock:core] ---------------------------------------🚫
});
