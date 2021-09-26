import axios from 'axios'
// export function request(config,success,failure){
//     const instance=axios.create({
//         baseURL:'http://123.207.32.32:8000',
//         timeout:5000
//     })
//     instance(config)
//     .then(res=>{
//         success(res)
//     },err=>{
//         failure(err)
//     })
// }
export function request(config){
        const instance=axios.create({
            // baseURL:'http://123.207.32.32:8000',
            baseURL:'http://152.136.185.210:7878/api/hy66',
            // baseURL:'http://192.168.101.12:3000',
            timeout:5000
        })
        
        return instance(config)
    }
