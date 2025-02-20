import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './02_了解JSX.jsx'; // 导入 01_了解JSX.jsx 中的 App 组件
//import App from './03_style样式'
//import App from './07_classnames'
//import App from './08_事件'
//import App from './09_条件渲染'
//import App from './10_列表渲染'
//import App from './11_组件的点标记写法'
//import App from './12_组件通信'
//import App from './13_组件组合'
//import App from './14_通信默认值'
//import App from './15_数据类型'
import App from './16_组件必须是纯函数'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
