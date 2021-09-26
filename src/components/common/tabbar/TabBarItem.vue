<template>
    <div class="tab-bar-item" @click="itemclick">
        <div v-if="!isactive">
        <slot name="item-icon"></slot>
        </div>
        <div v-else>
        <slot name="item-icon-active" ></slot>
        </div>
       <div :style="activeStyle">
            <slot name="item-text"></slot>
       </div>

    </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props:{
      path:String,
      activeColor:{
          type:String,
          default:'red'
      }
  },
  data(){
      return{
        //   isactive:false,
        //   textactive:true
      }
  },
  computed:{
      isactive(){
          return this.$route.path==this.path

      },
      activeStyle(){
          return this.isactive?{color:this.activeColor}:{}
      }
  },
  methods:{
      itemclick(){
        //   console.log(this.path)
          this.$router.replace(this.path).catch(err=>{})
      }
  }
}
</script>

<style>
.tab-bar-item{
  flex:1;
  text-align:center;
  height:49px;
}
.tab-bar-item img{
    width:20px;
    
}
</style>
