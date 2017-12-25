<template>
  <div id="app">
  		<top></top>  
  		<bnner></bnner> 
       <mains></mains>
      <bottom></bottom>
  		
  </div>
</template>

<script>
import top from "./top/top.vue";
import bnner from "./bnner/bnner.vue";
import mains from "./mains/mains.vue";
import bottom from "./bottom/bottom.vue";
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  // 组件
  components:{
    // top组件
  	"top":top,
    // 轮播组件
  	"bnner":bnner,
    // 主体组件
    "mains":mains,
    // 底部组件
  	"bottom":bottom
  }
}
</script>

<style scoped="scoped">
#app{
  background: #f1f1f1;
}
#app{
    font-weight: bold;
    font-family: "微软雅黑";
  }
</style>
