const postcssMixins = require('postcss-mixins');
const postcssFor = require('postcss-for');
const postcssEach = require('postcss-each');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    postcssMixins(),
    postcssFor(),
    postcssEach(),
    postcssPresetEnv({
      preserve: true,
      features: {
        'nesting-rules': true
      }
    })
  ]
}
