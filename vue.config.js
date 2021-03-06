const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      // точка входа для страницы
      entry: 'src/main.ts',
      // исходный шаблон
      template: 'public/index.html',
      // в результате будет dist/index.html
      filename: 'index.html',
      // когда используется опция title, то <title> в шаблоне
      // должен быть <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Personal Page',
      // все фрагменты, добавляемые на этой странице, по умолчанию
      // это извлечённые общий фрагмент и вендорный фрагмент.
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },

    apiUser: {
      // точка входа для страницы
      entry: 'src/apiUser/main.ts',
      // исходный шаблон
      template: 'public/apiUser.html',
      // в результате будет dist/index.html
      filename: 'apiUser.html',
      // когда используется опция title, то <title> в шаблоне
      // должен быть <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Use of API - Nager.Date',
      // все фрагменты, добавляемые на этой странице, по умолчанию
      // это извлечённые общий фрагмент и вендорный фрагмент.
      chunks: ['chunk-vendors', 'chunk-common', 'apiUser']
    },
    // когда используется строковый формат точки входа, то
    // шаблон будет определяться как `public/subpage.html`,
    // а если таковой не будет найден, то `public/index.html`.
    // Выходное имя файла будет определено как `subpage.html`.

  }
})
