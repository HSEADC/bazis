const HtmlWebpackPlugin = require('html-webpack-plugin')

function createPage(template, filename, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks
  })
}

const htmlPages = [
  createPage('./src/index.html', './index.html', ['index']),
  createPage('./src/pages/articles.html', './pages/articles.html', ['index']),
  createPage('./src/pages/thought.html', './pages/thought.html', ['index']),
  createPage('./src/pages/rituals.html', './pages/rituals.html', ['index']),
  createPage('./src/pages/tests.html', './pages/tests.html', ['index']),
  createPage('./src/pages/tests/test1.html', './pages/tests/test1.html', ['index']),
  createPage('./src/pages/tests/test2.html', './pages/tests/test2.html', ['index']),
  createPage('./src/pages/tests/test3.html', './pages/tests/test3.html', ['index']),
  createPage('./src/pages/articles/article1.html','./pages/articles/article1.html', ['index']),
  createPage('./src/pages/articles/article2.html','./pages/articles/article2.html', ['index']),
  createPage('./src/pages/articles/article3.html','./pages/articles/article3.html', ['index']),
  createPage('./src/pages/rituals/ritual1.html','./pages/rituals/ritual1.html', ['index']),
  createPage('./src/pages/rituals/ritual2.html','./pages/rituals/ritual2.html', ['index']),
  createPage('./src/pages/rituals/ritual3.html','./pages/rituals/ritual3.html', ['index']),
  createPage('./src/pages/plug.html','./pages/plug.html'),
  createPage('./src/styleguide.html', './styleguide.html', ['styleguide'])
]

module.exports = htmlPages
