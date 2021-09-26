<template>
  <div class="detail-base-info">
      <div class="info-title">{{goods.title}}</div>
      <div class="info-price">
          <span class="n-price">{{goods.newPrice}}</span>
          <span class="o-price">{{goods.oldPrice}}</span>
          <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
      </div>
      <div class="info-other">
          <span class="first">{{goods.columns[0]}}</span>
          <span class="second">{{goods.columns[1]}}</span>
          <span class="third">{{goods.services[0].name}}</span>

      </div>
      <div class="info-service">
          <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
          <img :src="goods.services[index].icon" alt="">
          <span>{{goods.services[index].name}}</span>
          </span>
      </div> 
  </div>

</template>

<script>


export default {
  name: 'DetailBaseInfo',
  components: {
  
  },
  props:{
      goods:{
          type:Object
      }
  }
}
</script>

<style>

.info-title{
    height:40px;
    font-size: 13px;
    font-weight:600;
    color:#000;

}
.info-price{
    margin-top:10px;
    height:30px;
    /* background-color: purple; */

}
.n-price{
    display: block;
    color:red;
    font-size: 16px;
    font-weight:600;
    margin-right:10px;
    float:left;

}
.o-price{
    display: block;
    float:left;

    font-size: 12px;
    text-decoration: line-through;
}
.discount{
    font-size:12px;
    display: block;
    float:left;
    width:40px;
    height:20px;
    border-radius: 10px;
    background-color: red;
    line-height:20px;
    text-align: center;
}
.info-other{
    display: flex;
    text-align: center;
    font-size:13px;
    padding:10px;
    border-bottom: 2px solid #ccc;
}
.first,.second,.third{
    /* display: block; */
    flex:1;
}
.info-service{
    display: flex;
    font-size: 10px;
    padding: 15px 0;
    border-bottom: 4px solid #ccc;

}
.info-service-item{
    text-align: center;
    flex:1;
}
.info-service img{
    width:10px;
    height:10px;
}
</style>
