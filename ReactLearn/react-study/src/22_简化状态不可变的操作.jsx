// import { cloneDeep } from 'lodash'
// import { useImmer } from 'use-immer'

// function App() {
//   const [list, setList] = useImmer([
//     { id: 1, text: 'aaa' },
//     { id: 2, text: 'bbb' },
//     { id: 3, text: 'ccc' },
//   ])
//   const handleClick = () => {
//       setList((draft) => {
//         draft.push({id:4,text:'dddd'})
//     })
//   }
//   return (
//     <div>
//       <button onClick={handleClick}>点击</button>
//       <br />
//       <ul>
//         {list.map((item) => (
//           <li key={item.id}>{item.text}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }
// export default App

import { useState } from 'react'
import { cloneDeep } from 'lodash'
import { useImmer } from 'use-immer'

function App() {
  const [info, setInfo] = useImmer({
    username: {
      first: 'xiao',
      last: 'ming',
    },
    age: 20,
  })
  const handleClick = () => {
    setInfo((draft) => {
      draft.username.first = 'da'
      draft.username.last = 'shabi'
    })
  }
  return (
    <div>
      <button onClick={handleClick}>点击</button>
      <div>{JSON.stringify(info)}</div>
    </div>
  )
}
export default App
