<template>
    <div id="detail">
        <detail-nav-bar @titleClick="titleClick"></detail-nav-bar>
        <detail-swiper></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shop="shop"></detail-shop-info>
        <detail-goods-info :detail-info="detailInfo"></detail-goods-info>
        <detail-param-info :paramInfo="paramsInfo"></detail-param-info>
        <detail-comment-info :commentInfo="commentInfo"></detail-comment-info>
        <goods-list>
            <goods-list-item v-for="item in recommends" :pop="item" :key="item"></goods-list-item>
        </goods-list>
    </div>
</template>
<script>
import DetailNavBar from './childComps/DetailNavBar.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import DetailParamInfo from './childComps/DetailParamInfo.vue'
import DetailCommentInfo from './childComps/DetailCommentInfo.vue'

import GoodsList from '../../components/content/goods/GoodsList.vue'
import GoodsListItem from '../../components/content/goods/GoodsListItem.vue'







import {getDetail,Goodsinfo,Shop,GoodsParam,getRecommend} from "../../network/detail"

export default {
    name:"Detail",
    data(){
        return {
            iid:null,
            // topImgs:null
            goods:{},
            shop:{},
            detailInfo:{},
            paramsInfo:{},
            commentInfo:{},
            recommends:[],
            themTopys:[0,100,500]
        }
    },
    components:{
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailGoodsInfo,
        DetailParamInfo,
        DetailCommentInfo,
        GoodsList,
        GoodsListItem
    },
    created(){
        this.iid=this.$route.params.iid
        getDetail(this.iid).then(res=>{

            // this.topImgs=res.data.result.itemInfo.topImages
            console.log(res)
            const data=res.data.result
            console.log(data)
            this.goods=new Goodsinfo(data.itemInfo,data.columns,data.shopInfo.services)
            this.shop=new Shop(data.shopInfo)
            this.detailInfo=data.detailInfo
            this.paramsInfo=new GoodsParam(data.itemParams.info,data.itemParams.rule)
            if(data.rate.cRate!==0){
                this.commentInfo=data.rate.list[0]
            }

        })
        getRecommend().then(res=>{
            console.log(res)
            this.recommends=res.data.data.list
            this.$refs.scroll.scrollTo(0,-this.themTopys[index],200)
        })
    },
    methods:{
        titleClick(index){
            console.log(index)
        }
    }
}
</script>
<style>
#detail{
    position:relative;
    z-index:10;
    background-color:#fff;
}
</style>