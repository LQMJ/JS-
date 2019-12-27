const path = require('path');
const obj = {
    mode:'development',
    entry:'./1.js',
    output:{
        path:path.resolve(__dirname,'./build'),
        filename:'build.js'
    }
}

module.exports = obj; //导出配置项

