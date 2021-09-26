<template>
      <div v-if="Object.keys(commentInfo).length!==0" class="comment-info">
          <div class="info-header">
              <div class="header-title">
                  用户评价
              </div>
              <div class="header-more">
                  更多
                  <i class="arrow-right"></i>
              </div>
            </div>
              <div class="info-user">
                  <img :src="commentInfo.user.avatar" alt="">
                  <span>{{commentInfo.user.uname}}</span>
              </div>
              <div class="info-detail">
                  <p>{{commentInfo.content}}</p>
                  <div class="info-other">
                      <span class="date">{{commentInfo.created}}</span>
                      <span>{{commentInfo.style}}</span>
                  </div>
                  <div class="info-imgs">
                      <img :src="item" alt="" v-for="(item,index) in commentInfo.images" :key="index">
                  </div>
              </div>
          
      </div>

</template>

<script>
export default {
  name: 'DetailCommentInfo',
  components: {
  
  },
  props:{
      commentInfo:{
          type:Object
      }
  }
}
</script>

<style>
.info-header{
    height:50px;
    /* padding:20px 0; */
    margin:0 5px;
    border-bottom: 2px solid #ccc;
    border-top: 3px solid #ccc;
    line-height:50px;
    font-size:12px;
    /* background-color: pink; */
}
.info-header .header-title{
    float:left
}
.info-header .header-more{
    float:right
}
.info-user{
    height:60px;
    /* background-color: purple; */
    padding:10px 0px;
    line-height:40px;
    
}
.info-user img{
    float: left;
    width:40px;
    height:40px;
    border-radius: 50%;
    margin:0 5px;
    
}
.info-user span{
    font-size:13px;
}
.info-detail{
    font-size:12px;
    line-height:17px
}
.info-detail .info-other{
    font-size:12px;
}
</style>