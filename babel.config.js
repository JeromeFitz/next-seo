// eslint-disable-next-line func-names
module.exports = function(api) {
  const env = api.env();
  api.cache(true);

  const config = {};
  config.presets = [];
  config.plugins = [];

  if (['cjs'].indexOf(env) > -1) {
    config.presets.push([
      'next/babel',
      { 'preset-env': { modules: 'commonjs' } },
    ]);
    config.presets.push(['minify']);
    config.plugins.push(['@babel/plugin-transform-react-jsx']);
  }

  if (['esm'].indexOf(env) > -1) {
    config.presets.push(['next/babel', { 'preset-env': { modules: false } }]);
    // config.plugins.push(['@babel/plugin-syntax-dynamic-import']);
    // config.plugins.push(['@babel/plugin-syntax-jsx']);
    // config.plugins.push(['@babel/plugin-transform-react-inline-elements']);
    // config.plugins.push(['@babel/plugin-transform-react-jsx']);
    config.presets.push(['minify']);
  }

  return config;
};
