const $folders = $('.folders');//放文件夹的盒子
// console.log($folders)

let list = null;
function render(num=0){
    $folders.html('');
    let d = tools.getChild(data,num);
    $.each(d,(i,item)=>{
        let {chenked,id,title} = item;
        let $folder =$(`<div did="${id}" class="folder">
        <img src="./img/folder.png" alt="">
        <input type="text" value="${title}" class="input">
        <p>${title}</p>
        </div>
        `);
        $folder.find('input').hide();
        $folders.append($folder);
    })
}
render(0)
console.log($('.folders'))
$('#xj').click(function () {
    let $folder = $(`
    <div class="folder">
    <img src="./img/folder.png" alt="">
    <input type="text" placeholder="请设置文件名"  value="新建文件夹"/>
</div>
    `)
    $('.folders').append($folder); // 先插入再聚焦
    let $txt = $folder.find('input');
    $txt.select(); // 选中聚焦
      $txt.blur(function () { // 当失焦的时候push新的数据到ary中，并且通过新的数据渲染页面
        let val = $txt.val();
        let bool = data.map(item => item.title).includes(val);
        let nval = '';
        let num = 1;
        nval = val;
        while (bool) {
            let s = val.replace(/\(\d+\)$/, '') + '(' + num++ + ')';
            bool = data.map(item => item.title).includes(s);
            nval = s;
        }
    })
})