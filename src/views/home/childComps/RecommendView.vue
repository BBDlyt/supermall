<template>
<div class="recommend">
    <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
        <a :href="item.link">
            <img :src="item.image" alt="">
            <div>{{item.title}}</div>
        </a>
    </div>
</div>
</template>
<script>


export default {
  props:{
      recommends:{
          type:Array,
          default(){
              return []
          }
      }
  },
  name: 'RecommendView',
  components:{
  
  }
}
</script>
<style>
.recommend{
    display:flex;
    text-align: center;
    font-size:12px;
    padding:8px 0 15px;
    border-bottom: 8px solid #eee;
}
.recommend-item{
    flex:1
}
.recommend-item img{
    width:80%
}
</style>