// alert('你好，js~我是外部的js文件')
// document.write('我是div标签')
// document.write('<h1>我是标题h1</h1>')
// console.log('我是控制台')
// prompt('请输入你的名字')

// let age
// age = 18
// alert(age)
// let age=18

// let num = 20
// let uname='张三'
// console.log(num,uname);

// let uname = prompt('请输入姓名')
// document.write(uname)

// let a = 10
// let b = 20
// let temp = a
// a = b
// b = temp
// console.log(a,b);

// let uname = prompt('请输入你的姓名')
// let age = prompt('请输入你的年龄')
// let gender=prompt('请输入你的性别')
// document.write(uname,age,gender)

// let arr=[11,22,33,44]
// document.write(arr)
// document.write(arr[2])
// document.write(arr.length)

// let age=19
// document.write(`我今年${age}岁了`)

// let age
// document.write(age)
// let obj=null
// console.log(obj);

// let num=10
// console.log(typeof num)

// let str = '123'
// console.log(typeof Number(str))

// let num=+prompt('你输入的数据将是number类型')
// document.write(typeof num)

// let num1 = +prompt('请输入第一个数字')
// let num2 = +prompt('请输入第二个数字')
// let sum=num1+num2
// alert(`答案是${sum}`)

// let price = +prompt('输入商品价格：')
// let num = +prompt('输入商品数量：')
// let address = prompt('输入收货地址：')

// let sum = price * num

// document.write(`
//     <table>
//         <tr>
//             <th>商品名称</th>
//             <th>商品价格</th>
//             <th>商品数量</th>
//             <th>总计</th>
//             <th>收货地址</th>
//         <tr>
//             <td>小米爪机</td>
//             <td>${price}</td>
//             <td>${num}</td>
//             <td>${sum}</td>
//             <td>${address}</td>
//         </tr>
//         </tr>
//     </table>
//     `)

// console.log('aa'<'aac');


// switch (1) {
//     case 3:
//     alert('我是case1')
//         break
//     case 1,1:
//         alert('我是case2')
//         break
//     default:
//         alert('我是default')
//         break
// }输出：我是case2

// for(let i=1;i<=9;i++){
//     for(let j=1;j<=i;j++){
//         document.write(`<span>${j}x${i}=${i*j}</span> `)
//     }
//     document.write('<br>')
// }

// let arr=[1,2,3]
// arr.unshift('sss','ooo')
//arr[2]='uuu'
// console.log(arr);

// let arr=[1,2,3,4,5,6,7]
// arr.splice(3,2)
// console.log(arr);

let arr = []
for (let i = 1; i <= 4; i++) {
    // let num = prompt('请输入第一季度的数据:')
    // arr.push(num)
    arr.push(prompt(`请输入第${i}季度的数据:`))
    console.log(arr);
}
//打印大盒子，循环打印小盒子
document.write(` <div class="bigbox">`)

for (let i = 0; i < arr.length; i++) {
    document.write(`
        <div style="height: ${arr[i]}px;">
            <span>${arr[i]}</span>
            <h4>第${i+1}季度</h4>
        </div>
        `)
}
document.write(` </div >`)


