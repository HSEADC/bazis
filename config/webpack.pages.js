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
  createPage('./src/pages/articles.html', './pages/articles.html', ['articles', 'basic', 'searchArticles', 'filterArticles']),
  createPage('./src/pages/tests.html', './pages/tests.html', ['index', 'basic', 'searchTests', 'filterTests']),
  createPage('./src/pages/thought.html', './pages/thought.html', ['index', 'basic', 'thought']),
  createPage('./src/pages/rituals.html', './pages/rituals.html', ['index', 'basic', 'searchRituals', 'filterRituals']),
  createPage('./src/pages/articles/article1.html', './pages/articles/article1.html',['index', 'basic']),
  createPage('./src/pages/articles/article2.html', './pages/articles/article2.html',['index', 'basic']),
  createPage('./src/pages/articles/article3.html', './pages/articles/article3.html',['index', 'basic']),
  createPage('./src/pages/articles/article4.html', './pages/articles/article4.html',['index', 'basic']),
  createPage('./src/pages/articles/article5.html', './pages/articles/article5.html',['index', 'basic']),
  createPage('./src/pages/articles/article6.html', './pages/articles/article6.html',['index', 'basic']),
  createPage('./src/pages/articles/article7.html', './pages/articles/article7.html',['index', 'basic']),
  createPage('./src/pages/articles/article8.html', './pages/articles/article8.html',['index', 'basic']),
  createPage('./src/pages/articles/article9.html', './pages/articles/article9.html',['index', 'basic']),
  createPage('./src/pages/articles/article10.html', './pages/articles/article10.html',['index', 'basic']),
  createPage('./src/pages/articles/article11.html', './pages/articles/article11.html',['index', 'basic']),
  createPage('./src/pages/articles/article12.html', './pages/articles/article12.html',['index', 'basic']),
  createPage('./src/pages/articles/article13.html', './pages/articles/article13.html',['index', 'basic']),
  createPage('./src/pages/articles/article14.html', './pages/articles/article14.html',['index', 'basic']),
  createPage('./src/pages/articles/article15.html', './pages/articles/article15.html',['index', 'basic']),
  createPage('./src/pages/articles/article16.html', './pages/articles/article16.html',['index', 'basic']),
  createPage('./src/pages/articles/article17.html', './pages/articles/article17.html',['index', 'basic']),
  createPage('./src/pages/articles/article18.html', './pages/articles/article18.html',['index', 'basic']),
  createPage('./src/pages/articles/article19.html', './pages/articles/article19.html',['index', 'basic']),
  createPage('./src/pages/articles/article20.html', './pages/articles/article20.html',['index', 'basic']),
  createPage('./src/pages/articles/article21.html', './pages/articles/article21.html',['index', 'basic']),
  createPage('./src/pages/articles/article22.html', './pages/articles/article22.html',['index', 'basic']),
  createPage('./src/pages/articles/article23.html', './pages/articles/article23.html',['index', 'basic']),
  createPage('./src/pages/articles/article24.html', './pages/articles/article24.html',['index', 'basic']),
  createPage('./src/styleguide.html', './styleguide.html', ['styleguide', 'basic']),
  createPage('./src/pages/tests/test1.html', './pages/tests/test1.html', ['test1','basic']),
  createPage('./src/pages/tests/test2.html', './pages/tests/test2.html', ['test2','basic']),
  createPage('./src/pages/tests/test3.html', './pages/tests/test3.html', ['test3','basic']),
  createPage('./src/pages/tests/test4.html', './pages/tests/test4.html', ['test4','basic']),
  createPage('./src/pages/tests/test5.html', './pages/tests/test5.html', ['test5','basic']),
  createPage('./src/pages/tests/test6.html', './pages/tests/test6.html', ['test6','basic']),
  createPage('./src/pages/tests/test7.html', './pages/tests/test7.html', ['test7','basic']),
  createPage('./src/pages/errors/404.html', './pages/errors/404.html',['index', 'basic']),
  createPage('./src/pages/errors/500.html', './pages/errors/500.html',['index', 'basic']),
  createPage('./src/pages/errors/503.html', './pages/errors/503.html',['index', 'basic'])
]

module.exports = htmlPages