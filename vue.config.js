module.exports = {
  // 基本路径
  publicPath:"./",  // 可以设置成相对路径，这样所有的资源都会被链接为相对路径，打出来的包可以被部署在任意路径
  outputDir: "dist",  //打包时生成的生产环境构建文件的目录
  assetsDir: 'public',  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录

  devServer: {
    //  下面为需要跨域的
    proxy: {//配置跨域
      "/api": {
        target: 'http://open.duyiedu.com/api',//这里后台的地址模拟的;应该填写你们真实的后台接口
        ws: true,
        changOrigin: true,//允许跨域
        pathRewrite: {
          '^/api': ''//请求的时候使用这个api就可以
        }
      },
      "/ptapi": {
        target: 'https://bj.meituan.com/ptapi/',
        ws: true,
        changOrigin: true,//允许跨域
        pathRewrite: {
          '^/ptapi': ''//请求的时候使用这个src就可以
        }
      }
    },
  }
}