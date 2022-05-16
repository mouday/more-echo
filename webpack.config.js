const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'more-echo.js',
    globalObject: 'this',
    library: {
      name: 'moreEcho',
      type: 'umd',
    },
  },
};
