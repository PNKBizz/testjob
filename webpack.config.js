let path = require('path');

module.exports = {
    context: __dirname,
    node: {
        __dirname: true
    },
    entry: './src/main.js',
    output: {
        filename: 'build.js',
        path: path.join(__dirname, './BUILD')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|png|svg|jpg|gif)$/,
                use: 'url-loader?limit=10000'
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
    /*devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    devtool: '#eval-source-map'*/
};

/*
if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin()
    ])
}
    */