var webpack = require('webpack');
var path = require('path');
var paths = {
    entry: path.join(__dirname, 'client', 'app', 'router.js'),
    build: path.join(__dirname, 'public'),
    output: path.join(__dirname, 'public', 'bundle.js'),
    components: path.join(__dirname, 'client', 'app', 'components')
};

module.exports = {
    entry: [
        paths.entry
    ],
    output: {
        path: paths.build,
        filename: 'bundle.js',
    },
    resolve: {
        root: paths.components,
        alias: {
            Main: 'Main.js'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
};


