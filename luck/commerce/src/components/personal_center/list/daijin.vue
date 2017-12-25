<template>
  <div id="app">
    <div class="header">
      <ul>
        <li>﹤</li>
        <li><router-link to='/tab4' tag='li'>返回</router-link></li>
      </ul>
    </div>
    <div class="footer">
      <p>代金券马上到期请使用。。。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  methods:{
  	
  },
  created(){
  	 
  }
}
</script>

<style scoped="scoped">
  #app{
    width:100%;
    height:4.0rem;
    background:#ffffff;
    position:fixed;
    top:0;
    z-index:9999999;
    font-size:0.64rem;
    padding-top: 0.4rem;
    text-align: left;
  }
  .header{
    width: 100%;
    height:1.033333rem;
    position:fixed;
    top:0.0rem;
    border-bottom:0.026667rem solid #ca3232;
   }
   .header ul{
    width: 100%;
    height:1.033333rem;
    display: flex;
    font-size:0.4rem;
    align-items: center;
   }
   .footer{
    margin-top: 0.933333rem;
   }
</style>
