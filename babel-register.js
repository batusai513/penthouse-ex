require('babel-register')({
  presets: ['es2015', 'stage-0', 'react'],
  plugins: [
    'transform-object-rest-spread',
    'transform-class-properties',
    'dynamic-import-node'
  ]
});
