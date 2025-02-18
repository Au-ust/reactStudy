import classNames from 'classnames'
import './04_全局样式.css'
import style from './05_局部样式.module.css'

function App() {
  const myClass = classNames({
    box1: true,
    box2: false,
    [style.headTittle]: true,
  })
  return (
    <>
      <div className={myClass}>hello App</div>
    </>
  )
}
export default App
