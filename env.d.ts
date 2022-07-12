// 解决导入 jsx 组件后，提示 隐式具有'any'类型 问题 在 env.d.ts 文件中，声明没有类型的库导入为 any
declare module '*.jsx'
