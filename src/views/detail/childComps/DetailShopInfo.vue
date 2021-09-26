<template>
  <div class="detail-shop-info">
      <div class="shop-top">
          <img :src="shop.logo" alt="" class="shop-logo">
          <span class="shop-title">{{shop.name}}</span>

      </div>
      <div class="shop-middle">
          <div class="shop-middle-item shop-middle-left">
              <div class="info-sells">
                  <div class="sell-count">
                      {{shop.sells}}
                  </div>
                  <div class="sells-text">总销量</div>
              </div>
              <div class="info-goods">
                  <div class="goods-count">
                      {{shop.goodsCount}}
                  </div>
                  <div class="goods-text">全部宝贝</div>
              </div>
          </div>


           <div class="shop-middle-item shop-middle-right">
              <table>
                  <tr v-for="(item,index) in shop.score" :key="index">
                      <td>{{item.name}}</td>
                      <td class="score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
                      <td class="better" :class="{'better-more':item.isBetter}">
                          <span>
                              {{item.isBetter?'高':'低'}}
                          </span>
                      </td>
                  </tr>
              </table>
          </div>
      </div>
      <div class="shop-bottom">
          <div class="enter-shop">
              进店逛逛
          </div>
      </div>
   
  </div>

</template>

<script>


export default {
  name: 'DetailShopInfo',
  components: {
  
  },
  props:{
      shop:{
          type:Object
      }
  }
}
</script>

<style>
.shop-top{
    height:70px;

    padding: 10px;
    font-size:13px;
    color:#000;
}
.shop-top .shop-logo{
    width:50px;
    height: 50px;

    vertical-align: middle;
    
}
.shop-middle{
    height:80px;
    /* background-color: red; */

}
.shop-middle-left{
    float: left;
    width:50%;
    height:40px;
    /* background-color: purple; */
    padding: 0 8px;
    margin:17px 0;
    font-size: 14px;
    border-right:1px solid #ccc;

}
.info-sells{
    float: left;
    width:50%;
    text-align: center;
    
}
.info-goods{
    float: right;
    width:50%;
    text-align: center;



}
.shop-middle-right{
    float: right;
    width:50%;
    height:80px;
    /* background-color: blue; */
    font-size:12px;


}
.shop-middle-right table{
    padding:10px;
    
}
.enter-shop{
    width:100px;
    height:20px;
    background-color: #ccc;
    text-align: center;
    margin:0 auto;
}
</style>
