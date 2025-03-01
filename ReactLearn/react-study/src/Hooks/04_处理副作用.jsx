// import { useRef, forwardRef, useImperativeHandle, useEffect } from 'react'

// function App() {
//   const ref = useRef(null)
//   //副作用，不符合纯函数的规范
//   //        setTimeout(() => {
//   //     ref.current.focus()
//   // },1000)
//   //副作用，但是符合纯函数的规范，因为事件可以处理副作用
//   //   const handleClick = () => {
//   //     ref.current.focus()
//   //   }
//   //可以在初始的时候进行副作用操作
//   //useEffect触发的时机是jsx渲染后触发的，这样就会消除副作用的影响
//   useEffect(() => {
//     if (ref) {
//       ref.current.focus()
//     }
//   })

//   return (
//     <div>
//       <button onClick={handleClick}>点我</button>
//       <input type='text' ref={ref} />
//     </div>
//   )
// }

// export default App
import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log(count)
  })
  const handleClick = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <button onClick={handleClick}>点我</button>
    </div>
  )
}
export default App
