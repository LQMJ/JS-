class Waterfall{
    constructor(){
        this.ul = document.querySelector('.body')
        // console.log(this.ul)
        this.li = this.ul.children;
        // console.log(this.li)
        this.wh = window.innerHeight;
        this.bodyT = this.ul.offsetTop;
        this.render()
        // this.create()
        this.scroll()
    }
    getMinIndex(ary){
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
        // console.log(pic,desc,author,height)
        let div = document.createElement('div');
        div.className = 'img_box';
        div.innerHTML = `
        <img height="${height}" src="${pic}" alt="">
        <p class="desc">${desc}</p>
        <p class="author">${author}</p>
        `;
        return div;
    }
    render(){
        fetch('./data.json').then(d=>d.json()).then(data=>{
           data.forEach((d,i)=>{
            //    console.log(d)
               let {index} = this.getMinIndex(this.li);
               let div = this.create(d);
               console.log(div)
               this.li[index].append(div);
               setTimeout(()=>{
                   div.children[0].style.opacity = 1
               },i*100)
           })
        })
    }
    scroll(){
        let fn = () =>{
            let {index} = this.getMinIndex(this.li);
            if((window.pageYOffset + this.wh)>(this.li[index].scrollHeight+this.bodyT)){
            
                this.render();
            }
        }
        window.onscroll = this.fd(fn,200)
    }
    fd(cb,time){
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