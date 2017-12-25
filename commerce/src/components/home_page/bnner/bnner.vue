<template>
  <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
    <swiper-slide v-for='data in arr'>
      <img v-lazy="data.imgpath"/>
    </swiper-slide>
    
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>
 <style scoped="scoped">
 	.swiper-slide{
 			width: 100%;
 			height: 5.333333rem;
 	}
.swiper-slide img{
 		width: 100%;
 		height: 5.333333rem;
 	}
 </style>
<script>
import axios from 'axios'
  export default {
    name: 'carrousel',
    data() {
      return {
        notNextTick: true,
        arr:[],
        swiperOption: {
          //自动轮播
          autoplay: 2000,
          //循环播放
          // loop:2000,
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          mousewheelControl: true,
          observeParents: true,
          debugger: true,
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper;
      }
    },
    //创建之前
    created(){
     // 地址
    let url='http://114.55.249.153:8028/goods/list'
//  渲染到页面上
    axios.get(url).then((res)=>{
      this.arr=res.data.bannerList

    })
  }
    
  }
</script>