<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide><img v-lazy="pic0"></swiper-slide>
    <swiper-slide><img v-lazy="pic0"></swiper-slide>
    <swiper-slide><img v-lazy="pic0"></swiper-slide>
    <swiper-slide><img v-lazy="pic0"></swiper-slide>
    <swiper-slide><img v-lazy="pic0"></swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
    
  </swiper>
    
</template>
<style scoped="scoped">
	.swiper-slide{
		padding: 0 2rem 1rem 2rem;
    background: #fff;
	}
	.swiper-slide img{
		width: 100%;
		height: 8rem;
	}
 
</style> 
<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        pic0:"",
        swiperOption: {
          // 自动轮播
          autoplay: 2000,
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
        return this.$refs.mySwiper.swiper
      }
    },
    created(){
      // 获取设置的数据
      let pic0=localStorage.getItem("pic0");
      this.pic0=pic0;

    }
  }
</script>