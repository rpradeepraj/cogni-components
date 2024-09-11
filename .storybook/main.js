// .storybook/main.js
module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'], // Point to your stories
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],

  framework: {
    name: '@storybook/react-vite', // updated for Storybook v7 with Vite
    options: {}
  },

  docs: {},
  core: {
    builder: '@storybook/builder-vite',
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
};
