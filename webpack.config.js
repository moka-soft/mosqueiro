const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
    entry: './index.js',
    plugins: [
        new Dotenv()
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    }
};