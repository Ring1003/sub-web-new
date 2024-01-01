const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://v2api.z1.gs', // 自己的后端服务器
        ws: true, // 是否代理websockets
        changeOrigin: true, // 是否更改源地址
        pathRewrite: {
          '^/api': '' // 路径重写
        },
      },
      '^/subconverter': {
        target: 'https://sub.xeton.dev', // 自己的后端服务器
        ws: true, // 是否代理websockets
        changeOrigin: true, // 是否更改源地址
        pathRewrite: {
          '^/subconverter': '' // 路径重写
        },
      },
      '^/apiwccbest': {
        target: 'https://api.wcc.best', // 自己的后端服务器
        ws: true, // 是否代理websockets
        changeOrigin: true, // 是否更改源地址
        pathRewrite: {
          '^/apiwccbest': '' // 路径重写
        },
      },
    }
  },

  chainWebpack: config => {
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
};