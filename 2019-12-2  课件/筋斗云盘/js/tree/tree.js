let $tree_menu = $('.tree_menu');
// console.log($tree_menu)

function createTree(num){
    
    // 通过num找到对应的子级
    let ayy = getChild(data,num);
    // console.log(ayy)
    if(!ayy.length)return;
    // 只要有自己就创建一个ul，因为ul中要插入li
    let $ul = $('<ul></ul>')
    // 循环子级数据，生成很多li
    ayy.forEach(item=>{
        let $li = $(`
        <li>
        <i  class="iconfont icon-wenjianjia"></i>
        ${item.title}</li>`);
        
        $li.off().click(function(){
            if(this.children[0].classList.toggle('open')){
                $(this).append(createTree(item.id));
                render(item.id);
                createMenu(item.id)
            }else{
                $(this).find('ul').remove();
            }
            return false;
        })
        $ul.append($li);
    })
    // 返回当前创建的ul，里面有很多的li(文件夹)
    return $ul
}

$tree_menu.append(createTree(0));
// $('.content').append(createTree(0));