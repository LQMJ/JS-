### 指令
  - 为了方便开发，vue中使用了指令，这些指令包含了很多元素身上的属性和js的一些内置方法

  - v-text  =>  innerText
  - v-html  =>  innerHTML
  - v-show  =>  display:block/none   布尔值
  - v-if    =>  看下布尔值是否为trun，为true就渲染否则就不渲染
  - v-else  =>  限制：它上面必须是v-if或者v-else-if
  - v-else-if  => 限制：前一个兄弟元素必须有v-if 或者v-else-if
  - v-on   =>  (缩写@) 事件名="事件函数|简单语法"
   + 一般事件函数是放在methods下
   + $event  如果不传参，第一个参数就是事件对象，*** 如果传参了还想拿到事件对象，需要在模板中的事件函数内传一个
   - 修饰符  .enter(.13)  .stop（阻止冒泡）  .prevent（阻止默认事件）  .once（执行一次）... （跟在事件名后面）
   - 解绑事件可以用
     ```
        @mousedown="onoff && down ($event)"
        当onoff是真的就添加事件，假的就解除事件
     ```

  - v-for="val,key in 数据"  遍历对象或者数组
    + 如果是数组val就是数组的成员，key就是索引
    + 如果是对象val键值，key键名
        