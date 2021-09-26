<template>
  <div class="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>
          购物街
        </div>
      </template>
    </nav-bar>
    <!-- <swiper>
      <swiper-item v-for="(item,index) in banners" :key="index">
         <a :href="item.link">
        <img :src="item.image" >
      </a>
      </swiper-item>
     

    </swiper> -->
   <!-- <scroll class="scroll" ref="scroll" :probe-type="3" @scroll="contentscroll" :pull-up-load="true" @pullingUp="loadmore"> -->
        <home-swiper :banners="banners" class="home-swiper"></home-swiper>
        <recommend-view :recommends="recommends" class="recommends"></recommend-view>
        <feature-view></feature-view>
        <tab-control :titles="['流行','新款','精选']" @target="target"></tab-control>
        <goods-list>
          <goods-list-item v-for="item in goods[current].list" :pop="item" :key="item"></goods-list-item>
        </goods-list>
  <!-- </scroll> -->
  <back-top @click="backClick" v-show="isshow"></back-top>
  </div>
</template>

<script>
import NavBar from '../../components/common/nav/NavBar.vue'
import {getHomedata,getHomeGoods} from '../../network/home'
import HomeSwiper from './childComps/HomeSwiper.vue'
import RecommendView from './childComps/RecommendView.vue'
import FeatureView from './childComps/FeatureView.vue'
import TabControl from '../../components/content/tabControl/TabControl.vue'
import GoodsList from '../../components/content/goods/GoodsList.vue'
import GoodsListItem from '../../components/content/goods/GoodsListItem.vue'
import Scroll from '../../components/common/scroll/Scroll.vue'
import BackTop from '../../components/content/backtop/BackTop.vue'





