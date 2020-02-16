# Javascript
## 一、命名规范
### 1.变量、函数以及函数参数（驼峰式命名法）
```javascript
var buildingContainer = d3.select("svg").append("g");
function renderBuilding(buildingContainer){}
```
### 2.私有属性、变量和方法（以下划线_开头）
```javascript
var _privateMethod;
```
### 3.常量（全部字母大写，单词之间用_分割）
```javascript
var PI = 3.141516;
```
### 4.类、构造函数（大驼峰式命名，首字母大写）
```javascript
function Person(name){
    this.name = name;
}
Person.prototype.sayName = function(){
    console.log(this.name);
}
```
```javascript
class Person{
    constructor(name){
        this.name=name;
    }
    sayName(){
        console.log(this.name);
    }
}
```
### 5.函数
| 动词 | 含义 | 返回值 |
| :---- | :---- | :---- |
| can | 判断是否可执行某个动作(权限) | 函数返回一个布尔值。true：可执行；false：不可执行 | 
| has | 判断是否含有某个值 | 函数返回一个布尔值。true：含有此值；false：不含有此值 | 
| is | 判断是否为某个值 | 函数返回一个布尔值。true：为某个值；false：不为某个值 | 
| get | 获取某个值 | 函数返回一个非布尔值 | 
| set | 设置某个值 | 无返回值、返回是否设置成功或者返回链式对象 | 
| load | 加载某些数据 | 无返回值或者返回是否加载完成的结果 | 
```javascript
var toString = Object.prototype.toString;
function isArray(obj){ // 是否为Array
    return toString.call(obj) === "[Object Array]";
}
```
```javascript
function getName(){ // 获取姓名
    return  this.name;
}
```
## 二、语法
1.声明之后一律以分号结束，不可省略；

2.尽量用===和!==严格比较条件

3.eval和with，非特殊情况，别用！
## 三、注释规范
### 1.单行注释
```javascript
// 获取svg元素
var svg = d3.select("#buildingsSvg");
```
```javascript
svg.select("g").remove(); // 移除旧内容
```
```javascript
var svgWidth = parseFloat(svg.style("width")), // svg宽度
    svgHeight = parseFloat(svg.style("height")); // svg高度
```
### 2.多行注释
```javascript
/**
 * 多行注释内容
 */
```
### 3.函数/方法的注释（如果是内部函数，外部不能访问，可以使用@inner标识）
```javascript
    function method(param1,param2){
        /**
         * @description 方法的功能描述
         * @author name
         * @date 2019-6-9
         * @update name(2019-6-17)
         * @param {number} param1 param1的说明
         * @param {number} param2 param2的说明
         * @returns {number} 返回值的描述
         */
        return param1 + param2;
    }
```

# CSS
## 一、属性顺序
1.Positioning 定位

2.Box-model 盒模型

3.Typographic 排版

4.Visual 外观
```css
.container{
    /* Positioning 定位 */
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    /* Box-model 盒模型 */
    display: block;
    float: right;
    width: 520px;
    height: 520px;
    /* Typographic 排版 */
    font: normal 13px "Helvetica Neue", sans-serif;
    line-height: 1.5;
    color: #333;
    text-align: center;
    /* Visual 外观 */
    background-color: #f5f5f5;
    border: 1px solid #e5e5e5;
    border-radius: 3px;
    /* Misc */
    opacity: 1;
}
```
## 二、缩写属性和属性值
1.CSS有些属性是可以缩写的，比如填充、边框、字体、背景等等。
```css
/* 不推荐 */
.header{
    background-color: #aaa;
    background-image: url('./img/image.png');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: left top;
}
/* 推荐 */
.header{
    background: #aaa url('./img/image.png') no-repeat fixed left top;
}
```
2.当数值为小数时，小数点前面的"0"可以去除
```css
.header{
    opacity: .7;
}
```
3.'0px'后面的单位px可以去除
```css
html,body{
    margin: 0;
    padding: 0;
}
```
4.16进制的颜色代码重叠的字符可以缩写尽量缩写
```css
/* 不推荐 */
.header{
    color: #aaaaaa;
}
/* 推荐 */
.header{
    color: #aaa;
}
```
## 命名规范
1.一律小写；

2.尽量用英文；

3.命名短且语义化要好；

4.不建议加下划线_来命名

5.不要滥用id标识，应按需使用

## 注释规范
```css
/* header */
.header{
    position: absolute;
    left: 50%;
    top: 0;
    z-index: 2001;
    transform: translate(-50, -50%);

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 450px;
    height: 36px;

    font: normal 13px "Helvetica Neue", sans-serif;
    line-height: 36px;
    background-color: #f5f5f5;
    border: 1px solid #e5e5e5;
    border-radius: 3px;
}
/* header */
```

# Vue
## 一、结构化规范
### 1.基于vue-cli脚手架的结构基础划分
```
├── build                       构建脚本目录
├── config                      项目配置
    ├── dev.env.js              开发环境变量
    ├── index.js                项目配置文件
    └── prod.env.js             生产环境变量
├── src
    ├── assets                  静态资源目录，这里的资源会被webpack构建
        ├── css                 公告样式文件目录
        ├── js                  公共js文件目录
        └── img                 图片存放目录
    ├── components              公共组件目录
        └──head.vue               
    ├── router                  前端路由
        └── index.js
    ├── store                   vuex    
        └── index.js                   
    ├── utils                   工具目录
        └── api.js              axios二次封装
    ├── views                   页面目录
        └── login.vue
    ├── App.vue                 根组件
    └── main.js                 入口js文件
├── static                      纯静态资源，不会被webpack构建
├── index.html                  入口页面
└── package.json                npm包配置文件，里面定义了项目的npm脚本，依赖包等信息
```
### 2.vue文件方法声明顺序
```
- props
- mixins
- components
- data
- created
- mounted
- activited
- update
- beforeRouteUpdate
- methods
- filter
- computed
- watch
```
## 二、组件
每个Vue组件的代码建议不要超出500行，如果超出建议拆分组件。ui组件放到src/components/中。

组件一般情况下是可以拆成基础/ui部分和业务部分，基础组件一般是承载呈现，基础功能，不和业务耦合部分。
业务组件一般包含业务功能业务特殊数据等等。
### 1.组件通信
为避免数据的分发源混乱，不建议使用EventBus控制数据，可以用props来和$emit来数据分发和传送。
### 2.组件的挂载和销毁
通过v-if控制组件的挂载和销毁
### 3.注释
```html
<!--公共组件：数据列表
    /**
    * 组件名称
    * @module 组件存放位置
    * @desc 组件描述
    * @ahutor name
    * @date 2019-06-09
    * @param {Object} [title] - 参数说明
    * @param {Object} [tableData] - 参数说明
    * @example 案例
    * <Table :title="title" :tableData="tableData"></Table>
    */
-->
```
