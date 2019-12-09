const $set = $('.set'); // 移动
// console.log($set)

const $ok = $('.ok'); // 确定按钮
// console.log($ok)

const $off = $('.off'); // 取消
// console.log($off)

const $content = $('.content'); 
// console.log($content)

const xz = document.querySelector('#xz')

const btn2 = document.querySelector('#btn2')

const modal = document.querySelector('#modal-tree');

let okcode = -1;
function createModeTree(num){
    
    // 通过num找到对应的子级
    let ayy = getChild(data,num);
    console.log(ayy)
    if(!ayy.length)return;
    // 只要有自己就创建一个ul，因为ul中要插入li
    let $ul = $('<ul></ul>')
    // 循环子级数据，生成很多li
    ayy.forEach(item=>{
        let $li = $(`
        <li>
        <i  class="iconfont icon-wenjianjia"></i>
        ${item.title}</li>`);
        const folder = document.querySelectorAll('.folder');
        $li.click(function(){
            let R = [...folder].filter(item=>item.onoff === true);
            // console.log(R)
            let m = R.map(item=>{
                return item.getAttribute('did');
            })
            // console.log(m)
            if(m.some(d=>d===item.pid)){
                okcode = 'error';
                return;
            }else{
                okcode = item.pid;
            }

            if(this.children[0].classList.toggle('open')){
                $(this).append(createModeTree(item.id));
                render(item.id);
                createMenu(item.id)
                createTree(item.id)
                npid = item.id;
            }else{
                $(this).find('ul').remove();
            } 
            
        })
        $ul.append($li);
    })
    // 返回当前创建的ul，里面有很多的li(文件夹)
    return $ul
}
// createModeTree(0)


// $content.append(createModeTree(0));
const $ul = $content.children();
// console.log($li)
$set.off().click(function(){
    const folder = document.querySelectorAll('.folder')
    // console.log(folder)
    let R = [...folder].filter(item=>item.onoff === true);
    // console.log(R) 
    if(!R.length){ 
        // console.log('请选择移动的文件')
         xz.style.display = 'block';
    }else{
         modal.style.display = 'block'; //显示移动的框
         $ul.remove();
         $content.append(createModeTree(0))
    }
    // $content.append(createModeTree(0));
    let F = R.map(item=>item.getAttribute('did')) // 存一下改之前的pid，为了一会儿刷新页面
    // console.log(F)
    $ok.off().click(function(){
        if(okcode === 'error'){
            console.log('非法操作')
            return
        }
        F.forEach(item=>{
           data[item].pid = npid;
        })
        render(data[F[0]].pid);
        modal.style.display = 'none';
    })
    $off.off().click(function(){
        modal.style.display = 'none';
    })
    btn2.onclick = function(){
        xz.style.display = 'none';
    }
})


