### jquery
+ jquery是一个js的类库，他简化了DOM操作，动画操作。兼容性，数据请求操作。

+ https://www.jquery123.com/  中文网

+ （安装）npm init -y  生成一个package.json文件

 - npm install jquery -D

 - jQuery有多少版本
   源码版（学习版）：jquery.js
   压缩版 :jQuery.min.js

 - 引入jquery  <scrip src = "./jquery/dist/query.min.js"></script>

 ###  选择器

 $ -> jquery对象

 $() -> fn() 函数调用

 css如何去选择，jQuery就如何去选择
 ```
    $('#box')  获取id
    $('li') 获取所有的li的元素
    $('.active') 获取所有的.active元素
    $('#ul li')
    $('input[type = "button"]') 属性选择器
    $('input[type != "button"]')
    $('li:even')  偶数  
    $('li:odd')   基数
    $(':button')  伪类选择器（获取type为button的元素）
    $('div:eq(0)')  代表找第一个div
 ```

 ###  属性操作
   +  attr -> setAttribute  getAttribute
   + removeAttr  ->removeAttribute
   + prop  -> 表单的状态布尔值（表单元素用）
   + val  -> value
   + html()  -> innerHTML
   + text()  ->innerText

### 样式操作
   + css()   设置行间的样式 -> style

    -  $('#box').css('width')  -> 获取style的宽度
    - $('#box').css('width',200) -> 设置宽度
    - $('#box').css({     ->  批量添加
       width:200,
       background:red
       }) 
    - 显示:  show()
    - 隐藏： hide()    

### jquery对象转原生对象,原生对象转jquery对象

``` 
   原生对象转jquery只需要包$()即可

   box -> ${box}  就变成了jquery对象

   jquery转原生对象

   $box -> $box.get(0)  ||  $box[0]

```
