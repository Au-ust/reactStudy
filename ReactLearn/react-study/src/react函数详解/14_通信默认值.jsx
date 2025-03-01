import PropTypes from 'prop-types'

function Welcome({ count, msg }) {
  return (
    <div>
      hello Welcome,{count},{msg}
    </div>
  )
}

// 添加 prop-types 验证
Welcome.propTypes = {
  count: PropTypes.number, // 验证 count 是数字（非必传）
  msg: PropTypes.string, // 验证 msg 是字符串（非必传）
}

Welcome.defaultProps = {
  count: 0,
  msg: '我是默认值',
}
//父组件
function App() {
  return (
    <div>
      hello App
      {/* { 传递参数的情况} */}
      <Welcome count={123} msg='hello react' />
      {/* { 不传递参数的情况} */}
      <Welcome />
    </div>
  )
}
export default App
