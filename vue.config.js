module.exports = {
  devServer: {
    disableHostCheck: false,
  },
  assetsDir: 'static/',
  productionSourceMap:false,
  css: {
    loaderOptions: { // 向 CSS 相关的 loader 传递选项
      less: {
        javascriptEnabled: true
      }
    }
  }
}