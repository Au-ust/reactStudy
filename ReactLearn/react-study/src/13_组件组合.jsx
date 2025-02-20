import PropTypes from 'prop-types'

// function Head() {
//   return <div>hello Head</div>
// }

function Welcome({ bottom, top }) {
  return (
    <div>
      {top}
      hello Welcome
      {bottom}
    </div>
  )
}

// 添加 prop-types 验证
Welcome.propTypes = {
  count: PropTypes.string.isRequired, // 验证 count 是字符串并且是必传的
  children: PropTypes.string.isRequired,
  top: PropTypes.string.isRequired,
  bottom: PropTypes.string.isRequired,
}

//父组件
function App() {
  return (
    <div>
      hello App
      <Welcome
        top={<div>aaaaaaaaaaaa</div>}
        bottom={<div>bbbbbbbbbbbb</div>}
      ></Welcome>
    </div>
  )
}
export default App

// import PropTypes from 'prop-types'

// // 为 Head 组件添加 prop-types 验证
// Head.propTypes = {
//   count: PropTypes.number.isRequired, // 验证 count 是数字并且是必传的
// }

// // 添加 prop-types 验证
// Welcome.propTypes = {
//   count: PropTypes.number.isRequired, // 验证 Welcome 组件的 count 是必传的
// }

// function Head({ count }) {
//   //接收count
//   return <div>hello Head,{count}</div>
// }

// function Welcome() {
//   const count = 456
//   return (
//     <div>
//       hello Welcome
//       <Head count={count} />
//       {/* {挂载count} */}
//     </div>
//   )
// }

// //父组件
// function App() {
//   const count = 123
//   return (
//     <div>
//       hello App
//       <Welcome count={count} />
//     </div>
//   )
// }
// export default App
