function App() {
    const list = [
      {id:0,text:'aaaa'},
      {id:1,text:'bbbb'},
      {id:2,text:'cccc'}
  ]
  //   for (let i = 0; i < list.length; i++) {
  //     list[i] = <li>{list[i]}</li>
  //   }
  return (
    <div>
      <ul>
        {list.map((item) => <li key={item.id}>{item.text}</li>)}
      </ul>
    </div>
  )
}
export default App
