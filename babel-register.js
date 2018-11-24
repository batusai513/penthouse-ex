require('@babel/register')({
  root: './',
  cache: false,
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ]
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        regenerator: true
      }
    ]
  ]
});
