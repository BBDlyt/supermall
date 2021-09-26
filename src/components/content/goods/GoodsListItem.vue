<template>
<div class="goods-item" @click="itemClick">
    <img :src="showImage" @load="imageLoad">
    <div>
        <p>{{pop.title}}</p>
        <span class="price">￥{{pop.price}}</span>
        <span class="cfav">{{pop.cfav}}</span>
    </div>
</div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  components:{
  
  },
  props:{
      pop:{
          type:Object,
          default(){
              return {}
          }
      }
  },
  computed:{
      showImage(){
          return this.pop.image||this.pop.show.img
      }
  },
  methods:{
      imageLoad(){
          
        //   this.$bus.$emit('itemImageLoad')
      },
      itemClick(){
          this.$router.push('/detail/'+this.pop.iid)
      }
  }
}
</script>
<style>
.goods-item{
    width:50%;
    float:left;
    padding-left:5px;
    font-size:10px;
    line-height:12px;
}
.goods-item img{
    width:100%

}


.goods-item .price{
    color:red;
    
    padding-right:10px;
}
.goods-item .cfav{
    position:relative;
    width:50px;
    height:10px;
    line-height:10px;

    padding-left:15px;
    background:url("../../../assets/img/common/collect.svg") no-repeat 0/14px 14px
}
</style>