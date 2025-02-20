// function Welcome() {
//   return <div>hello Welcome</div>
// }

// function App() {
//   return (
//     <div>
//       <Welcome />
//       <Welcome></Welcome>
//     </div>
//   )
// }
// export default App

const Qf = () => {
  return <div>hello Qf</div>
}

Qf.Welcome = () => {
  return <div>hello Welcome</div>
}


function App() {
  return (
    <div>
      <Qf.Welcome />
      <Qf.Welcome></Qf.Welcome>
    </div>
  )
}
export default App
