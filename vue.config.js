module.exports = {
  pages: {
    index: {
      // page入口,配置vue的入口
      entry: 'src-router/main.js'
    }
  },
  devServer: {
    port: 8081 // 端口
  },
  // 关闭eslint检查
  lintOnSave: false
}
