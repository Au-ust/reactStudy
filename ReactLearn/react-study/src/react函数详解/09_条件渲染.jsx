function App() {
  return (
    <div>
      {function () {} + ''}
      <br />
      {null + ''}
      <br />
      {undefined + ''}
      <br />
      {JSON.stringify({ username: '荷叶饭' })}
    </div>
  )
}
export default App
