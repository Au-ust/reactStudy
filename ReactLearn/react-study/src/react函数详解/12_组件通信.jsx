import PropTypes from 'prop-types'
//子组件
function Welcome({ count, msg,isShow }) {
  return (
    <div>
      hello Welcome,{count},{msg},{isShow+''}
    </div>
  )
}

// 添加 prop-types 验证
Welcome.propTypes = {
  count: PropTypes.string.isRequired, // 验证 count 是字符串并且是必传的
  msg: PropTypes.string.isRequired, // 验证 msg 是字符串并且是必传的
  isShow: PropTypes.string.isRequired, // 验证isShow是字符串并且是必传的
}

//父组件
function App() {
    const count='我是个变量'
  return (
    <div>
      <Welcome count={count} msg='hi react' isShow />
    </div>
  )
}
export default App
