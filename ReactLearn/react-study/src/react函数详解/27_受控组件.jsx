import { useState } from 'react'

function App() {
  const [checked,setChecked] = useState(false)
    const handleChange = (e) => {
      setChecked(e.target.checked)
  }
  return (
      <div>
          <input type="checkbox" checked={checked} onChange={handleChange} />
    </div>
  )
}
export default App
