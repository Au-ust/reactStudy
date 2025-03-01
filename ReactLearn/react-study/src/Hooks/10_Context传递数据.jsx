// function Tittle({ count }) {
//   return (
//     <div>
//         Hello Tittle
//       {'我是Tittle,这是我接收的参数：'}
//       {count}
//     </div>
//   )
// }

// function Head({ count }) {
//   return (
//     <div>
//         Hello Head
//       <Tittle count={count} />
//     </div>
//   )
// }

// function App() {
//   return (
//     <div>
//         Hello App
//       <Head count={123} />
//     </div>
//   )
// }
// export default App
import { createContext, useContext } from 'react'
const Context = createContext()

function Tittle() {
  const value = useContext(Context)
  return (
    <div>
      Hello Tittle
      {'我是Tittle,这是我接收的参数：'}
      {'id:' + value.id}
      {'text:' + value.text}
    </div>
  )
}

function Head() {
  return (
    <div>
      Hello Head
      <Tittle />
    </div>
  )
}

function App() {
  return (
    <div>
      Hello App
      <Context.Provider value={{id:1,text:'aaa'}}>
        <Head />
      </Context.Provider>
    </div>
  )
}
export default App
