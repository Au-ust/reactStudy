function App() {
  const handClick = (e) => {
    console.log(e)
  }
  const handleEnter = (e) => {
    console.log(e)
  }
  const handClick2 = (num) => {
    return () => {
      console.log(num)
    }
  } //函数调用完返回值还是一个函数，是一种高级用法
  const handClick3 = (num, e) => {
    console.log(num, e)
  }//箭头函数传参
  return (
    <>
      <button onClick={handClick} onMouseEnter={handleEnter}>
        点击1
      </button>
      <button onClick={handClick2(123)}>点击2-传参</button>
      <button onClick={(e) => handClick3(123, e)}>点击3-箭头函数</button>
    </>
  )
}
export default App
