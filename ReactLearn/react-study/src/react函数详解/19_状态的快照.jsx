import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const handleClick = () => {
      setCount(count + 1)
        setTimeout(() => {console.log(count)
        },2000)
     console.log(count)
  }
  return (
    <div>
      <button onClick={handleClick}>点击</button>
      {count}
    </div>
  )
}
export default App
