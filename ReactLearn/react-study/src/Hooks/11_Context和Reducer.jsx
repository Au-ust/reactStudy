import { times } from 'lodash'
import { act, useActionState, useReducer, useState } from 'react'
import { useImmerReducer } from 'use-immer'

//由外部函数来完成逻辑操作
function listReducer(draft, action) {
  switch (action.type) {
    case 'add':
      draft.push({ id: 4, text: 'ddd' })
      break
    case 'edit':
      const value = draft.find((item) => item.id === action.id)
      value.text='new '+value.text
      break
    case 'remove':
      const index = draft.findIndex((item) => item.id === action.id)
      draft.splice(index,1)
  }
}

function App() {
  const [list, dispatch] = useImmerReducer(listReducer, [
    { id: 1, text: 'aaa' },
    { id: 2, text: 'bbb' },
    { id: 3, text: 'ccc' },
  ])

  return (
    <div>
      <input type='text' />
      <button
        onClick={() => {
          dispatch({ type: 'add' })
        }}
      >
        添加
      </button>
      <ul>
        {list.map((item) => {
          return (
            <li key={item.id}>
              {item.text}
              <button
                onClick={() => {
                  dispatch({ type: 'edit', id: item.id })
                }}
              >
                编辑
              </button>
              <button
                onClick={() => {
                  dispatch({ type: 'remove', id: item.id })
                }}
              >
                删除
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
