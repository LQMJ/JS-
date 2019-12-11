const $box = $('#box');
// console.log($box)
const $kuang = $box.find('.kuang');
const {left:box_l,top:box_t} = $box.offset();
let arr = [];

$(document).on('mousedown',function(ev){

    if(ev.target === document.querySelector('.folders')){
    let disX = ev.pageX,disY = ev.pageY;
    // console.log(disY,disX)
    let  $folder = $folders.find('.folder')
    if($(ev.target).closest('.folder').length)return;
    $kuang.show().css({
        left:disX - box_l,
        top:disY - box_t,
        border:'1px dashed #000'
    })

    $(document).on('mousemove',function(ev){
        $kuang.css({
            // 移动的减去按下的
            width:Math.abs(ev.pageX - disX),
            height:Math.abs(ev.pageY - disY),
            
            left:Math.min(ev.pageX - box_l,disX - box_l),
            top:Math.min(ev.pageY - box_t,disY - box_t)
        })

        // move的时候看看当前的框碰到了某几个元素
        // console.log($folder)
       
        $folder.each((i,ele)=>{
            ele.onoff = false;        //定一个自定义属性
            if(bong($kuang[0],ele)){    
              ele.style.background = 'pink';
              ele.onoff = true;
            }else{
                ele.style.background = '#fff';
            }
            arr[i]=ele.onoff;
        })
        // console.log(arr)
        // console.log($input[0])
        if(arr.every(item=>item === true)){  // 全选
            $input[0].checked = true;
        }else{
            $input[0].checked = false;
       }
    })  
    
    $(document).on('mouseup',function(ev){ // 鼠标抬起
        $(document).off('mouseup')  
        $(document).off('mousemove');
        $kuang.css({
            width:0,
            height:0,
            display:'none'
        })

        if(ev.pageX === disX && ev.pageY === disY){  // 当鼠标按下和抬起的时候是同一个坐标就清除选中，
            $folder.each((i,ele)=>{
                ele.style.background = '#fff';
                $input[0].checked = false;
            })
        }
    })
   
    } 
})