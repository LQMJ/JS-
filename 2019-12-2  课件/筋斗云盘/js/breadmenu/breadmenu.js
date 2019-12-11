const {getParents,getChild,getParent} = tools;
const $bread = $('.bread')
// console.log($bread)
const $syj = $('.syj')
const $xyj = $('.xyj')
// console.log($syj)
// console.log($xyj)
function createMenu(id){
    $bread.html('');
    let pary = getParents(id);//找到当前id下所有的父级包括自己
    // console.log(pary)
    pary.forEach((item,i,all)=>{
        let $breadChid = null;
        // 如果item是数组的最后一项，那么元素应为span
        if(i === all.length-1){
            $breadChid = $('<span>'+item.title + '</span>')
        }else{
            $breadChid = $('<a href = "javascript:;">'+item.title +'</a>')
        }
        // 点击面包屑，让文件夹和面包屑一起动
        $breadChid.click(function(){
            render(item.id)
            createMenu(item.id)
            createTree(item.id)
        });
        // console.log(list)
        // $syj.click(function(){
             
            // render(item.id)
            // createMenu(item.id)
            // createTree(item.id)
            // $bread[0].removeChild($breadChid[0])
        // })
        // $xyj.click(function(){
            // list.forEach(item=>{
            //     render(item.id)
            //     createMenu(item.id)
            //     createTree(item.id)
            //   })
            // render(id1)
            // createMenu(id1)
            // createTree(id1)
            // $bread.append($breadChid)
        // })
        $bread.append($breadChid)
    })
}
createMenu(0);