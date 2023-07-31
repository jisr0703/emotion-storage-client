const webpack = require('webpack');

module.exports = {
  transpileDependencies: true,
  devServer: {
    proxy: process.env.VUE_CLI_SERVICE === 'serve:test'
      ? {
          '/kxoxxy': {
            target: process.env.VUE_APP_API_URL,
            pathRewrite: {
              '^/kxoxxy': '/mock',
            },
          },
        }
      // : null,
      : {
        '/kxoxxy': {
          target: process.env.VUE_APP_API_URL,
        }
      }
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
          VUE_APP_API_URL: JSON.stringify(process.env.VUE_APP_API_URL),
        },
      }),
    ],
  },
};