function App() {
  let count = 0

  const increment = () => {
    count++ // 修改普通变量
    console.log(count) // 值会变化，但不会触发重新渲染
  }
  console.log(1234567)

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}
export default App
