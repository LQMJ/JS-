// console.log($input)
let mj = [];
$input.click(function(){ // 全选
    const divss = document.querySelectorAll('.folder');
    // console.log(divss)
    divss.forEach((item,i)=>{
        item.onoff = false;
        if($(this)[0].checked === true){
            // divss.forEach((item)=>{
                item.style.background = 'pink';
                item.onoff = true;
            // })
      }else{
    //    divss.forEach((item)=>{
           item.style.background = '#fff';
    //    })
      }
      mj[i] = item.onoff;
    })
})


