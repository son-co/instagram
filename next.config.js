const withImages = require('next-images');

module.exports = withImages({
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  }
});
