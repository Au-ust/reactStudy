import './04_全局样式.css'
import style from './05_局部样式.module.css'
import './06_sass.scss'

function App() {
  // const myStyle = { width: '100px', height: '100px', background: 'red' }
  return (
    <>
      {/* <div className='box'>hello App</div> */}
      <div className={style.box2}>aaaaaa</div>
      {/* <div className={style.headTitle}>hahaha</div> */}
      <div className='box3'>aaa</div>
    </>
  )
}
export default App
