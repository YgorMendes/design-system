module.exports = {
  addons: ["@storybook/addon-essentials"],
  babel: async (options) => ({
    ...options,
  }),
  framework: "@storybook/react",
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  webpackFinal: async (config, { configType }) => {
    // Make whatever fine-grained changes you need
    // Return the altered config
    return config;
  },
};
