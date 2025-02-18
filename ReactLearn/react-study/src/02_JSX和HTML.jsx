import { Fragment } from 'react'

function App() {
  const username = '荷叶饭'
  const obj = { user: '荷叶饭', age: '19' }
  const fn = () => {}
  return (
    <Fragment>
      <div>
        Hello App
        <label htmlFor='elem'>用户名</label>
        <input
          type='text'
          id='elem'
          tabIndex='1'
          onClick={() => {}}
          data-id='123'
        />
        <div>
          {1 + 1},{'foo'.toUpperCase()},{[1, 2, 3].reverse()}
          <br />
          {username}
          <br />
          {obj}
          <br />
          {fn}
        </div>
      </div>
      <div>我是多出来的div</div>
    </Fragment> //容器
  )
}
// 也可以这么写
// const App = () => {

// }
export default App
