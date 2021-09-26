<template>
    <swiper>
      <swiper-item v-for="(item, index) in topImgs" :key="index" class="detail-swiper-item">
        <a >
        <img :src='item' >
       </a>
      </swiper-item>
    </swiper>
</template>
<script>
import { Swiper, SwiperItem } from "../../../components/common/swiper/index";
import {getDetail} from "../../../network/detail"

export default {
  name: "DetailSwiper",
  pops: {
    // topimgs: {
    //   type: Object,
    //   default() {
    //     return {};
    //   },
    // },
    // iid: {
    //     type: String,
    //     default: ''
    // }
  },
  data() {
      return {
          topImgs: []
      }
  },
  created() {
    //   console.log(this.topimgs)
    this.getSwiperImgs()
  },
  methods: {
      getSwiperImgs() {
          this.iid=this.$route.params.iid
        getDetail(this.iid).then(res=>{

            this.topImgs=res.data.result.itemInfo.topImages
        })
      }
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>
<style>
.detail-swiper-item {
  height: 300px;
  overflow: hidden;
}
</style>