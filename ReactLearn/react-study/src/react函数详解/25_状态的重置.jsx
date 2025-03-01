import { useState } from 'react'

function Counter({ style }) {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <button onClick={handleClick} style={style}>
        计数
      </button>
      {count}
    </div>
  )
}
function App() {
  const [style, setStyle] = useState(false)
  const handleClick = () => {
    setStyle(!style)
  }
  return (
    <div>
      <button onClick={handleClick}>显示切换样式</button>
      {style ? (
        <section>
          <Counter style={{ border: '1px red solid' }} key='con1'/>
        </section>
      ) : (
        <div>
          <Counter key='con2' />
        </div>
      )}
    </div>
  )
}
export default App
