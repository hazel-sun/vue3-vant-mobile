# 创建流程

## 一、创建支持typescript的模板
### 安装vite
yarn create vite
### 使用模板创建
yarn create vite my-vue-app --template vue-ts

## 二、约束代码规范
yarn add --dev eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue @typescript-eslint/parser @typescript-eslint/eslint-plugin
### 创建 .eslintrc.js 文件配置代码规范
### 创建 .eslintignore 
### 创建 .prettierrc.js 
### 创建 .prettierignore 

## 三、安装css预处理器
Vite 提供了对 .scss, .sass, .less, .styl 和 .stylus 文件的内置支持。没有必要为它们安装特定的 Vite 插件，但必须安装相应的预处理器依赖

## 四、移动端适配
viewport + postcss-px-to-viewport
yarn add --dev postcss-px-to-viewport
创建 postcss.config.js 文件

## 五、安装vant框架
安装插件，实现自动按需引入组件的样式
yarn add vite-plugin-style-import@1.4.1 -D

## 六、安装jsx
npm install @vitejs/plugin-vue-jsx -D
vite.config.ts配置一下

## 七、配置jest单元测试(配置有问题，再研究)
### 基本依赖
yarn add jest vue3-jest babel-jest @vue/test-utils -D
### 支持typescript
yarn add @types/jest ts-jest  -D
### 配置tsconfig.json文件

## git提交规范
1.npm i -g commitizen@4.2.4
2.npm i cz-customizable@6.3.0 --save-dev
3.package.json文件
"config": {
  "commitizen": {
     "path": "node_modules/cz-customizable"
   }
 },
4.创建cz-config.js
5.在我们修改代码之后，使用git cz 代替git commit -m，然后就能描述自己的git提交的内容了

## 注意事项
### vant@vant/use包对typescript的版本有限制
typescript4.5.5版本以后，不在支持VisibilityState状态，所以需要修改typescript版本的依赖，用4.5.4版本的ts
### 配置别名的时候，找不到__dirname
'@': resolve(__dirname, 'src')
这是我们缺少了typings，需要将类型文件，和path的包安装下来
 @types/node path -D
 [vite.config.js 配置别名 + tsconfig.json里面配置对应的别名]
### require 
找不到名称“require”。是否需要为节点安装类型定义? 请尝试使用 npm i --save-dev @types/node，然后将 “node” 添加到类型字段
tsconfig.json 里面配置 type字段中添加node

https://www.jianshu.com/p/c9e10ddf3fbb