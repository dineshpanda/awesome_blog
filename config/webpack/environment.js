const { environment } = require('@rails/webpacker');

const webpack = require('webpack');

environment.plugins.append('Provide', new webpack.ProvidePlugin({
    $: 'jquery/dist/jquery.min',
    jQuery: 'jquery/dist/jquery.min',
    Popper: ['popper.js', 'default']
}));

module.exports = environment;
