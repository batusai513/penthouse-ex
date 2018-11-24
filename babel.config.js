module.exports = function babelConfig(api) {
  api.cache.using(() => process.env.NODE_ENV === 'development');
  return {
    presets: [
      [
        "@babel/preset-env",
        {
          useBuiltIns: 'entry',
          modules: false
        }
      ],
      "@babel/preset-react"
    ],
    plugins: [
      "@babel/plugin-syntax-dynamic-import",
      "@babel/plugin-syntax-export-namespace-from",
      "@babel/plugin-proposal-export-default-from",
      "@babel/plugin-syntax-function-bind",
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-transform-runtime"
    ],
    ignore: []
  };
};