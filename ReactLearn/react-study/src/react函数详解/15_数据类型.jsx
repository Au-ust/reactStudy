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
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // 验证 count 是数字或字符串（非必传）
  msg: PropTypes.string, // 验证 msg 是字符串（非必传）
  type: PropTypes.oneOf(['primary', 'success', 'error']),
  icon: PropTypes.element//针对jsx的类型，element
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
      {/* { 正确的情况} */}
      <Welcome
        count={123}
        msg='hello react'
        type='primary'
        icon={<div className='icon-close'></div>}
      />
    </div>
  )
}
export default App
