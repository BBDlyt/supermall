import { request } from "./request"

export function getHomedata(){
    return request({
        url:'/home/multidata'
    })
}
export function getHomeGoods(type,page){
    return request({
        url:'/home/data',
        params:{
            type,
            page,
        }
    })
}
// export function getHomeGoods(){
//     return request({
//         url:'https://list.mogujie.com/search?callback=jQuery21102605254055889714_1632044288577&cKey=pc-outer-cpc&fcid=51249&uuid=7ef5d446-6377-49ca-a0a3-337ecdbc2228&num=&userMarks=&searchTag=&complement=false&isPage=true&page=2&cpc_itx=&xptag=&_=1632044288579'
//         // params:{
//         //     type,
//         //     page,
//         // }
//     })
// }