<template>
<div class="goods">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'GoodsList',
  components:{
  
  }
//   props:{
//       goods:{
//           type:Array,
//           default(){
//               return []
//           }
//       }
//   }
}
</script>
<style>
.goods{
    width:100%;
}
.goods-item:last-child {
  margin-bottom: 50px;
}
</style>