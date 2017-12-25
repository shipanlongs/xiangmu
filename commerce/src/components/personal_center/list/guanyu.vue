<template>
  <div id="app">
    <div class="header">
      <ul>
        <li>﹤</li>
        <li><router-link to='/tab4' tag='li'>返回</router-link></li>
      </ul>
    </div>
    <div class="footer">
      <p>北京八维游戏学院1507A班</p>
      <p>一剑飘雪团队开发</p>
      <p>如果发现有不法分子操作本软件请及时联系我们。</p>
      <p>电话:13011055920</p>
      <p>地址:北京八维游戏学院1507A班</p>
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
    font-family: 微软雅黑;
  }
   #app p{
    text-align: center;
   }
   #app p:nth-child(3){
    text-align: left;
   }
   #app p:nth-child(4){
    margin:5.333333rem 0.0rem 0.0rem 2.8rem;
   }
   #app p:nth-child(5){
    margin-left:3.4rem;
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
