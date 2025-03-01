import { func } from 'prop-types'
import { useState } from 'react'

function computed(n) {
    console.log('我每出现一次，就代表useState的初始值多计算一次')
  return n + 1 + 2 + 3
}
function App() {
  const [count, setCount] = useState(()=>computed(0))
    const handleClick = () => {
      setCount(count+1)
  }
  return (
    <div>
          <button onClick={handleClick}>点击</button>
          {count}
    </div>
  )
}
export default App
