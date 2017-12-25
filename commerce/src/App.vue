<template>
  <div id="app">
  	<searchs></searchs>
  	<div class="box_header"></div>
  	<router-view></router-view>
  	<div class="box_footer"></div>
  	<footers></footers>
    <div @click="back_top" id="back_top" v-show="bool">top</div>
  </div>
</template>

<script>
	import search from "./components/search/search.vue";
	import footer from "./components/footer/footer.vue";
  export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      scroll:"",
      bool:false
    }
  },
  components:{
  	"searchs":search,
  	"footers":footer
  },
  methods:{
    back_top(){
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    },
    menu(){
      this.scroll = document.body.scrollTop;
      if(this.scroll>=100){
        this.bool=true;
      }else{
        this.bool=false;
      }
    }
  },
  mounted(){
    window.addEventListener('scroll',this.menu);
  }
}
</script>

<style scoped="scoped">
	.box_header{
		height: 1.173333rem;
	}
	.box_footer{
		height: 1.293333rem;
	}
  #back_top{
    width:1.0rem;
    height:1.0rem;
    background: red;
    border-radius:50%;
    position: fixed;
    top:85%;
    left:80%;
    text-align: center;
    line-height: 1.0rem;
    color:#ffffff;
    font-size:0.48rem;
    background: #ca3232;
  }
</style>
