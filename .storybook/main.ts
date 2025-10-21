module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    'storybook/internal/node-logger',
    '@storybook/addon-docs',
    '@storybook/addon-a11y'
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  core: {
    disableTelemetry: true, // 👈 Disables telemetry
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  }
};
