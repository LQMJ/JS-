const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
let obj = {
    mode:'development', // 开发模式
    entry:{ // 入口
        index:'./src/index.js'
    },
    // output:{  //出口
    //     filename:'[name].js',
    //     path:path.resolve(__dirname,'./build');
    // },
    devServer:{ // webpack-dev-server是webpack官方提供的一个小型express服务器
        hot:true, // 热更新开启
        port:8080, // 端口
        open:true  // 使用默认浏览器打开网页
    },
    module:{ // 
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.less$/,
                use:[
                    {
                        loader:'style-loader'
                    },
                    {
                        loader:'css-loader'
                    },
                    {
                        loader:'less-loader'
                    }
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'./src/index.html'),
            filename:'index.html'
        })
    ]
}

module.exports = obj;