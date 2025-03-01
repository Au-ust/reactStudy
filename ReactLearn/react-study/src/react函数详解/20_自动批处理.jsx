import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const handleClick = () => {
      setCount((c) => c + 1)
      setCount((c) => c + 1)
      setCount((c) => c + 1)
     console.log(count)
  }
    //console.log('如果函数APP渲染了三次，那么我将出现三次');
    
  return (
    <div>
      <button onClick={handleClick}>点击</button>
      {count}
    </div>
  )
}
export default App