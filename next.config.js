const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([optimizedImages], { target: 'serverless',experimental: { async redirects() {
    return [
      { source: '/', destination: '/index', permanent: true }, // a permanent redirect
    ];
  },
},

});
