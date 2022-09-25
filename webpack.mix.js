let mix = require('laravel-mix');
let path = require('path');

mix
  .setPublicPath('dist')
  .js('resources/js/field.js', 'js')
  .vue({ version: 3 })
  .webpackConfig({
    externals: {
      vue: 'Vue',
    },
    output: {
      uniqueName: 'owenmelbz/nova-radio-field',
    },
  })
  .alias({
    'laravel-nova': path.join(__dirname, 'vendor/laravel/nova/resources/js/mixins/packages.js'),
  })
  .sass('resources/sass/field.scss', 'css');