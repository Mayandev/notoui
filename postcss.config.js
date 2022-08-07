const cssnano = require('cssnano')({
  preset: [
    'default',
    {
      discardComments: {
        removeAll: true,
      },
    },
  ],
});
module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nested')({ bubble: ['screen'] }),
    require('autoprefixer'),
    ...(process.env.MINIFY === 'true' ? [cssnano] : []),
  ],
};
