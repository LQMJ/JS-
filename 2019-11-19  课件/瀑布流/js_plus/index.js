const box = document.querySelector('.body');
const head = document.querySelector('.head');
let {log} =console;
log(box)
log(head)

function minIndex(ary){
    let min = Math.min(...ary);
    let index = ary.findIndex(item=>item === min);
    return {
        index,
        min
    }
}

// 防抖
function debounce(cb,time){
    let timer;
    return function(...arg){
        //当事件触发的时候就先关闭上次的timer
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
             cb.call(this,...arg);
        }, time);
    }
}

// 节流
function throtttling(cb,time){
    let prevtime = 0;
    let timer;
    return function(...arg){
     let nowTime = +new Date;
     if(nowTime - prevtime > time){
         cb.call(this,...ary);
     }else{
         clearInterval(timer)
         timer = setTimeout(()=>{
             if(+new Date - prevtime > time){
                 cb.call(this,...arg)
             }
         },time)
     }
     prevtime = nowTime;
    }
}

const picw = 236; // 图片的宽度
const ml = 10 ; // margin-left
const boxt = 66;
let clientW = document.documentElement.clientWidth;// 可视区的宽度
let len = Math.floor(clientW/(picw + ml)) // 可视区可以放多少li

box.style.width = (len *(picw+ml)) - ml +'px';//ul的宽度

let aryx = []; // 求x
let aryy = []; //求y

for(let i = 0;i<len;i++){
    aryx[i] = i *(picw+ml)
    aryy[i] = 0;
}

function render(){
    fetch('./data.json')
    .then(d=>d.json())
    .then(ary=>{
        console.log(ary)
        ary.forEach((item,i)=>{
            let {index} = minIndex(aryy);//找出数组中top最小的
            let li = document.createElement('li');
            // 设置li的left，top
            li.style.cssText = `top:${aryy[index]}px;left:${aryx[index]}px`;
            let div = document.createElement('div');
             div.className = 'img_box';
            let img = document.createElement('img');
            img.src = item.pic; 
            let p1 = document.createElement('p');
            let p2 = document.createElement('P');
            p1.calssName = 'desc';
            p1.innerText = item.desc;
            p2.calssName = 'author';
            p2.innerText = item.author;
            div.append(img);
            div.append(p1);
            div.append(p2);
            li.append(div);
            box.append(li);
            setTimeout(() => {
                img.style.opacity = 1;
            },200);
            aryy[index] += (boxt + item.height*1 + 10); 
           
        })
    })
}
render()

//滚轮的时候判断触底
let iH = window.innerHeight;//可视区的高度
window.onscroll = debounce(fn,200);
function fn(){
    let {index} = minIndex(aryy);//最短的距离
    let scroll = window.pageYOffset;//滚动条的距离
   
    if(iH + scroll >= aryy[index]){
        // console.log('触底了')
        render();
    }
}

/* 
   window.onresize  当浏览器窗口缩放的时候触发

*/
// 当浏览器缩放的时候重新计算一下，可视区能放多少张图片；
window.onresize = function(){
    console.log(1)
    clientW = document.documentElement.clientWidth;// 可视区的宽度
     len = Math.floor(clientW / (picw + ml)) - ml + 'px';
     aryx.length = 0;
     aryy.length  = 0;
     iH = window.innerHeight;
     for(let i = 0;i<len;i++){
         aryx[i] = i*(picw + ml);
         aryy[i] = 0;
     }
     const lis = box.querySelectorAll('li');
     lis.forEach((item,i)=>{
         let {index} = minIndex(aryy);
         item.style.cssText = `top:${aryy[index]}px;left:${aryx[index]}px`;
         aryy[index] += (item.scrollHeight +10);
     })
}