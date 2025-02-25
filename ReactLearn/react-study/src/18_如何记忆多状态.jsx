// import { useState } from 'react'

// function App() {
//   const [count, setCount] = useState(0)
//   const [count2, setCount2] = useState(0)
//   const [count3, setCount3] = useState(0)
//   const handleClick = () => {
//     setCount(count + 1)
//   }
//   return (
//     <div>
//       <button onClick={handleClick}>点击</button>
//       {count}
//       {count2}
//       {count3}
//     </div>
//   )
// }
// export default App
import { useState } from 'react'
let num = 0

function App() {
  const [count, setCount] = useState(0)
  if (num === 0) {
    const [count2, setCount2] = useState(0)
  }
  const [count3, setCount3] = useState(0)
  const handleClick = () => {
      setCount(count + 1)
      num++
  }
  return (
    <div>
      <button onClick={handleClick}>点击</button>
      {count}
      {count3}
    </div>
  )
}
export default App
