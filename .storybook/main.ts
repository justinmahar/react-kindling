// [lock-all/] 🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫
import { StorybookConfig } from '@storybook/react-webpack5';
import remarkGfm from 'remark-gfm';

const config: StorybookConfig = {
  stories: [
    '../src/stories/core/1.README.stories.mdx', // default page
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-viewport',
    // Add support for GitHub flavored Markdown (tables, etc).
    // See: https://storybook.js.org/docs/writing-docs/mdx#lack-of-github-flavored-markdown-gfm
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
  ],
  staticDirs: ['../public'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
