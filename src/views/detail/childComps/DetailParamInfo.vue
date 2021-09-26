<template>
  <div class="detail-param-info" v-if="Object.keys(paramInfo).length!==0">
     <table v-for="(table,index) in paramInfo.sizes" class="detail-info-size" :key="index">
         <tr v-for="(tr,indey) in table" :key="indey">
             <td v-for="(td,indexz) in tr" :key="indexz">{{td}}</td>
         </tr>
     </table>
     <table class="info-param">
         <tr v-for="(info,index) in paramInfo.infos" :key="index">
             <td class="info-param-key">{{info.key}}</td>
             <td class="param-value">{{info.value}}</td>

         </tr>
     </table>
     <div class="info-img" v-if="paramInfo.image.length!==0">
         <img :src="paramInfo.image" alt="">
     </div>
   
  </div>

</template>

<script>


export default {
  name: 'DetailParamInfo',
  components: {
  
  },
  props:{
      paramInfo:{
          type:Object
      }
  }
}
</script>

<style>
.detail-param-info{
    font-size:12px;
}
.detail-param-info table td{
    padding: 5px 10px;
}
.param-value{
    color:red;
}
.detail-info-size tr td{
    padding-right:33px;
}

</style>
