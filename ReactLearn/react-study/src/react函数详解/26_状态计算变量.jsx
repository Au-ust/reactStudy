import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const doubleCount=count * 2
  const handleClick = () => {
      setCount(count + 1)
  }
  return (
    <div>
      <button onClick={handleClick}>计数</button>
      {count},{doubleCount}
    </div>
  )
}
export default App
