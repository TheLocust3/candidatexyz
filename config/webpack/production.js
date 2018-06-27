const environment = require('./environment');

environment.loaders.prepend('babel', {
    test: /\.js/,
    exclude: /react-parallax/,
    loader: 'babel-loader',
    query: {
        presets: ['react', 'env']
    }
});

const config = environment.toWebpackConfig();

delete(config.optimization.minimizer);

module.exports = config;
