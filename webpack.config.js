const path = require('path');
const githubResponse = require('./githubResponse')
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    https: true,
    port: 55004,
    before: function(app, server, compiler) {
      app.put('/repos/ComparetheMarket/engineering.github-actions/pulls/26/reviews/608670460', function(req, res) {
        res.json(githubResponse);
      });
    }
  },
}