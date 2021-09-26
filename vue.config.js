// module.exports={
//     configureWebpack:{
//         resolve:{
//             alias:{
//                 'assets':'@/assets',
//                 'common':'@/common',
//                 'components':'@/components',
//                 'network':'@/network',
//                 'views':'@/views',
//             }
//         }
//     }
// }\
// module.exports = {
//     publicPath: './',
//     devServer: {
//         open: true,
//         host: 'localhost',
//         port: '8088',
//         https: false,
//         contentBase: 'assets',
//         proxy: {
//             '/': {
//                 target: 'http://192.168.101.12:3000',
//                 changeOrigin: true,
//                 // pathRewrite: {
//                 //     '/api':'/'
//                 // }
//             }
//         }
//     }
// }