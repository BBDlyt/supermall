<template>
  <div class="detail-goods-info" v-if="Object.keys(detailInfo).length!==0">
      <div class="info-desc clear-fix">
          <div class="start">

          </div>
          <div class="desc">{{detailInfo.desc}}</div>
          <div class="end"></div>

      </div>
      <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
      <div class="info-list">
          <img v-for="(item,index) in detailInfo.detailImage[0].list" :key="index" :src="item">
      </div>
  </div>

</template>

<script>


export default {
  name: 'DetailGoodsInfo',
  components: {
  
  },
  props:{

   detailInfo:{
       type:Object
    }
  }
}
</script>

<style>
.detail-goods-info{
    font-size: 13px;
}
.detail-goods-info .info-list img{
    width:100%
}
</style>
