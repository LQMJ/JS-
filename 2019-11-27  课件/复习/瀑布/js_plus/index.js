class Waterfall{
    constructor(){
        this.ul = document.querySelector('.body') // 获取ul
        this.li = this.ul.children; // 获取li
        this.wh = window.innerHeight; // 窗口的可视高度
        this.bodyT = this.ul.offsetTop; // ul
        this.render()
        this.scroll()
    }
    getMinIndex(ary){ // 取最短的li和它的索引
        var ary2 = [...ary].map(item=>{
            return item.scrollHeight;    
        })
        let min = Math.min(...ary2);
        let index = ary2.findIndex(item=>item ===min)
        return{
            min,index
        }
    }
    create({pic,desc,author,height}){  
        let div = document.createElement('div');
        div.className = 'img_box';
        div.innerHTML = `
        <img height="${height}" src="${pic}" alt="">
        <p class="desc">${desc}</p>
        <p class="author">${author}</p>
        `;
        return div;
    }
    render(){  // 渲染事件
        fetch('./data.json').then(d=>d.json()).then(data=>{
           data.forEach((d,i)=>{
               let {index} = this.getMinIndex(this.li);
               let div = this.create(d);
               this.li[index].append(div);
               setTimeout(()=>{
                   div.children[0].style.opacity = 1
               },i*100)
           })
        })
    } 
    scroll(){  // 滚轮事件
        let fn = () =>{
            let {index} = this.getMinIndex(this.li);
            if((window.pageYOffset + this.wh)>(this.li[index].scrollHeight+this.bodyT)){
                this.render();
            }
        }
        window.onscroll = this.fd(fn,200)
    }
    fd(cb,time){ // 防抖
        let timer;
        return function(){
          if(timer){
              clearTimeout(timer)
            }
            timer = setTimeout(()=>{
                cb.call(this)
            },time);  
        }  
    }
}
let w = new Waterfall()