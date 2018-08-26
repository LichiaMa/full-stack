# ajax

ajax	用来**模拟**表单向服务器提交数据，对于服务器来讲，并不能区别是表单提交的数据还是ajax提交的数据。

`get`数据载体为url,也就是放在请求头中

`post`数据载体为body，也就是请求体中

原生`ajax`

```javascript
// 创建xhr对象
const xhr = new XMLHttpRequest();
// 请求链接
xhr.open(methord,url,true) // true为异步，false为同步
// 发送请求
xhr.send(data?)  // data为请求体中的数据，get请求为空
// 状态监听
xhr.onreadystatechange = function () {
  if(readyState === 4) { // 0:初始化，1:链接完毕，2:数据开始发送，3: 请求头发送，4: 请求体发送
   if(xhr.status>=200&&xhr.status<300 || xhr.status === 403) {
       const data = xhr.responseText; // 接收到的数据  
       console.log('成功')
   } else {
       console.log('失败')
   }   	
  }
}

```

