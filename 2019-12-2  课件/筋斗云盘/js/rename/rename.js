const $rename = $('.rename')
const rename = document.getElementById('rename')
const btn = document.getElementById('btn')
// console.log($rename)
// console.log(arr)
// console.log(list)
$rename.click(function(){
    returnVal = true;
    const folder = document.querySelectorAll('.folder')
    // console.log(folder)
    let x = [...folder].filter(item=>item.onoff === true);
    // console.log(x)
    if(x.some(item=>item.onoff===true)){
        if(x.length === 1){
            let kk = x[0].getAttribute('did');
            let $p = $(`.folders div[did = ${kk}] p`);
            let $txt = $(`.folders div[did = ${kk}] input`);
           
            // console.log($txt)
            $p.hide();
            $txt.css('display','block');
            $txt.select();
            $txt.blur(function(){ //不能重名
                let val = $txt.val();
                if($p.text() === val){
                   $p.show();
                   $txt.hide();
                }else{
                    if(!val){
                        console.log('请填写内容')
                        $txt.val($p.text())
                        $txt.select();
                        return;
                    }
                    let $siblings = $(`.folders div[did != ${kk}]`);  
                    let arc = [];
                     $siblings.each((i,ele)=>{
                         arc[i] = ele.getAttribute('did');
                     })
                    // console.log(arc)
                    let did =  arc.map(item=>{
                        return data[item].title
                    })
                    // console.log(did)
                    if(did.every(item => item != val)){
                        $p.text(val).show();
                        $txt.hide();
                    }else{
                        // $txt.select();
                        returnVal = false;
                        rename.style.display = 'block';
                        btn.onclick = function(){
                            rename.style.display = 'none';
                            $txt.select()
                        }
                    }
                }
            })
        }else{
            alert('只能选择一个文件')
        }
    }else{
        alert('请选择文件')
    }
// let $input = $folder.find('input')
// $input.select();
     
})