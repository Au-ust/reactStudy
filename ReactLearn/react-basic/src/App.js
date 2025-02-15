// const count = 100
// function getName() {
//   return '荷叶饭'
// }
// const list = [
//   { id: 1001, name: 'Vue' },
//   { id: 1002, name: 'React' },
//   { id: 1003, name: 'Angular' }
// ]
// const isLogin=false
// const articleType = 1//0,1,3
// //定义核心函数：根据不同文章类型返回不同JSX模板
// function getArticleTem() {
//   if (articleType === 0) {
//     return <div>我是无图文章</div>
//   } else if (articleType === 1) {
//     return <div>我是单图文章</div>
//   } else {
//     return <div>我是多图文章</div>
//   }
// }
//定义组件
function Button() {
  //组件内部逻辑
  return <button>click me!</button>
}

function App() {
  // const handleClick = (name,e) => console.log('button被点击了name:',name,'e:',e)
  return (
    <div className="App">
      {/*自闭和*/}
      <Button />
      {/*成对标签*/}
      <Button></Button>

      {/* <button onClick={(e)=>handleClick('荷叶饭',e)}>click me</button> */}

      {/* {getArticleTem()} */}
      {/* 逻辑与&&，短路运算符 */}
      {/* {isLogin && <span>this is span</span>} */}
      {/* {三元表达式} */}
      {/* {isLogin?<span>荷叶饭</span>:<span>loading...</span>} */}

      {/* <ul>
        {list.map(item => <li key={item.id}>{item.name}</li>)}
    </ul> */}

      {/* {//使用引号传递字符串
        'this is message'
      }
      {//识别JavaScript变量
        count
      }
      {//函数调用
        getName()
      }
      {//方法调用
        new Date().getDate()
      }
      {//使用js对象
        <div style={{ color: 'red' }}>this is div</div>
      } */}
    </div>
  );
}

export default App;
