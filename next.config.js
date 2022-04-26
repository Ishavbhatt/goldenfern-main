const webpack = require('webpack');
module.exports = {
  future: {
    webpack5: true
  },
  reactStrictMode: true,
  
webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
config.plugins.push(new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
    }))
return config;
}}
// module.exports = {
//   reactStrictMode: true,
// }