export default {
  name: 'Home',
  components:{
    TabControl,
    GoodsList,
    GoodsListItem,
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    Scroll,
    BackTop
  },
  data(){
    return{
      banners:[],
      recommends:[],
      current:'pop',
      isshow:false,
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},

      }
      // goods:{
      //   // 'pop':{page:1,list:[{name:'zs'},{name:'lsii'},{name:'wangwu'}]},
      //   'pop':{page:0,list:[
      //     {acm: "3.ms.1_1_1mvhvti.134.28077-68998.yHhMLsJrVqFgG.c_2_18_602452389_1554528341_76_0-src_0-pid_5-c1_51249_nil_nil_2_1554528341_81_0-dit_-sd_117-swt_134-imt_7-t_uR9YZsJrVjD4y-lc_18-fcid_51249-pit_2-qpdp_0",
      //      cfav: 296,
      //      clientUrl: "https://shop.mogu.com/detail/1mvhvti?acm=3.ms.1_1_1mvhvti.134.28077-68998.yHhMLsJrVqFgG.c_2_18_602452389_1554528341_76_0-src_0-pid_5-c1_51249_nil_nil_2_1554528341_81_0-dit_-sd_117-swt_134-imt_7-t_uR9YZsJrVjD4y-lc_18-fcid_51249-pit_2-qpdp_0&cparam=MTYzMjA0NTIyMl8xazA4dTJhX2Y4NzdmODg1ODIzZDY3Y2ExOWJhYzNjZWRlODZhMmIwXzE4XzBfNjAyNDUyMzg5XzQ4ODZfMF83Nl8wXzIwNV8xXzBfcnMtNTEyNDkucnQtMC53dC0w",
      //      cparam: "MTYzMjA0NTIyMl8xazA4dTJhX2Y4NzdmODg1ODIzZDY3Y2ExOWJhYzNjZWRlODZhMmIwXzE4XzBfNjAyNDUyMzg5XzQ4ODZfMF83Nl8wXzIwNV8xXzBfcnMtNTEyNDkucnQtMC53dC0w",
      //      iid: "1mvhvti",
      //      img: "https://s5.mogucdn.com/mlcdn/c45406/200815_2cca36hg994lgaggi6gd6l5j9j502_640x960.jpg_220x330.jpg",
      //      itemMarks: "1525",
      //      itemType: 7,
      //      link: "https://shop.mogu.com/detail/1mvhvti?acm=3.ms.1_1_1mvhvti.134.28077-68998.yHhMLsJrVqFgG.c_2_18_602452389_1554528341_76_0-src_0-pid_5-c1_51249_nil_nil_2_1554528341_81_0-dit_-sd_117-swt_134-imt_7-t_uR9YZsJrVjD4y-lc_18-fcid_51249-pit_2-qpdp_0&cparam=MTYzMjA0NTIyMl8xazA4dTJhX2Y4NzdmODg1ODIzZDY3Y2ExOWJhYzNjZWRlODZhMmIwXzE4XzBfNjAyNDUyMzg5XzQ4ODZfMF83Nl8wXzIwNV8xXzBfcnMtNTEyNDkucnQtMC53dC0w",
      //      originalPrice: 85,
      //      price: 59,
      //      sale: 40,
      //      title: "增高厚底小白鞋女鞋子春夏新款百搭板鞋透气运动休闲鞋女",
      //      type: 2,
      //     },{
      //       acm: "3.ms.1_1_1mzcxxo.134.28077-68998.yHhMLsJrVqFgG.c_2_18_604867837_0_77_0-src_1-pid_5-c1_51249_nil_nil_0_0_81_0-dit_-sd_117-swt_134-imt_7-t_uR9YZsJrVjD4y-lc_18-fcid_51249-pit_2-qpdp_0",
      //       cfav: 52,
      //       clientUrl: "https://shop.mogu.com/detail/1mzcxxo?acm=3.ms.1_1_1mzcxxo.134.28077-68998.yHhMLsJrVqFgG.c_2_18_604867837_0_77_0-src_1-pid_5-c1_51249_nil_nil_0_0_81_0-dit_-sd_117-swt_134-imt_7-t_uR9YZsJrVjD4y-lc_18-fcid_51249-pit_2-qpdp_0&cparam=MTYzMjA0NTIyMl8xazEycG02XzAyNzcwMWIwOTdmNzliNGEyY2U1MjVhYzU0ZjMwMzg2XzE4XzFfNjA0ODY3ODM3XzRhOGJfMF83N18wXzM2OF8xXzBfcnMtNTEyNDkucnQtMC53dC0w",
      //       cparam: "MTYzMjA0NTIyMl8xazEycG02XzAyNzcwMWIwOTdmNzliNGEyY2U1MjVhYzU0ZjMwMzg2XzE4XzFfNjA0ODY3ODM3XzRhOGJfMF83N18wXzM2OF8xXzBfcnMtNTEyNDkucnQtMC53dC0w",
      //       iid: "1mzcxxo",
      //       img: "https://s5.mogucdn.com/mlcdn/c45406/210402_2g8j14d3l2g36k3ld7dh273bifak1_640x960.jpg_220x330.jpg",
      //       itemMarks: "1525 1091 1019 1088",
      //       itemType: 7,
      //       link: "https://shop.mogu.com/detail/1mzcxxo?acm=3.ms.1_1_1mzcxxo.134.28077-68998.yHhMLsJrVqFgG.c_2_18_604867837_0_77_0-src_1-pid_5-c1_51249_nil_nil_0_0_81_0-dit_-sd_117-swt_134-imt_7-t_uR9YZsJrVjD4y-lc_18-fcid_51249-pit_2-qpdp_0&cparam=MTYzMjA0NTIyMl8xazEycG02XzAyNzcwMWIwOTdmNzliNGEyY2U1MjVhYzU0ZjMwMzg2XzE4XzFfNjA0ODY3ODM3XzRhOGJfMF83N18wXzM2OF8xXzBfcnMtNTEyNDkucnQtMC53dC0w",
      //       originalPrice: 128,
      //       price: 89,
      //       sale: 5,
      //       title: "彩虹果冻鞋老爹鞋女小白鞋女鞋子春夏季新款学生百搭厚底运动鞋",
      //       type: 2,
            
      //     },{
      //       acm: "3.ms.1_1_1mz0eea.134.28077-68998.yHhMLsJrVqFgG.c_2_18_607173120_0_79_0-src_0-pid_5-c1_51249_nil_nil_0_0_81_0-dit_-sd_117-swt_134-imt_7-t_uR9YZsJrVjD4y-lc_18-fcid_51249-pit_2-qpdp_0",
      //       cfav: 33,
      //       clientUrl: "https://shop.mogu.com/detail/1mz0eea?acm=3.ms.1_1_1mz0eea.134.28077-68998.yHhMLsJrVqFgG.c_2_18_607173120_0_79_0-src_0-pid_5-c1_51249_nil_nil_0_0_81_0-dit_-sd_117-swt_134-imt_7-t_uR9YZsJrVjD4y-lc_18-fcid_51249-pit_2-qpdp_0&cparam=MTYzMjA0NTIyMl8xank4aDdlX2M0NWE2Y2FjYzEyZWUxMzAxOTUxMzM3YmY0MTk2YTFhXzE4XzNfNjA3MTczMTIwXzRiODZfMF83OV8wXzIwNV8xXzBfcnMtNTEyNDkucnQtMC53dC0w",
      //       cparam: "MTYzMjA0NTIyMl8xank4aDdlX2M0NWE2Y2FjYzEyZWUxMzAxOTUxMzM3YmY0MTk2YTFhXzE4XzNfNjA3MTczMTIwXzRiODZfMF83OV8wXzIwNV8xXzBfcnMtNTEyNDkucnQtMC53dC0w",
      //       iid: "1mz0eea",
      //       img: "https://s5.mogucdn.com/mlcdn/c45406/210309_0b476bg6c0acf6204ig9ajc12c41c_640x960.jpg_220x330.jpg",
      //       itemMarks: "1525",
      //       itemType: 7,
      //       link: "https://shop.mogu.com/detail/1mz0eea?acm=3.ms.1_1_1mz0eea.134.28077-68998.yHhMLsJrVqFgG.c_2_18_607173120_0_79_0-src_0-pid_5-c1_51249_nil_nil_0_0_81_0-dit_-sd_117-swt_134-imt_7-t_uR9YZsJrVjD4y-lc_18-fcid_51249-pit_2-qpdp_0&cparam=MTYzMjA0NTIyMl8xank4aDdlX2M0NWE2Y2FjYzEyZWUxMzAxOTUxMzM3YmY0MTk2YTFhXzE4XzNfNjA3MTczMTIwXzRiODZfMF83OV8wXzIwNV8xXzBfcnMtNTEyNDkucnQtMC53dC0w",
      //       originalPrice: 70,
      //       price: 49,
      //       sale: 25,
      //       title: "增高厚底网红小白鞋女鞋子春夏新款百搭板鞋学生运动休闲鞋女",
      //       type: 2,

      //     },
      //     {acm: "3.ms.1_1_1mvhvti.134.28077-68998.yHhMLsJrVqFgG.c_2_18_602452389_1554528341_76_0-src_0-pid_5-c1_51249_nil_nil_2_1554528341_81_0-dit_-sd_117-swt_134-imt_7-t_uR9YZsJrVjD4y-lc_18-fcid_51249-pit_2-qpdp_0",
      //      cfav: 296,
      //      clientUrl: "https://shop.mogu.com/detail/1mvhvti?acm=3.ms.1_1_1mvhvti.134.28077-68998.yHhMLsJrVqFgG.c_2_18_602452389_1554528341_76_0-src_0-pid_5-c1_51249_nil_nil_2_1554528341_81_0-dit_-sd_117-swt_134-imt_7-t_uR9YZsJrVjD4y-lc_18-fcid_51249-pit_2-qpdp_0&cparam=MTYzMjA0NTIyMl8xazA4dTJhX2Y4NzdmODg1ODIzZDY3Y2ExOWJhYzNjZWRlODZhMmIwXzE4XzBfNjAyNDUyMzg5XzQ4ODZfMF83Nl8wXzIwNV8xXzBfcnMtNTEyNDkucnQtMC53dC0w",
      //      cparam: "MTYzMjA0NTIyMl8xazA4dTJhX2Y4NzdmODg1ODIzZDY3Y2ExOWJhYzNjZWRlODZhMmIwXzE4XzBfNjAyNDUyMzg5XzQ4ODZfMF83Nl8wXzIwNV8xXzBfcnMtNTEyNDkucnQtMC53dC0w",
      //      iid: "1mvhvti",
      //      img: "https://s5.mogucdn.com/mlcdn/c45406/200815_2cca36hg994lgaggi6gd6l5j9j502_640x960.jpg_220x330.jpg",
      //      itemMarks: "1525",
      //      itemType: 7,
      //      link: "https://shop.mogu.com/detail/1mvhvti?acm=3.ms.1_1_1mvhvti.134.28077-68998.yHhMLsJrVqFgG.c_2_18_602452389_1554528341_76_0-src_0-pid_5-c1_51249_nil_nil_2_1554528341_81_0-dit_-sd_117-swt_134-imt_7-t_uR9YZsJrVjD4y-lc_18-fcid_51249-pit_2-qpdp_0&cparam=MTYzMjA0NTIyMl8xazA4dTJhX2Y4NzdmODg1ODIzZDY3Y2ExOWJhYzNjZWRlODZhMmIwXzE4XzBfNjAyNDUyMzg5XzQ4ODZfMF83Nl8wXzIwNV8xXzBfcnMtNTEyNDkucnQtMC53dC0w",
      //      originalPrice: 85,
      //      price: 59,
      //      sale: 40,
      //      title: "增高厚底小白鞋女鞋子春夏新款百搭板鞋透气运动休闲鞋女",
      //      type: 2,
      //     },
      //     {
      //       acm: "3.ms.1_1_1mzcxxo.134.28077-68998.yHhMLsJrVqFgG.c_2_18_604867837_0_77_0-src_1-pid_5-c1_51249_nil_nil_0_0_81_0-dit_-sd_117-swt_134-imt_7-t_uR9YZsJrVjD4y-lc_18-fcid_51249-pit_2-qpdp_0",
      //       cfav: 52,
      //       clientUrl: "https://shop.mogu.com/detail/1mzcxxo?acm=3.ms.1_1_1mzcxxo.134.28077-68998.yHhMLsJrVqFgG.c_2_18_604867837_0_77_0-src_1-pid_5-c1_51249_nil_nil_0_0_81_0-dit_-sd_117-swt_134-imt_7-t_uR9YZsJrVjD4y-lc_18-fcid_51249-pit_2-qpdp_0&cparam=MTYzMjA0NTIyMl8xazEycG02XzAyNzcwMWIwOTdmNzliNGEyY2U1MjVhYzU0ZjMwMzg2XzE4XzFfNjA0ODY3ODM3XzRhOGJfMF83N18wXzM2OF8xXzBfcnMtNTEyNDkucnQtMC53dC0w",
      //       cparam: "MTYzMjA0NTIyMl8xazEycG02XzAyNzcwMWIwOTdmNzliNGEyY2U1MjVhYzU0ZjMwMzg2XzE4XzFfNjA0ODY3ODM3XzRhOGJfMF83N18wXzM2OF8xXzBfcnMtNTEyNDkucnQtMC53dC0w",
      //       iid: "1mzcxxo",
      //       img: "https://s5.mogucdn.com/mlcdn/c45406/210402_2g8j14d3l2g36k3ld7dh273bifak1_640x960.jpg_220x330.jpg",
      //       itemMarks: "1525 1091 1019 1088",
      //       itemType: 7,
      //       link: "https://shop.mogu.com/detail/1mzcxxo?acm=3.ms.1_1_1mzcxxo.134.28077-68998.yHhMLsJrVqFgG.c_2_18_604867837_0_77_0-src_1-pid_5-c1_51249_nil_nil_0_0_81_0-dit_-sd_117-swt_134-imt_7-t_uR9YZsJrVjD4y-lc_18-fcid_51249-pit_2-qpdp_0&cparam=MTYzMjA0NTIyMl8xazEycG02XzAyNzcwMWIwOTdmNzliNGEyY2U1MjVhYzU0ZjMwMzg2XzE4XzFfNjA0ODY3ODM3XzRhOGJfMF83N18wXzM2OF8xXzBfcnMtNTEyNDkucnQtMC53dC0w",
      //       originalPrice: 128,
      //       price: 89,
      //       sale: 5,
      //       title: "彩虹果冻鞋老爹鞋女小白鞋女鞋子春夏季新款学生百搭厚底运动鞋",
      //       type: 2,
            
      //     },
      //     {
      //       acm: "3.ms.1_1_1mz0eea.134.28077-68998.yHhMLsJrVqFgG.c_2_18_607173120_0_79_0-src_0-pid_5-c1_51249_nil_nil_0_0_81_0-dit_-sd_117-swt_134-imt_7-t_uR9YZsJrVjD4y-lc_18-fcid_51249-pit_2-qpdp_0",
      //       cfav: 33,
      //       clientUrl: "https://shop.mogu.com/detail/1mz0eea?acm=3.ms.1_1_1mz0eea.134.28077-68998.yHhMLsJrVqFgG.c_2_18_607173120_0_79_0-src_0-pid_5-c1_51249_nil_nil_0_0_81_0-dit_-sd_117-swt_134-imt_7-t_uR9YZsJrVjD4y-lc_18-fcid_51249-pit_2-qpdp_0&cparam=MTYzMjA0NTIyMl8xank4aDdlX2M0NWE2Y2FjYzEyZWUxMzAxOTUxMzM3YmY0MTk2YTFhXzE4XzNfNjA3MTczMTIwXzRiODZfMF83OV8wXzIwNV8xXzBfcnMtNTEyNDkucnQtMC53dC0w",
      //       cparam: "MTYzMjA0NTIyMl8xank4aDdlX2M0NWE2Y2FjYzEyZWUxMzAxOTUxMzM3YmY0MTk2YTFhXzE4XzNfNjA3MTczMTIwXzRiODZfMF83OV8wXzIwNV8xXzBfcnMtNTEyNDkucnQtMC53dC0w",
      //       iid: "1mz0eea",
      //       img: "https://s5.mogucdn.com/mlcdn/c45406/210309_0b476bg6c0acf6204ig9ajc12c41c_640x960.jpg_220x330.jpg",
      //       itemMarks: "1525",
      //       itemType: 7,
      //       link: "https://shop.mogu.com/detail/1mz0eea?acm=3.ms.1_1_1mz0eea.134.28077-68998.yHhMLsJrVqFgG.c_2_18_607173120_0_79_0-src_0-pid_5-c1_51249_nil_nil_0_0_81_0-dit_-sd_117-swt_134-imt_7-t_uR9YZsJrVjD4y-lc_18-fcid_51249-pit_2-qpdp_0&cparam=MTYzMjA0NTIyMl8xank4aDdlX2M0NWE2Y2FjYzEyZWUxMzAxOTUxMzM3YmY0MTk2YTFhXzE4XzNfNjA3MTczMTIwXzRiODZfMF83OV8wXzIwNV8xXzBfcnMtNTEyNDkucnQtMC53dC0w",
      //       originalPrice: 70,
      //       price: 49,
      //       sale: 25,
      //       title: "增高厚底网红小白鞋女鞋子春夏新款百搭板鞋学生运动休闲鞋女",
      //       type: 2,

      //     },
      //     {acm: "3.ms.1_1_1mvhvti.134.28077-68998.yHhMLsJrVqFgG.c_2_18_602452389_1554528341_76_0-src_0-pid_5-c1_51249_nil_nil_2_1554528341_81_0-dit_-sd_117-swt_134-imt_7-t_uR9YZsJrVjD4y-lc_18-fcid_51249-pit_2-qpdp_0",
      //      cfav: 296,
      //      clientUrl: "https://shop.mogu.com/detail/1mvhvti?acm=3.ms.1_1_1mvhvti.134.28077-68998.yHhMLsJrVqFgG.c_2_18_602452389_1554528341_76_0-src_0-pid_5-c1_51249_nil_nil_2_1554528341_81_0-dit_-sd_117-swt_134-imt_7-t_uR9YZsJrVjD4y-lc_18-fcid_51249-pit_2-qpdp_0&cparam=MTYzMjA0NTIyMl8xazA4dTJhX2Y4NzdmODg1ODIzZDY3Y2ExOWJhYzNjZWRlODZhMmIwXzE4XzBfNjAyNDUyMzg5XzQ4ODZfMF83Nl8wXzIwNV8xXzBfcnMtNTEyNDkucnQtMC53dC0w",
      //      cparam: "MTYzMjA0NTIyMl8xazA4dTJhX2Y4NzdmODg1ODIzZDY3Y2ExOWJhYzNjZWRlODZhMmIwXzE4XzBfNjAyNDUyMzg5XzQ4ODZfMF83Nl8wXzIwNV8xXzBfcnMtNTEyNDkucnQtMC53dC0w",
      //      iid: "1mvhvti",
      //      img: "https://s5.mogucdn.com/mlcdn/c45406/200815_2cca36hg994lgaggi6gd6l5j9j502_640x960.jpg_220x330.jpg",
      //      itemMarks: "1525",
      //      itemType: 7,
      //      link: "https://shop.mogu.com/detail/1mvhvti?acm=3.ms.1_1_1mvhvti.134.28077-68998.yHhMLsJrVqFgG.c_2_18_602452389_1554528341_76_0-src_0-pid_5-c1_51249_nil_nil_2_1554528341_81_0-dit_-sd_117-swt_134-imt_7-t_uR9YZsJrVjD4y-lc_18-fcid_51249-pit_2-qpdp_0&cparam=MTYzMjA0NTIyMl8xazA4dTJhX2Y4NzdmODg1ODIzZDY3Y2ExOWJhYzNjZWRlODZhMmIwXzE4XzBfNjAyNDUyMzg5XzQ4ODZfMF83Nl8wXzIwNV8xXzBfcnMtNTEyNDkucnQtMC53dC0w",
      //      originalPrice: 85,
      //      price: 59,
      //      sale: 40,
      //      title: "增高厚底小白鞋女鞋子春夏新款百搭板鞋透气运动休闲鞋女",
      //      type: 2,
      //     },{
      //       acm: "3.ms.1_1_1mzcxxo.134.28077-68998.yHhMLsJrVqFgG.c_2_18_604867837_0_77_0-src_1-pid_5-c1_51249_nil_nil_0_0_81_0-dit_-sd_117-swt_134-imt_7-t_uR9YZsJrVjD4y-lc_18-fcid_51249-pit_2-qpdp_0",
      //       cfav: 52,
      //       clientUrl: "https://shop.mogu.com/detail/1mzcxxo?acm=3.ms.1_1_1mzcxxo.134.28077-68998.yHhMLsJrVqFgG.c_2_18_604867837_0_77_0-src_1-pid_5-c1_51249_nil_nil_0_0_81_0-dit_-sd_117-swt_134-imt_7-t_uR9YZsJrVjD4y-lc_18-fcid_51249-pit_2-qpdp_0&cparam=MTYzMjA0NTIyMl8xazEycG02XzAyNzcwMWIwOTdmNzliNGEyY2U1MjVhYzU0ZjMwMzg2XzE4XzFfNjA0ODY3ODM3XzRhOGJfMF83N18wXzM2OF8xXzBfcnMtNTEyNDkucnQtMC53dC0w",
      //       cparam: "MTYzMjA0NTIyMl8xazEycG02XzAyNzcwMWIwOTdmNzliNGEyY2U1MjVhYzU0ZjMwMzg2XzE4XzFfNjA0ODY3ODM3XzRhOGJfMF83N18wXzM2OF8xXzBfcnMtNTEyNDkucnQtMC53dC0w",
      //       iid: "1mzcxxo",
      //       img: "https://s5.mogucdn.com/mlcdn/c45406/210402_2g8j14d3l2g36k3ld7dh273bifak1_640x960.jpg_220x330.jpg",
      //       itemMarks: "1525 1091 1019 1088",
      //       itemType: 7,
      //       link: "https://shop.mogu.com/detail/1mzcxxo?acm=3.ms.1_1_1mzcxxo.134.28077-68998.yHhMLsJrVqFgG.c_2_18_604867837_0_77_0-src_1-pid_5-c1_51249_nil_nil_0_0_81_0-dit_-sd_117-swt_134-imt_7-t_uR9YZsJrVjD4y-lc_18-fcid_51249-pit_2-qpdp_0&cparam=MTYzMjA0NTIyMl8xazEycG02XzAyNzcwMWIwOTdmNzliNGEyY2U1MjVhYzU0ZjMwMzg2XzE4XzFfNjA0ODY3ODM3XzRhOGJfMF83N18wXzM2OF8xXzBfcnMtNTEyNDkucnQtMC53dC0w",
      //       originalPrice: 128,
      //       price: 89,
      //       sale: 5,
      //       title: "彩虹果冻鞋老爹鞋女小白鞋女鞋子春夏季新款学生百搭厚底运动鞋",
      //       type: 2,
            
      //     },{
      //       acm: "3.ms.1_1_1mz0eea.134.28077-68998.yHhMLsJrVqFgG.c_2_18_607173120_0_79_0-src_0-pid_5-c1_51249_nil_nil_0_0_81_0-dit_-sd_117-swt_134-imt_7-t_uR9YZsJrVjD4y-lc_18-fcid_51249-pit_2-qpdp_0",
      //       cfav: 33,
      //       clientUrl: "https://shop.mogu.com/detail/1mz0eea?acm=3.ms.1_1_1mz0eea.134.28077-68998.yHhMLsJrVqFgG.c_2_18_607173120_0_79_0-src_0-pid_5-c1_51249_nil_nil_0_0_81_0-dit_-sd_117-swt_134-imt_7-t_uR9YZsJrVjD4y-lc_18-fcid_51249-pit_2-qpdp_0&cparam=MTYzMjA0NTIyMl8xank4aDdlX2M0NWE2Y2FjYzEyZWUxMzAxOTUxMzM3YmY0MTk2YTFhXzE4XzNfNjA3MTczMTIwXzRiODZfMF83OV8wXzIwNV8xXzBfcnMtNTEyNDkucnQtMC53dC0w",
      //       cparam: "MTYzMjA0NTIyMl8xank4aDdlX2M0NWE2Y2FjYzEyZWUxMzAxOTUxMzM3YmY0MTk2YTFhXzE4XzNfNjA3MTczMTIwXzRiODZfMF83OV8wXzIwNV8xXzBfcnMtNTEyNDkucnQtMC53dC0w",
      //       iid: "1mz0eea",
      //       img: "https://s5.mogucdn.com/mlcdn/c45406/210309_0b476bg6c0acf6204ig9ajc12c41c_640x960.jpg_220x330.jpg",
      //       itemMarks: "1525",
      //       itemType: 7,
      //       link: "https://shop.mogu.com/detail/1mz0eea?acm=3.ms.1_1_1mz0eea.134.28077-68998.yHhMLsJrVqFgG.c_2_18_607173120_0_79_0-src_0-pid_5-c1_51249_nil_nil_0_0_81_0-dit_-sd_117-swt_134-imt_7-t_uR9YZsJrVjD4y-lc_18-fcid_51249-pit_2-qpdp_0&cparam=MTYzMjA0NTIyMl8xank4aDdlX2M0NWE2Y2FjYzEyZWUxMzAxOTUxMzM3YmY0MTk2YTFhXzE4XzNfNjA3MTczMTIwXzRiODZfMF83OV8wXzIwNV8xXzBfcnMtNTEyNDkucnQtMC53dC0w",
      //       originalPrice: 70,
      //       price: 49,
      //       sale: 25,
      //       title: "增高厚底网红小白鞋女鞋子春夏新款百搭板鞋学生运动休闲鞋女",
      //       type: 2,

      //     }
      //   ]},
      //   'new':{page:0,list:[
      //     {
      //       acm: "3.ms.1_1_1n1r43q.134.28077-68998.aesxssJrXu5dE.c_2_18_608547029_0_1_0-src_0-pid_180-c1_50003_nil_nil_0_0_30_0-dit_-sd_117-swt_134-imt_7-t_aesxssJrXu5dE-lc_18-fcid_50003-pit_2-qpdp_0",
      //       cfav: 8,
      //       clientUrl: "https://shop.mogu.com/detail/1n1r43q?acm=3.ms.1_1_1n1r43q.134.28077-68998.aesxssJrXu5dE.c_2_18_608547029_0_1_0-src_0-pid_180-c1_50003_nil_nil_0_0_30_0-dit_-sd_117-swt_134-imt_7-t_aesxssJrXu5dE-lc_18-fcid_50003-pit_2-qpdp_0&cparam=MTYzMjA0NTcxMV8xazQ4d2Q0X2IwOTU4ZTdkNTlmMzkzYTEwMTI3NmRhZDE2NjFjODBhXzE4XzBfNjA4NTQ3MDI5XzRlOGZfMF8xXzBfMzAyXzFfMF9ycy01MDAwMy5ydC0wLnd0LTA=",
      //       cparam: "MTYzMjA0NTcxMV8xazQ4d2Q0X2IwOTU4ZTdkNTlmMzkzYTEwMTI3NmRhZDE2NjFjODBhXzE4XzBfNjA4NTQ3MDI5XzRlOGZfMF8xXzBfMzAyXzFfMF9ycy01MDAwMy5ydC0wLnd0LTA=",
      //       iid: "1n1r43q",
      //       img: "https://s5.mogucdn.com/mlcdn/55cf19/210905_3030jbhbcb3hbc0gd9a3gb30i4cfa_640x960.jpg_220x330.jpg",
      //       itemMarks: "1854",
      //       itemType: 7,
      //       link: "https://shop.mogu.com/detail/1n1r43q?acm=3.ms.1_1_1n1r43q.134.28077-68998.aesxssJrXu5dE.c_2_18_608547029_0_1_0-src_0-pid_180-c1_50003_nil_nil_0_0_30_0-dit_-sd_117-swt_134-imt_7-t_aesxssJrXu5dE-lc_18-fcid_50003-pit_2-qpdp_0&cparam=MTYzMjA0NTcxMV8xazQ4d2Q0X2IwOTU4ZTdkNTlmMzkzYTEwMTI3NmRhZDE2NjFjODBhXzE4XzBfNjA4NTQ3MDI5XzRlOGZfMF8xXzBfMzAyXzFfMF9ycy01MDAwMy5ydC0wLnd0LTA=",
      //       originalPrice: 82.9,
      //       price: 58,
      //       sale: 5,
      //       title: "薄款小西装女士短外套21年春秋新款网红爆款百搭修身七分袖西服",
      //       type: 2,

      //     },
      //     {
      //       acm: "3.ms.1_1_1n1ggzo.134.28077-68998.aesxssJrXu5dE.c_2_18_608228560_0_2_0-src_0-pid_180-c1_50003_nil_nil_0_0_31_0-dit_-sd_117-swt_134-imt_7-t_aesxssJrXu5dE-lc_18-fcid_50003-pit_2-qpdp_0",
      //       cfav: 89,
      //       clientUrl: "https://shop.mogu.com/detail/1n1ggzo?acm=3.ms.1_1_1n1ggzo.134.28077-68998.aesxssJrXu5dE.c_2_18_608228560_0_2_0-src_0-pid_180-c1_50003_nil_nil_0_0_31_0-dit_-sd_117-swt_134-imt_7-t_aesxssJrXu5dE-lc_18-fcid_50003-pit_2-qpdp_0&cparam=MTYzMjA0NTcxMV8xazQ4d2NjX2YzNTYxNDBiODM1MDg1MzYxZmU0YTlmMjE1ZjkwNjk0XzE4XzFfNjA4MjI4NTYwXzRmODZfMF8yXzBfNDgwXzFfMF9ycy01MDAwMy5ydC0wLnd0LTA=",
      //       cparam: "MTYzMjA0NTcxMV8xazQ4d2NjX2YzNTYxNDBiODM1MDg1MzYxZmU0YTlmMjE1ZjkwNjk0XzE4XzFfNjA4MjI4NTYwXzRmODZfMF8yXzBfNDgwXzFfMF9ycy01MDAwMy5ydC0wLnd0LTA=",
      //       iid: "1n1ggzo",
      //       img: "https://s5.mogucdn.com/mlcdn/55cf19/210814_5760g57chggejficg14j8hd5iajic_640x960.jpg_220x330.jpg",
      //       itemMarks: "1854",
      //       itemType: 7,
      //       link: "https://shop.mogu.com/detail/1n1ggzo?acm=3.ms.1_1_1n1ggzo.134.28077-68998.aesxssJrXu5dE.c_2_18_608228560_0_2_0-src_0-pid_180-c1_50003_nil_nil_0_0_31_0-dit_-sd_117-swt_134-imt_7-t_aesxssJrXu5dE-lc_18-fcid_50003-pit_2-qpdp_0&cparam=MTYzMjA0NTcxMV8xazQ4d2NjX2YzNTYxNDBiODM1MDg1MzYxZmU0YTlmMjE1ZjkwNjk0XzE4XzFfNjA4MjI4NTYwXzRmODZfMF8yXzBfNDgwXzFfMF9ycy01MDAwMy5ydC0wLnd0LTA=",
      //       originalPrice: 70,
      //       price: 49,
      //       sale: 21,
      //       title: "2021年早秋新款唐老鸭印花牛仔拼接卫衣女长袖薄款春秋上衣潮",
      //       type: 2,

      //     },
      //     {
      //       acm: "3.ms.1_1_1n1gh9o.134.28077-68998.aesxssJrXu5dE.c_2_18_608228546_0_3_0-src_0-pid_180-c1_50003_nil_nil_0_0_30_0-dit_-sd_117-swt_134-imt_7-t_aesxssJrXu5dE-lc_18-fcid_50003-pit_2-qpdp_0",
      //       cfav: 32,
      //       clientUrl: "https://shop.mogu.com/detail/1n1gh9o?acm=3.ms.1_1_1n1gh9o.134.28077-68998.aesxssJrXu5dE.c_2_18_608228546_0_3_0-src_0-pid_180-c1_50003_nil_nil_0_0_30_0-dit_-sd_117-swt_134-imt_7-t_aesxssJrXu5dE-lc_18-fcid_50003-pit_2-qpdp_0&cparam=MTYzMjA0NTcxMV8xazJtNmNzX2M5ZTNiMDcwMjU2ZGUyN2U1YzUyYjFmNjlkOTZkMzZlXzE4XzJfNjA4MjI4NTQ2XzRmODhfMF8zXzBfNDgwXzFfMF9ycy01MDAwMy5ydC0wLnd0LTA=",
      //       cparam: "MTYzMjA0NTcxMV8xazJtNmNzX2M5ZTNiMDcwMjU2ZGUyN2U1YzUyYjFmNjlkOTZkMzZlXzE4XzJfNjA4MjI4NTQ2XzRmODhfMF8zXzBfNDgwXzFfMF9ycy01MDAwMy5ydC0wLnd0LTA=",
      //       iid: "1n1gh9o",
      //       img: "https://s5.mogucdn.com/mlcdn/55cf19/210814_826cfefdd0h09gb41hgal07lh586g_640x960.jpg_220x330.jpg",
      //       itemMarks: "1854",
      //       itemType: 7,
      //       link: "https://shop.mogu.com/detail/1n1gh9o?acm=3.ms.1_1_1n1gh9o.134.28077-68998.aesxssJrXu5dE.c_2_18_608228546_0_3_0-src_0-pid_180-c1_50003_nil_nil_0_0_30_0-dit_-sd_117-swt_134-imt_7-t_aesxssJrXu5dE-lc_18-fcid_50003-pit_2-qpdp_0&cparam=MTYzMjA0NTcxMV8xazJtNmNzX2M5ZTNiMDcwMjU2ZGUyN2U1YzUyYjFmNjlkOTZkMzZlXzE4XzJfNjA4MjI4NTQ2XzRmODhfMF8zXzBfNDgwXzFfMF9ycy01MDAwMy5ydC0wLnd0LTA=",
      //       originalPrice: 98.58,
      //       price: 69,
      //       sale: 2,
      //       title: "拼接牛仔假两件长袖衬衫女2021早秋新款宽松韩版t恤上衣潮",
      //       type: 2,
            
      //     }
      //   ]},
      //   'sell':{page:0,list:[
      //     {
      //       acm: "3.ms.1_1_1n1ufsm.134.28077-68998.yHhMKsJrYi8yX.c_2_18_608655434_0_1_0-src_0-pid_3-c1_50675_nil_nil_0_0_30_0-dit_-sd_117-swt_134-imt_7-t_yHhMKsJrYi8yX-lc_18-fcid_50675-pit_2-qpdp_0",
      //       cfav: 1,
      //       clientUrl: "https://shop.mogu.com/detail/1n1ufsm?acm=3.ms.1_1_1n1ufsm.134.28077-68998.yHhMKsJrYi8yX.c_2_18_608655434_0_1_0-src_0-pid_3-c1_50675_nil_nil_0_0_30_0-dit_-sd_117-swt_134-imt_7-t_yHhMKsJrYi8yX-lc_18-fcid_50675-pit_2-qpdp_0&cparam=MTYzMjA0NTkwNF8xazNzZHpnXzA0ODRmNjc4NzZhNDQ0NDEwOGQxNzQwYzAzNjc2NmY1XzE4XzBfNjA4NjU1NDM0XzRmOGJfMF8xXzBfODQ4XzFfMF9ycy01MDY3NS5ydC0wLnd0LTA=",
      //       cparam: "MTYzMjA0NTkwNF8xazNzZHpnXzA0ODRmNjc4NzZhNDQ0NDEwOGQxNzQwYzAzNjc2NmY1XzE4XzBfNjA4NjU1NDM0XzRmOGJfMF8xXzBfODQ4XzFfMF9ycy01MDY3NS5ydC0wLnd0LTA=",
      //       iid: "1n1ufsm",
      //       img: "https://s5.mogucdn.com/mlcdn/55cf19/210913_8g627k2gckl990a68ad5aik012aik_640x960.jpg_220x330.jpg",
      //       itemMarks: "1854",
      //       itemType: 7,
      //       link: "https://shop.mogu.com/detail/1n1ufsm?acm=3.ms.1_1_1n1ufsm.134.28077-68998.yHhMKsJrYi8yX.c_2_18_608655434_0_1_0-src_0-pid_3-c1_50675_nil_nil_0_0_30_0-dit_-sd_117-swt_134-imt_7-t_yHhMKsJrYi8yX-lc_18-fcid_50675-pit_2-qpdp_0&cparam=MTYzMjA0NTkwNF8xazNzZHpnXzA0ODRmNjc4NzZhNDQ0NDEwOGQxNzQwYzAzNjc2NmY1XzE4XzBfNjA4NjU1NDM0XzRmOGJfMF8xXzBfODQ4XzFfMF9ycy01MDY3NS5ydC0wLnd0LTA=",
      //       originalPrice: 59,
      //       price: 59,
      //       sale: 0,
      //       title: "蔻顿包包女2020新款手机小包迷你斜挎包韩版双肩包学生斜挎包",
      //       type: 2,
            
      //     },{
      //       acm: "3.ms.1_1_1n18eye.134.28077-68998.yHhMKsJrYi8yX.c_2_18_607843402_0_2_0-src_0-pid_3-c1_50675_nil_nil_0_0_32_0-dit_-sd_117-swt_134-imt_7-t_yHhMKsJrYi8yX-lc_18-fcid_50675-pit_2-qpdp_0",
      //       cfav: 17,
      //       clientUrl: "https://shop.mogu.com/detail/1n18eye?acm=3.ms.1_1_1n18eye.134.28077-68998.yHhMKsJrYi8yX.c_2_18_607843402_0_2_0-src_0-pid_3-c1_50675_nil_nil_0_0_32_0-dit_-sd_117-swt_134-imt_7-t_yHhMKsJrYi8yX-lc_18-fcid_50675-pit_2-qpdp_0&cparam=MTYzMjA0NTkwNF8xazNvdWptX2NlYmE3N2E4ZjgwOWRiYjNlZjRiMzU3YTU5NzUxZmM4XzE4XzFfNjA3ODQzNDAyXzRmODlfMF8yXzBfNDQyXzFfMF9ycy01MDY3NS5ydC0wLnd0LTA=",
      //       cparam: "MTYzMjA0NTkwNF8xazNvdWptX2NlYmE3N2E4ZjgwOWRiYjNlZjRiMzU3YTU5NzUxZmM4XzE4XzFfNjA3ODQzNDAyXzRmODlfMF8yXzBfNDQyXzFfMF9ycy01MDY3NS5ydC0wLnd0LTA=",
      //       iid: "1n18eye",
      //       img: "https://s5.mogucdn.com/mlcdn/55cf19/210729_5b2c8859569l4k86e99cjgk4k96kc_640x960.jpg_220x330.jpg",
      //       itemMarks: "-1",
      //       itemType: 7,
      //       link: "https://shop.mogu.com/detail/1n18eye?acm=3.ms.1_1_1n18eye.134.28077-68998.yHhMKsJrYi8yX.c_2_18_607843402_0_2_0-src_0-pid_3-c1_50675_nil_nil_0_0_32_0-dit_-sd_117-swt_134-imt_7-t_yHhMKsJrYi8yX-lc_18-fcid_50675-pit_2-qpdp_0&cparam=MTYzMjA0NTkwNF8xazNvdWptX2NlYmE3N2E4ZjgwOWRiYjNlZjRiMzU3YTU5NzUxZmM4XzE4XzFfNjA3ODQzNDAyXzRmODlfMF8yXzBfNDQyXzFfMF9ycy01MDY3NS5ydC0wLnd0LTA=",
      //       originalPrice: 84,
      //       price: 58.8,
      //       sale: 7,
      //       title: "今年流行的包包女包21新款时尚百搭潮韩版水桶包女士单肩斜挎包",
      //       type: 2,

      //     },{
      //       acm: "3.ms.1_1_1n172fu.134.28077-68998.yHhMKsJrYi8yX.c_2_18_607760821_0_3_0-src_0-pid_3-c1_50675_nil_nil_0_0_30_0-dit_-sd_117-swt_134-imt_7-t_yHhMKsJrYi8yX-lc_18-fcid_50675-pit_2-qpdp_0",
      //       cfav: 36,
      //       clientUrl: "https://shop.mogu.com/detail/1n172fu?acm=3.ms.1_1_1n172fu.134.28077-68998.yHhMKsJrYi8yX.c_2_18_607760821_0_3_0-src_0-pid_3-c1_50675_nil_nil_0_0_30_0-dit_-sd_117-swt_134-imt_7-t_yHhMKsJrYi8yX-lc_18-fcid_50675-pit_2-qpdp_0&cparam=MTYzMjA0NTkwNF8xazQ5Mzh3X2Q1NzEzM2MxNTFlMzU4MjQyZmM5M2FjZTc3ZTE2NDlmXzE4XzJfNjA3NzYwODIxXzRmODdfMF8zXzBfMzMzXzFfMF9ycy01MDY3NS5ydC0wLnd0LTA=",
      //       cparam: "MTYzMjA0NTkwNF8xazQ5Mzh3X2Q1NzEzM2MxNTFlMzU4MjQyZmM5M2FjZTc3ZTE2NDlmXzE4XzJfNjA3NzYwODIxXzRmODdfMF8zXzBfMzMzXzFfMF9ycy01MDY3NS5ydC0wLnd0LTA=",
      //       iid: "1n172fu",
      //       img: "https://s5.mogucdn.com/mlcdn/55cf19/210726_5g6fjfa1g4j9h7g6heg7e2fh5i22j_640x960.jpg_220x330.jpg",
      //       itemMarks: "1270",
      //       itemType: 7,
      //       link: "https://shop.mogu.com/detail/1n172fu?acm=3.ms.1_1_1n172fu.134.28077-68998.yHhMKsJrYi8yX.c_2_18_607760821_0_3_0-src_0-pid_3-c1_50675_nil_nil_0_0_30_0-dit_-sd_117-swt_134-imt_7-t_yHhMKsJrYi8yX-lc_18-fcid_50675-pit_2-qpdp_0&cparam=MTYzMjA0NTkwNF8xazQ5Mzh3X2Q1NzEzM2MxNTFlMzU4MjQyZmM5M2FjZTc3ZTE2NDlmXzE4XzJfNjA3NzYwODIxXzRmODdfMF8zXzBfMzMzXzFfMF9ycy01MDY3NS5ydC0wLnd0LTA=",
      //       originalPrice: 70,
      //       price: 49,
      //       sale: 13,
      //       title: "包包女新款百搭斜挎包亮片时尚单肩包韩版女士挎包手机包零钱包潮",
      //       type: 2,

      //     }
      //   ]},

      // }
    }
  },
  created(){
    this.getHomedata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
    // this.getHomeGoods()
    // this.$bus.$on('itemImageLoad',()=>{
    //   console.log('...');
    // })
    
  },
  methods:{
    getHomedata(){
      getHomedata().then(res=>{
      console.log(res);
      this.banners=res.data.data.banner.list
      this.recommends=res.data.data.recommend.list
      // this.keywords=res.data.data.keywords.list

    })
    },
    getHomeGoods(type){
      const page=this.goods[type].page+1
      getHomeGoods(type,page).then(res=>{
        console.log(res);
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].pag+=1
          // this.$refs.scroll.finishPullUp()
    })
    },
    // getHomeGoods(){
    //   getHomeGoods().then(res=>{
    //     console.log(res)
    //   })
    // }
    target(index){
      switch (index){
      case 0:
        this.current='pop'
        break
      case 1:
        this.current='new'
        break
      case 2:
        this.current='sell'
        break
      }

    },
    backClick(){
      this.$refs.scroll.scroll.scrollTo(0,0,500)

    },
    contentscroll(position){
      this.isshow=-position.y>100
    }
    // loadmore(){
    //   this.getHomeGoods(this.currentType)
    //   this.$refs.scroll.scroll.refresh()
    // }
  }
}
</script>

<style>
.home{
  margin-top:44px;

  /* height:; */
  /* position:relative; */
}
.home-nav{
  background-color: red;
  color:#fff;
  position:fixed;
  top:0;
  left:0;
  right:0;
  z-index:9
}
.home-swiper{
  width:100%
}
.tab-control{
  position:sticky;
  top:44px;
}
.recommends{
  width:100%
}
.scroll{
  /* height:calc(100% - 500px); */
  overflow:hidden;
  position:absolute;
  top:44px;
  bottom:49px;
  right:0;
  left:0;
}
</style>

