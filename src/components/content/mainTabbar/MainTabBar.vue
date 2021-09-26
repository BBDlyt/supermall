<template>
<div>
<tab-bar>
       <!-- <tab-bar-item activeColor="blue">
       <img src="assets/img/tabbar/home.svg" alt="" slot="item-icon" >
       <img src="assets/img/tabbar/home_active.svg" alt="" slot="item-icon-active">

       <div slot="item-text">首页</div>
    </tab-bar-item> -->
    <tab-bar-item path="/home" activeColor="blue">
    <template v-slot:item-icon>
      <div>
       <img src="../../../assets/img/tabbar/home.svg" alt=""  >
        
      </div>
      
    </template>
    <template v-slot:item-icon-active>
      <div>
       <img src="../../../assets/img/tabbar/home_active.svg" alt="">
      </div>
    </template>
    <template v-slot:item-text>
      <div>
       <div>首页</div>
      </div>
    </template>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="blue">
    <template v-slot:item-icon>
      <div>
      <img src="../../../assets/img/tabbar/category.svg" alt="" >
        
      </div>
    </template>
    <template v-slot:item-icon-active>
      <div>
       <img src="../../../assets/img/tabbar/category_active.svg" alt="">
        
      </div>
    </template>
    <template v-slot:item-text>
      <div>
       <div >分类</div>
        
      </div>
    </template>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="blue">
    <template v-slot:item-icon>
      <div>
      <img src="../../../assets/img/tabbar/shopcart.svg" alt="" >
        
      </div>
    </template>
    <template v-slot:item-icon-active>
      <div>
       <img src="../../../assets/img/tabbar/shopcart_active.svg" alt="" >
        
      </div>
    </template>
    <template v-slot:item-text>
      <div>
       <div >购物车</div>
        
      </div>
    </template>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="blue">
    <template  v-slot:item-icon>
      <div>
      <img src="../../../assets/img/tabbar/profile.svg" alt="">
        
      </div>
    </template>
    <template v-slot:item-icon-active>
      <div>
      <img src="../../../assets/img/tabbar/profile_active.svg" alt="" >
        
      </div>
    </template>
    <template v-slot:item-text>
      <div>
       <div >我的</div>
        
      </div>
    </template>m
    </tab-bar-item>


    </tab-bar>
</div>
     
</template>

<script>
import TabBar from '../../common/tabbar/TabBar'
import TabBarItem from '../../common/tabbar/TabBarItem'
export default {
  name: 'MainTabBar',
  components:{
    TabBar,
    TabBarItem,
  }
 
 
  }
</script>

<style>
</style>