const config = {
  stories: [
    '../src/app/components/**/*.mdx',
    '../src/app/components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y'
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  core: {
    builder: {
      name: '@storybook/builder-vite',
      options: {
        viteConfigPath: 'vite.storybook.config.ts',
      },
    },
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
