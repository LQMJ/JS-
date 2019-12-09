let tools = (function(){
    //通过父级的id，去找子级
    // console.log(data)
    function getChild(data,id=0){
        if(!data[id])return null;//如果传入的id，没这个数据就返回null
        let ary = Object.keys(data); // 获取key值 [0,1,2,3,4]
        return ary.filter(item=>data[item].pid === id).map(item=>data[item]);
    }
    // 专门用来找一个父级的
    function getParent(id){
        //data[id].pid 是个数字  data[data[id].pid]
        if(data[id].pid === '-1')return null;// 到-1就说明到顶了
        return data[data[id].pid];//父级的数据
    }

    // 找一推父级的
    function getParents(id){
        let pdata = getParent(id);//父级
        let ary = [data[id]];//先把自己存进去
        // 一直循环到pdata为null
        while(pdata){
            ary.unshift(pdata);//把每次的父级存到ary中
            // console.log(pdata)
            pdata = getParent(pdata.id);//每次都要改变pdata
        }
        return ary;
    }
    
    // 碰撞
    function bong(obj,obj2){
        let {left:l,top:t,bottom:b,right:r} = obj.getBoundingClientRect();
        let {left:l2,top:t2,bottom:b2,right:r2} = obj2.getBoundingClientRect();
        if(r < l2 || b < t2 || l > r2 || t > b2){
            // console.log('没碰到');
            return false;
        }else{
            // console.log('碰到');
            return true;
        }
    }

    return {
        getChild,
        getParents,
        bong,
        getParent
    }
})();
