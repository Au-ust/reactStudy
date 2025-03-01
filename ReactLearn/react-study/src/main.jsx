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
//import App from './16_组件必须是纯函数'
//import App from './17_如何改变视图'
//import App from './18_如何记忆多状态'
//import App from './19_状态的快照'
//import App from './20_自动批处理'
//import App from './21_状态是不可变的'
//import App from './22_简化状态不可变的操作'
//import App from './23_惰性初始化状态'
//import App from './24_状态提示实现共享'
//import App from './25_状态的重置'
//import App from './26_状态计算变量'
//import App from './27_受控组件'
// import Todos from './28_实战'
//import App from './01_ref引用值'
//import App from './02_ref操作dom'
// import App from './04_处理副作用'
//import App from './08_useInsertionEffect'
//import App from './09_reducer'
//import App from './10_Context传递数据'
//import App from './11_Context和Reducer'
//import Cart from './Hooks/购物车'
import App from './01_antd的基本使用'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Cart/> */}
    <App />
    {/* <Todos /> */}
  </StrictMode>
)
