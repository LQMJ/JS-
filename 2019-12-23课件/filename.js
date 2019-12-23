/* 
   通过全局对象下的__filename能够获得当前文件的绝对路径（包含文件本身）

*/
// console.log(__filename)
// F:\正式课课件\2019-12-23课件\filename.js

/* 
   表示当前执行脚本所在的目录（运行文件的根目录），不包含文件本身
*/
// console.log(__dirname)
// F:\正式课课件\2019-12-23课件


let path = require('path');//找路径

// console.log(path)  拼路径的，写啥拼啥

path.join()
// console.log(path.join('wwwroot','./api.js'));
// wwwroot\api.js

path.resolve()
// console.log(path.resolve('/','./2_server.js'));
// F:\2_server.js
// console.log(path.resolve('wwwroot','./tmp/file/'));
// F:\正式课课件\2019-12-23课件\wwwroot\tmp\file


// console.log(path.resolve(__dirname,'./filename.js'))
// F:\正式课课件\2019-12-23课件\filename.js
////自动帮我们找当前文件的路径和配置路径进行链接