### css动画  2D

- transtion 
  + property 运动的属性
    ```
       transition-property:top //运动只作用于top
    ```
  + duration  规定完成过渡效果需要多少秒或毫秒
    
    ```
        transition-duration:1s  一秒完
        transition-duration:100ms  100毫秒完
    ```

  + transition-delay  定义过渡效果何时开始
    ```
       transition-dalay:2s;
       在过渡效果开始前等待 2 秒；
    ```

- translate(x轴，y轴) 就好比说left，top
  + translateY
  + translateX

```
   使用：transform：tranalste(100px,100px);
```

- rotate  转角度的
   
```
    transform:rotate(10deg);  顺时针转10度，如果要逆时针就改负角度即可，注意单位一定是deg 
```

- scale  缩放
```
    最初始值为1 （正常大写）
    比1大就是放大多少倍，0.5缩小一半
    transform:scale(.5);
```

- transform-orgin  基准点
```
   默认为center center
   left
   center
   right
   length
   %
   一般在动画之前设置
```

### requestAnimationFrame
> 采用系统时间间隔，保持最佳绘制效率，不会因为间隔时间过短，造成过度绘制，增加开销；也不会因为时间间隔太长，使用动画卡顿不流畅，让各种网页动画效果能够有一个统一的刷新机制，从而节省系统资源，提高系统性能，改善视觉效果

```
    优点：
       【1】requestAnimationFrameu会把每一帧中的所有DOM操作集中起来，在一次重绘或者回流中就完成，并且重绘和回流的时候时间间隔紧紧跟随浏览器的刷新频率

       【2】在隐藏或不可见的元素中，
       requestAnimationFrame将不会进行回流或重绘，这当然就意味着更少的CPU、GPU和内存使用量

       【3】requestAnimationFrame是由浏览器专门为动画提供的API,在运行是浏览器会自动优化方法的调用，并且页面不是激活状态的话，动画会自动暂停，有效节省CPU开销

       写一个有名的自执行函数，
       里面使用requestAnimationFrame
       在里面调用有名自执行函数
       也有一个返回值，返回值是（编号）
       let timer;
       (function move(){
           timer = requeryAnimationFrame(function(){
               box.style.left = box.offsetLeft + 10 +'px';
               move()
           })
       })()

```

###  cancelAnimationFrame(编号)  

```
    cancelAnimationFrame(timer);
```