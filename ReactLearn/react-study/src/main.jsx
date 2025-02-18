import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './02_了解JSX.jsx'; // 导入 01_了解JSX.jsx 中的 App 组件
//import App from './03_style样式'
//import App from './07_classnames'
//import App from './08_事件'
import App from './09_条件渲染'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
