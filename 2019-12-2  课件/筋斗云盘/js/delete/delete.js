const $del = $('#del')
// console.log($del)
$del.click(function(){ // 删除
    // console.log(mj)
    // 判断至少要有一个文件被选中，如果都没被选中，说明找不到要删除的文件
    const divs = document.querySelectorAll('.folder')
    // console.log(divs)
    let a = [...divs].filter(item=>item.onoff===true)
    // console.log(a)
    // console.log(arr)
   
    if(arr.some(item=>item===true) || mj.some(item=>item===true)){
        let atr = [];
        a.forEach(item=>{
           atr.push(item.getAttribute('did'))
           $folders[0].removeChild(item)
        })
        atr.forEach(item=>{
            delete data[item]
        })
    }else{
        alert('请选择文件')
    }
    $input[0].checked = false;
})





