module.exports = function (api) {
  api.cache(true);

  const presets = [
    '@babel/preset-env', // Transpile modern JavaScript to ES5
  ];

  const plugins = [
    '@babel/plugin-transform-runtime', // Optimize code and avoid duplication
  ];

  return {
    presets,
    plugins,
  };
};
