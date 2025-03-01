import { func } from 'prop-types'
import './购物车样式.css'
import axios from 'axios'
import { useImmer } from 'use-immer'
import { memo, useCallback, useEffect } from 'react'

const Item = memo(function Item({
  id,
  name,
  price,
  number,
  active,
  handleAdd,
  handleNumberChange,
}) {
  console.log('如果被渲染了，我就会出现')

  return (
    //active初始根据active的值判定
    <li className={active ? 'active' : ''}>
      <h3>{name}</h3>
      <p>单价：{price}</p>
      <p>
        数量：
        <span className='remove' onClick={() => handleNumberChange(id, -1)}>
          -
        </span>
        <span>{number}</span>
        <span className='add' onClick={() => handleNumberChange(id, +1)}>
          +
        </span>
      </p>
      <div className='cartbtn' onClick={() => handleAdd(id)}>
        {active ? '取消购买' : '添加购物车'}
      </div>
    </li>
  )
})

function Cart() {
  const [list, setList] = useImmer([])
  const all = list
    .filter((item) => item.active)
    .reduce((init, item) => init + item.number * item.price, 0)
  useEffect(() => {
    axios.get('/cartData.json').then((res) => {
      if (res.data.errcode === 0) {
        //map来给购物车添加
        setList(res.data.list.map((item) => ({ ...item, active: false })))
      }
    })
  }, [])
  const handleAdd = useCallback((id) => {
    setList((draft) => {
      const value = draft.find((item) => item.id === id)
      value.active = !value.active
    })
  })
  const handleNumberChange = useCallback((id, num) => {
    setList((draft) => {
      const value = draft.find((item) => item.id === id)
      if (value.number === 0 && num < 0) {
        return
      }
      value.number += num
    })
  })
  return (
    <div className='cart'>
      <ul>
        {list.map((item) => (
          <Item
            key={item.id}
            {...item}
            handleAdd={() => handleAdd(item.id)}
            handleNumberChange={(num) => handleNumberChange(item.id, num)} //注意传参问题，前面的num是onClick传递的
          />
        ))}
      </ul>
      <div className='all'>
        总金额：<span>{all}</span>元
      </div>
    </div>
  )
}
export default Cart
