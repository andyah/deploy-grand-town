exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  const config = getConfig();
  config.cache = false;
  actions.replaceWebpackConfig(config);
};
