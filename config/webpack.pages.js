const HtmlWebpackPlugin = require('html-webpack-plugin')

function createPage(template, filename, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks
  })
}

const htmlPages = [
  createPage('./src/index.html', './index.html', ['index', 'basic']),
  createPage('./src/pages/articles.html', './pages/articles.html', ['articles', 'basic', 'searchArticles']),
  createPage('./src/pages/tests.html', './pages/tests.html', ['index', 'basic']),
  createPage('./src/pages/thought.html', './pages/thought.html', ['index', 'basic']),
  createPage('./src/pages/rituals.html', './pages/rituals.html', ['index', 'basic']),
  createPage('./src/pages/articles/article1.html', './pages/articles/article1.html',['index', 'basic']),
  createPage('./src/pages/articles/article2.html', './pages/articles/article2.html',['index', 'basic']),
  createPage('./src/pages/articles/article3.html', './pages/articles/article3.html',['index', 'basic']),
  createPage('./src/pages/articles/article4.html', './pages/articles/article4.html',['index', 'basic']),
  createPage('./src/pages/articles/article5.html', './pages/articles/article5.html',['index', 'basic']),
  createPage('./src/pages/articles/article6.html', './pages/articles/article6.html',['index', 'basic']),
  createPage('./src/pages/articles/article7.html', './pages/articles/article7.html',['index', 'basic']),
  createPage('./src/pages/articles/article8.html', './pages/articles/article8.html',['index', 'basic']),
  createPage('./src/pages/articles/article9.html', './pages/articles/article9.html',['index', 'basic']),
  createPage('./src/styleguide.html', './styleguide.html', ['styleguide', 'basic']),
  createPage('./src/pages/tests/test1.html', './pages/tests/test1.html', ['test1','basic']),
  createPage('./src/pages/tests/test2.html', './pages/tests/test2.html', ['test2','basic']),
  createPage('./src/pages/tests/test3.html', './pages/tests/test3.html', ['test3','basic'])
]

module.exports = htmlPages