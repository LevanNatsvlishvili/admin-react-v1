const basePlugins = require('./plugins');

const plugins = [
  ({ addComponents }) => {
    addComponents([...basePlugins]);
  },
];

module.exports = plugins;
