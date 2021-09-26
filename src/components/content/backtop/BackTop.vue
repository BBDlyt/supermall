<template>
  <div class="back-top" >
      <img src="../../../assets/img/common/top.png">
      
  </div>
</template>

<script>
export default {
  name: 'BackTop',
  components:{
  
  },
  methods:{
    backClick(){
    }

  }
}
</script>

<style>
.back-top{
    position:fixed;
    right:10px;
    bottom:60px;
    z-index:10;
}
.back-top img{
    width:43px;
}

</style>
