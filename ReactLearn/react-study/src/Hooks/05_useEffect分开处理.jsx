import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [msg, setMsg] = useState('hello React')
  useEffect(() => {
    console.log(msg)
  }, [msg])
  useEffect(() => {
    console.log(count)
  }, [count]) //这就是依赖项
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
