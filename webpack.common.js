const path = require('path');

console.log('::: process.env.NODE_ENV: ', process.env.NODE_ENV);

module.exports = {
    entry: path.join(__dirname, './src/server.ts'),
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules|build|dist/,
            },
        ],
    },
    target: 'node',
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.[id]_[name]_[contenthash].js',
        path: path.join(__dirname, '/webpack_build'),
        publicPath: '/',
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    resolve: {
        alias: {
            '@/': 'src/',
            '@env': '.env',
        },
        extensions: ['.js', '.ts'],
        fallback: { https: false },
    },
};
