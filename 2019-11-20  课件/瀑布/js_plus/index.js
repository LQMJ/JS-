class Tools{
    getMinIndex(obj){
        var obj1 = [...obj].map((item)=>{
            return item.scrollHeight;
         })
        let min = Math.min(...obj1);
        let index = obj1.findIndex(item=>item===min);
        return{
            min,index
        }
    }
    // throttling(cb,time){ // 节流
    //     let prevtime = 0; 
    //     return function(...arg){
    //         let nowTime  = +new Date; // 事件戳
    //         if(nowTime - prevtime > time){
    //             cb.call(this,...arg);
    //         }
    //         prevtime = nowTime;
    //     }
    // }
    debounce(cb,time){
        let timer;
        return function(){
          //当事件触发的时候就先关闭上次的timer
          if(timer){
              clearTimeout(timer)
          }
          timer = setTimeout(() => {
              cb.call(this)
          }, time);
        }
    }
}

class Waterfall extends Tools{
    constructor(name){
        super();
        this.box = document.querySelector(name);
        this.list = this.box.children;//li
        console.log(this.list) // 类数组
        this.wh = window.innerHeight;//可视区的高度
        this.bodyT = this.box.offsetTop;//ul的定位距离
        this.loading = document.getElementById('loading');
        this.onoff = true;
        this.render();
        this.scroll();
    }
    api(url,cb){
        // console.log(this)
        let that = this;
        fetch(url)
        .then(d=>d.json())
        .then(data=>{
            cb.call(that,data)
        })
    }
    changeLoading(){
        this.loading.style.display = this.onoff?'block':'none';
    }
    onLd(){
        this.onoff = true;
    }
    offLd(){
        this.onoff = false;
    }
    render(){
        this.onLd();
        this.changeLoading();
        setTimeout(()=>{
            this.api('./data.json',function(data){
                this.offLd();
                this.changeLoading();
                data.forEach((d,i)=>{
                    let {index} = this.getMinIndex(this.list);
                    let div = this.create(d);
                    this.list[index].append(div);
                    setTimeout(()=>{
                        div.children[0].style.opacity = 1;
                    },i*100);
                })
            })
        },1000);
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
    scroll(){
        let fn = () =>{
            let {index} = this.getMinIndex(this.list);
            if((window.pageYOffset + this.wh)>(this.list[index].scrollHeight+this.bodyT)){
                this.render();
            }
        }
        window.onscroll = this.debounce(fn,200);
    }
}

let w = new Waterfall('.body');


console.log(setTimeout(()=>{
    console.log(111)
},1000))