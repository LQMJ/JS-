const $folders = $('.folders');//放文件夹的盒子
const $folderChild = $('.folderChild') // 显示隐藏的空文件
// console.log($folderChild)
let npid = 0;
const $qxk = $('#qxk')
const $input = $qxk.find('input');

let every = true;
let {bong} = tools;
let list = null;
function render(num=0){
    $folders.html('');
    let d = tools.getChild(data,num);
    // console.log(d)
    list = d;
    if(!d.length){ //没有length，就是没有子级
        $folderChild.show();
        return;
    }else{
        $folderChild.hide();
    }
    $.each(d,(i,item)=>{
        let {checked,id,title} = item;
        let $folder =$(`<div did="${id}" class="folder">
        <img src="./img/folder.png" alt="">
        <input type="text" value="${title}" class="input">
        <p>${title}</p>
        </div>
        `);

        let $img = $folder.find('img');
        $img.dblclick(function(){
            $input[0].checked = false;
            window.id1 = $(this).parent().attr('did')*1;
             //只要双击进文件夹
             render(id1);
             createMenu(id1); //为了联动面包屑
        })
        $folder.mousedown(function(){return false;})
        $folder.find('input').hide();
        $folders.append($folder);
    })
}
render(0)
// console.log($('.folders'))
// $qx.off().click(function(){

// })
$('#xj').click(function () {
    let $folder = $(`
    <div class="folder">
    <img src="./img/folder.png" alt="">
    <input type="text" placeholder="请设置文件名"  value="新建文件夹"/>
    <p style="display:none;">新建文件夹</p>
</div>
    `)
    $('.folders').append($folder); // 先插入再聚焦
    let $txt = $folder.find('input');
    $txt.select(); // 选中聚焦
      $txt.blur(function () { // 当失焦的时候添加新的数据到data中，并且通过新的数据渲染页面
        let val = $txt.val();
        let nval = '';
        let num = 1;
        nval = val;
        // console.log(list)
        let bool = list.map(item=>item.title).includes(val);
        while (bool){
            let s = val.replace(/\(\d+\)$/, '') + '(' + num++ + ')';
            bool = list.map(item => item.title).includes(s);
            nval = s;
        }
        // console.log(data)
        let item = +new Date;
        data[item]={
            "id":item,
            "pid":list[0].pid,
            "title": nval,
            "checked":false
        }
        render(list[0].pid)
    })
})