const AntDesignThemePlugin = require("antd-theme-webpack-plugin");
const path = require("path");


// 设置别名方法
function resolve (dir) {
  console.log(__dirname)
  return path.join(__dirname, dir)
}

const options = {
  antDir: path.join(__dirname, "./node_modules/ant-design-vue"), //antd包位置
  stylesDir: path.join(__dirname, "./src/styles/theme"), //主题文件所在文件夹
  varFile: path.join(__dirname, "./src/styles/theme/variables.less"), // 自定义默认的主题色
  mainLessFile: path.join(__dirname, "./src/styles/theme/index.less"), // 项目中其他自定义的样式（如果不需要动态修改其他样式，该文件可以为空）
  outputFilePath: path.join(__dirname, "./public/color.less"), //提取的less文件输出到什么地方
  themeVariables: ["@primary-color"], //要改变的主题变量
  indexFileName: "./public/index.html", // index.html所在位置
  generateOnce: false // 是否只生成一次（if you don't want to generate color.less on each chnage in code to make build process fast in development mode, assign it true value. But if you have new changes in your styles, you need to re-run your build process npm start.）
};

module.exports = {
  configureWebpack: {
    plugins: [new AntDesignThemePlugin(options)]
  },

  publicPath: "/", //部署应用时的根路径(默认'/'),也可用相对路径(存在使用限制)
  outputDir: "dist", //运行时生成的生产环境构建文件的目录(默认'dist'，构建之前会被清除)
  assetsDir: "", //静态资源目录(js、css、img、fonts)，相对outputDir的目录(默认'')
  indexPath: "index.html", //指定生成index.html的输出路径(相对outputDir)也可以是绝对路径
  lintOnSave: true, //是否开启ESlint（保存时检查）
  productionSourceMap: true, //生产环境是否生成 sourceMap 文件
  pages: {
    //pages里配置的路径和文件名在你的文档目录必须存在，否则启动服务会报错
    index: {
      //除了 entry 之外都是可选的
      entry: "src/main.js", //page的主入口
      template: "public/index.html", //模板来源
      filename: "index.html", //在 dist/index.html 的输出
      //title在template中使用：<title><%=htmlWebpackPlugin.options.title%></title>
      title: "生成的配置信息",
      chunks: ["chunk-vendors", "chunk-common", "index"]
      // 在这个页面中包含的块，默认情况下会包含,提取出来的通用 chunk 和 vendor chunk
    },
    subpage: "src/main.js"
    //官方解释：当使用只有入口的字符串格式时，模板会被推导为public.html
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // "primary-color": "#1DA57A",
          // "link-color": "#1DA57A",
          // "border-radius-base": "2px"
        },
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    //环境配置
    host: "localhost",
    port: 8080,
    https: false, //是否开启https
    hotOnly: false, //是否配置热更新
    open: false, //配置自动启动浏览器
    proxy: {
      //配置多个代理跨域(配置一个 proxy: 'http://localhost:4000' )
      "/api": {
        target: "http://127.0.0.1:3000",
        ws: true, //是否跨域
        changeOrigin: true,
        pathRewrite: { "^/api": "" }
      }
    }
  },
  pluginOptions: {
    // 第三方插件配置
    // ...
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
  }
};
