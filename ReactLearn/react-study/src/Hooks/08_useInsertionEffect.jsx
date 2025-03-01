// import { useEffect, useLayoutEffect ,useInsertionEffect,useRef} from 'react'

// function App() {
//     const ref=useRef(null)
//   //触发顺序
//   useEffect(() => {
//     console.log(1,ref.current)
//   })
//   useLayoutEffect(() => {
//     console.log(2, ref.current)
//   })
//   useInsertionEffect(() => {
//     console.log(3, ref.current)
//   })

//   return <div ref={ref}>哈哈哈</div>
// }

// export default App

import { useInsertionEffect, useRef } from 'react'

function App() {
  const ref = useRef(null)
  
    useInsertionEffect(() => {
        const style = document.createElement('style')
        style.innerHTML = `
        .box{
        background:red;
        width:100px;
        height:100px;
        }`
        document.head.appendChild(style)
  })

    return <div className='box' ref={ref}>哈哈哈</div>
}

export default App
