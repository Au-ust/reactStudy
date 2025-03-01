import { useState, useRef } from 'react'

function App() {
  const [count, setCount] = useState(0)
  let timer = useRef(null)
  const handleClick = () => {
    setCount(count + 1)
    clearInterval(timer.current)
    timer.current = setInterval(() => {
      console.log(123)
    }, 1000)
  }
  return (
    <div>
      <button onClick={handleClick}>计数</button>
      {count}
    </div>
  )
}
export default App
