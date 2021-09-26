<template>
<div class="tab-control">
    <div v-for="(item,index) in titles" :key="index" class="tab-control-item" @click="change(index)">
        <span :class="index==currentindex?'active':''">{{item}}</span>
    </div>
</div>
</template>

<script>
export default {
  name: 'TabControl',
  components:{
  
  },
  data(){
      return{
          currentindex:0
      }
  },
  props:{
      titles:{
          type:Array,
          default(){
            return []
          }
      }
  },
  methods:{
      change(index){
          this.currentindex=index
          this.$emit('target',index)//监听自定义事件。默认会把参数传递到父组件中
      }
  }
}
</script>
<style>
.tab-control{
    display:flex;
    text-align:center;
    background-color:rgba(255,255,255,1)
    
}
.tab-control-item{
    flex:1;
    height:40px;
    line-height:40px;
}
.tab-control-item span{
    padding:5px 15px;
}
.active{
    border-bottom:2px solid red
}
</style>