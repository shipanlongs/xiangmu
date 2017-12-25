<template>
  <div id="app" class="apps" >
    <!-- 轮播 -->
  	<bnner></bnner>
    <!-- lists -->
    <lists id='lists' v-if='show'></lists>
  	<lists_2 id='lists_2' v-if='shows'></lists_2>
    <!-- 本周主打 -->
  	<lists_div_one></lists_div_one>
    <!-- 本月推荐 -->
  	<lists_div_two></lists_div_two>
    <!-- 家庭套餐 -->
  	<lists_div_three></lists_div_three>
    <!-- 为您推荐 -->
  	<more></more>
  </div>
</template>
  
<script>
	import bnner from "../home_page/bnner/bnner.vue";
  import lists from "../home_page/lists/lists.vue";
	import lists_2 from "../home_page/lists_2/lists_2.vue";
	import lists_div_one from "../home_page/lists_div_one/lists_div_one.vue";
	import lists_div_two from "../home_page/lists_div_two/lists_div_two.vue";
	import lists_div_three from "../home_page/lists_div_three/lists_div_three.vue";
	import more from "../home_page/more/more.vue";
export default {
  name: 'app',
  data(){
    return {
      msg: 'Welcome to Your Vue.js App',
      show:true,
      shows:false
    }
  },
  components:{
  	"bnner":bnner,
  	"lists":lists,
    "lists_2":lists_2,
  	"lists_div_one":lists_div_one,
  	"lists_div_two":lists_div_two,
  	"lists_div_three":lists_div_three,
  	"more":more
  },
  methods:{
    fn(){
      var t=document.documentElement.scrollTop || document.body.scrollTop
      if(t>=200){
         this.show=false;
         this.shows=true;
      }else{
        this.show=true;
        this.shows=false;
      }
       
      }
  },
  mounted(){
    // 监听滚轮事件
    window.addEventListener('scroll', this.fn);
  }

}
</script>

<style scoped="scoped">
	#app{
		background: #f1f1f1;
	}
  #lists_2{
     position: fixed;
    top: 1.173333rem;
    z-index:999;
    width: 100%;
    background: #fff;
  }
</style>
