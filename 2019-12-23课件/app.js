/* 
   http://www.expressjs.com.cn/

   1.安装：
     nop install express -S

   2. 引包

*/
const express = require('express');
const app = express();
const bp = require('body-parser');
const fs = require('fs');

/*
    中间件:
        功能增强
*/

app.use(bp.urlencoded({ extended: false })); //解析urlencoded

let u = express.static('www');
app.use(u);//静态文件

/*
    req,res 都是二次封装的对象
*/
app.get('/login',(req,res)=>{
    console.log(req.query);
    if(req.query.user === 'xxx'){
        // res.json({
        //     code:1,
        //     msg:'哈哈'
        // });
        res.send({
            code:1,
            msg:'哈哈'
        });
    }
});