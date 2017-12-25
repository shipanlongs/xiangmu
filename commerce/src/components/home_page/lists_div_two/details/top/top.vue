<template>
  <div id="app">
     <div class="top">
        <img src="../../../../../assets/images/details/details_06.jpg" @click='back()'/>
        <img src="../../../../../assets/images/details/details_08.png"/>
        <img src="../../../../../assets/images/details/details_03.png"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    back(){
      window.history.back(-1);
    }
  }
}
</script>

<style scoped="scoped">

.top{
  z-index: 9999999;
  top: 0;
  width: 100%;
  background: #ca3232;
  height: 1.2rem;
  line-height: 1.2rem;
  padding: 0.093333rem 0.32rem 0.093333rem 0.506667rem;
  position: fixed;
}
.top img:nth-child(1){
  width: 0.973333rem;
  float: left;
}
.top img:nth-child(2){
  width: 0.973333rem;
  float: right;
  

}
.top img:nth-child(3){
  width: 0.973333rem;
  float: right;
  margin-right: 0.733333rem;
}
</style>
