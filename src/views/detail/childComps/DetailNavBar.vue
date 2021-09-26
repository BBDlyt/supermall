<template>
  <div class="detail-nav-bar">
    <nav-bar>
        <template v-slot:left>
            <img src="../../../assets/img/common/back.svg" alt="" class="back" @click="backClick">
      </template>
      <template v-slot:center>
        <div class="title">
          <div v-for="(item, index) in titles" :key="item" class="title-item" :class="index==currentIndex? 'active':''" @click="itemClick(index)">
              {{ item }}

          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../../components/common/nav/NavBar.vue";

export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论","推荐"],
      currentIndex:0
    };
  },
  methods:{
      itemClick(index){
          this.currentIndex=index
          this.$emit('titleClick',index)
          this.$refs.scroll.scrollTo(0,y,100)
      },
      backClick(){
          this.$router.go(-1)
      }
  }
};
</script>

<style>
.detail-nav-bar{
  position: fixed;
  width:100%;
  height:44px;
  background-color: #fff;
  z-index:9
}
.title{
    display:flex;
    font-size:13px;
}
.title-item{
    flex:1
}
.active{
    color:red;
   
}
.back{
    margin-top:10px;
}
</style>
