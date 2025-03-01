import { useState } from 'react'
import { cloneDeep } from 'lodash'

function App() {
  const [info, setInfo] = useState({
    username: {
      first: 'xiao',
      last: 'ming',
    },
    age: 20,
  })
  const handleClick = () => {
    //setList([...list.slice(0,1),{id:4,text:'ddd'},...list.slice(1)])

    // setList(
    //   list.map((item) => {
    //     if (item.id === 2) {
    //       return { ...item, text: 'ddd' }
    //     } else {
    //       return item
    //     }
    //   })
    // )

    // const clone = [...list]
    // clone.reverse()
    // setList(clone)

    // const clone = cloneDeep(list)
    // clone.reverse()
    // // setList(clone)

    // setInfo({ ...info, username: {...info.username,first:'da',last:'shabi'} })

    const clone = cloneDeep(info)
    clone.username.first = 'da'
    clone.username.last = 'shabi'
    setInfo(clone)
  }
  return (
    <div>
      <button onClick={handleClick}>点击</button>
      <div>{JSON.stringify(info)}</div>
    </div>
  )
}
export default App

// import { useState } from 'react'

// function App() {
//   const [count, setCount] = useState(0)
//   const handleClick = () => {
//     setCount(0)
//   }
//   console.log('如果函数重新渲染了，那么我将会被打印在控制台两次')
//   return (
//     <div>
//       <button onClick={handleClick}>点击</button>
//       {count}
//     </div>
//   )
// }
// export default App
