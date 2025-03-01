import { useState } from 'react'

function Button({ count, onClick }) {
  const handleClick = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <button onClick={onClick}>点我</button>
      {count}
    </div>
  )
}
function App() {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <Button count={count} onClick={handleClick} />
      <Button count={count} onClick={handleClick} />
    </div>
  )
}
export default App
