let ary = [{
        title: '新建文件夹',
        id: 0
    },
    {
        title: '新建文件夹(1)',
        id: 1
    }
];
// let box = document.querySelector('#box')
// console.log(box)
function render(arr) {
    $('#box').html('');
    $.each(arr, (i, item) => {
        let $folder = $(`
        <div class="folder">
        <img src="./img/folder.png" alt="">
        <input type="text">
        <p>${item.title}</p>
        </div>
         `)
        $folder.find('input').hide();
        $('#box').append($folder)
    })
}
render(ary)
$('#xj').click(function () {
    let $folder = $(`
    <div class="folder">
    <img src="./img/folder.png">
    <input type="text" placeholder="请设置文件名"  value="新建文件夹"/>
</div>
    `)
    $('#box').append($folder); // 先插入再聚焦
    let $txt = $folder.find('input');
    $txt.select(); //选中聚焦
    $txt.blur(function () { // 当失焦的时候push新的数据到ary中，并且通过新的数据渲染页面
        let val = $txt.val();
        let bool = ary.map(item => item.title).includes(val);
        let nval = '';
        let num = 1;
        nval = val;
        while (bool) {
            let s = val.replace(/\(\d+\)$/, '') + '(' + num++ + ')';
            bool = ary.map(item => item.title).includes(s);
            nval = s;
        }
        ary.push({
            id: +new Date,
            title: nval
        })
        render(ary)
    })
})