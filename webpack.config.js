var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin')

module.exports = function(argv) {
    var config = {
        entry: {
            app: [
                'webpack/hot/dev-server',
                'webpack-hot-middleware/client',
                './app/entry/app'
            ]
        },
        output: {
            path: path.join(__dirname, 'release', 'resource', 'vendor'),
            filename: '[name].js',
            publicPath: '/resource/vendor/'
        },
        module: {
            loaders: [
                {
                    test: /\.css$/,
                    loader: argv.d
                        ? 'react-hot!style!css?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64]!autoprefixer'
                        : ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[hash:base64]!autoprefixer')
                },
                {
                    test: /\.less$/,
                    loader: argv.d
                        ? 'react-hot!style!css?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64]!autoprefixer!less'
                        : ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[hash:base64]!autoprefixer!less')
                },
                {
                    test: /\.(scss|sass)$/,
                    loader: argv.d
                        ? 'react-hot!style!css?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64]!autoprefixer!sass'
                        : ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[hash:base64]!autoprefixer!sass')
                },
                {
                    test: /\.coffee$/,
                    loader: 'coffee'
                },
                {
                    test: /\.js[x]?$/,
                    exclude: [path.resolve('node_modules')],
                    loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015,presets[]=stage-1']
                },
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    loaders: (function() {
                        var loader = ['file?limit=8192']
                        if(!argv.d) { loader.push('image-webpack?bypassOnDebug=true&optimizationLevel=7&progressive=true&interlaced=true&multipass=true&svgo=true') }
                        return loader
                    }).call(this)
                },
                {
                    test: /\.(ttf|eot|svg|woff|woff2)[?\w#]*$/,
                    loader: 'file?limit=8192'
                },
                {
                    test: /\.json$/,
                    loader: 'json'
                },
                {
                    test: /\.mp3$/,
                    loader: 'file'
                },
                {
                    test: /\.html$/,
                    loader: 'html'
                }
            ]
        },
        plugins: (function() {
            var plugins = [
                new ExtractTextPlugin('[name].css'),
                new CommonsChunkPlugin('vendor.js'),
                new webpack.DefinePlugin({
                    __DEV__: argv.d
                }),
                new webpack.optimize.OccurenceOrderPlugin(),
                new webpack.HotModuleReplacementPlugin(),
                new webpack.NoErrorsPlugin()
            ]
            if(!argv.d) {
                plugins.push(new webpack.optimize.UglifyJsPlugin({
                    compress: { warnings: false }
                }))
            }
            return plugins
        }).call(this),
        resolve: {
            root: [
                path.resolve('./firekeeper')
            ],
            alias: {
                config: path.resolve('./config')
                , vendor: path.resolve('./vendor')
                , example: path.resolve('./example')
            },
            extensions: ['', '.js', '.jsx', '.coffee']
        }
    }
    return config
}
