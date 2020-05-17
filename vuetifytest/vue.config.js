module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: '/',
  devServer: {
    open: false,
    host: 'localhost',
    port: 8888
  },
  proxy: {
    // 配置跨域
    'api': {
      target: 'http://localhost:5000/api',
      ws: true,
      changeOrigin: true,
      pathRewrite: {
        '^api': ''
      },
    }
  }
  // OutputDir: 'dist',
};