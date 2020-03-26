const AntDesignThemePlugin = require("antd-theme-webpack-plugin");
const path = require("path");

// 设置别名方法
function resolve(dir) {
    console.log(__dirname);
    return path.join(__dirname, dir);
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

    publicPath: "./", //部署应用时的根路径(默认'/'),也可用相对路径(存在使用限制)
    // outputDir: "dist", // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录。默认值为dist。
    // assetsDir: "", // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。默认值为''。
    // indexPath: "index.html", // 指定生成的 index.html 的输出路径 (相对于 outputDir)。默认值为'index.html'。也可以是一个绝对路径。
    // filenameHashing: true, // 默认值为true。
    // pages: undefined, // 在 multi-page 模式下构建应用。每个“page”应该有一个对应的 JavaScript 入口文件。默认值为undefined。
    // lintOnSave: false, // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。这个值会在 @vue/cli-plugin-eslint 被安装之后生效。默认值为true。
    // runtimeCompiler: false, // 是否使用包含运行时编译器的 Vue 构建版本。默认值为false。
    // transpileDependencies: [], // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。默认值为[]。
    // productionSourceMap: true, // 默认值为true，但为true会影响打包速度和包的大小。
    // crossorigin: undefined, // 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。默认值为undefined。
    css: {
        loaderOptions: {
            less: {
                modifyVars: {},
                javascriptEnabled: true
            }
        }
    },
    devServer: {
        proxy: {
            //配置多个代理跨域(配置一个 proxy: 'http://localhost:4000' )
            "/api": {
                target: "http://127.0.0.1:3000",
                ws: true, //是否跨域
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    },
    chainWebpack: config => {
        config.resolve.alias.set("@", resolve("src")); // key,value自行定义，比如.set('@@', resolve('src/components'))
    }
};