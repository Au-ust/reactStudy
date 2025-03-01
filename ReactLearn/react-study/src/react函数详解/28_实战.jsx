import { func } from 'prop-types'
import { useState } from 'react'
import { useImmer } from 'use-immer'
import classNames from 'classnames'
import style from './29_实战.module.css'

function CompleteList({
  title = '',
  list = [],
  handleChecked = function () {},
}) {
  return (
    <>
      {title}
      <ul>
        {list.map((item) => {
          return (
            <li
              key={item.id}
              className={classNames({ [style.active]: item.checked })}
            >
              <input
                type='checkbox'
                checked={item.checked}
                onChange={(e) => handleChecked(e, item.id)}
              />
              {item.task}
            </li>
          )
        })}
      </ul>
    </>
  )
}

function Todos() {
  const [msg, setMsg] = useState('')
  const [list, setList] = useImmer([])
  const unCompleteList = list.filter((item) => !item.checked)
  const completeList = list.filter((item) => item.checked)
  const handleChange = (e) => {
    setMsg(e.target.value)
  }
  const handleClick = () => {
    setList((draft) => {
      draft.unshift({ id: list.length, task: msg, checked: false })
    })
    setMsg('')
  }
  const handleChecked = (e, id) => {
    setList((draft) => {
      draft.find((item) => item.id === id).checked = e.target.checked //更改对应id的数据的复选框状态
    })
  }
  return (
    <div>
      <input type='text' value={msg} onChange={handleChange} />
      <button onClick={handleClick}>点击添加任务</button>
      {/* {未完成的列表} */}
      <CompleteList
        title={<h2>未完成的任务:{unCompleteList.length}个</h2>}
        handleChecked={handleChecked}
        list={unCompleteList}
      />
      {/* {已完成的列表} */}
      <CompleteList
        title={<h2>已完成的任务:{completeList.length}个</h2>}
        list={completeList}
        handleChecked={handleChecked}
      />
    </div>
  )
}
export default Todos
