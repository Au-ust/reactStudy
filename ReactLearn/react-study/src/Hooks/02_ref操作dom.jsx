import { useState, useRef } from 'react'

function App() {
  const list = [
    { id: 1, text: 'aaa' },
    { id: 2, text: 'bbb' },
    { id: 3, text: 'ccc' },
  ]
  return (
    <div>
      <ul>
        {list.map((item) => {
          return (
            <li
              key={item.id}
              ref={(myRef) => {
                myRef.style.background = 'red'
              }}
            >
              {item.text}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
