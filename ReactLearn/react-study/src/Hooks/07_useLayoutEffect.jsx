import { useLayoutEffect, useState } from 'react'

function App() {
  const [msg, setMsg] = useState('hello App')

  useLayoutEffect(() => {
    setMsg('hello useEffect')
  })

  return <div>{msg}</div>
}

export default App
