import { useRef, forwardRef, useImperativeHandle } from 'react'

const MyInput = forwardRef(function MyInput(props, ref) {
  const inputRef = useRef(null)
  useImperativeHandle(ref, () => {
    return {
      focus() {
        inputRef.current.focus()
      },
      focusAndStyle() {
        inputRef.current.focus()
        inputRef.current.style.background = 'red'
      },
    }
  })

  return <input type='text' ref={inputRef}></input>
})

function App() {
  const ref = useRef(null)
  const handleClick = () => {
    if (ref) {
      ref.current.focusAndStyle()
    }
  }
  return (
    <div>
      <button onClick={handleClick}>点我</button>
      <MyInput ref={ref} />
    </div>
  )
}

export default App
