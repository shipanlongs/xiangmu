<template>
  <div id="app">
  		<div class="logo">
          <p><img src="../../assets/read-img/read_03.jpg"></p>
      </div>
      <div class="register">
          <ul>
            <li><img src="../../assets/read-img/read_07.jpg"></li>
            <li>微信一键登录</li>
          </ul>
      </div>
      <div class="register2">
        <div class="register3">
            <router-link :to="{name:'registers',params:{id:'0'}}">登录</router-link>
        </div>
        <div class="register4">
            <router-link :to="{name:'registers',params:{id:'1'}}">新用户</router-link>
        </div>
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
  }
}
</script>

<style scoped="scoped">
	#app{
    width:100%;
    height:17.756667rem;
    background:url(../../assets/read-img/register.png);
    position:fixed;
    top:0.0rem;
    z-index:9999999999;
    background-size:cover;
  }
  .logo{
    width:100%;
    height:3.72rem;
    margin-top: 3.48rem;
    text-align: center;
  }
  .logo img{
    width:3.346667rem;
    height:3.72rem;
  }
  .register{
    width:95%;
    height:1.2rem;
    background: #00a80c;
    margin:0 auto;
    margin-top: 6.226667rem;
    border-radius:0.133333rem;
  }
  .register img{
    width:0.706667rem;
    height:0.56rem;
  }
  .register ul{
    width:100%;
    height:1.2rem;
    display:flex;
    align-items: center;
    justify-content: center;
  }
  .register ul li:nth-child(2){
    font-size:0.466667rem;
    color:#ffffff;
    padding-left: 0.266667rem;
  }
  .register2{
    width:95%;
    height:1.2rem;
    margin-top: 0.64rem;
    margin:0 auto;
    margin-top: 0.666667rem;
    display:flex;
    justify-content: space-between;
    text-align: center;
    line-height: 1.2rem;
    font-size: 0.426667rem;
    font-weight: bold;
  }
  .register3{
    width:45%;
    height: 1.2rem;
    background:#ffffff;
    border-radius:0.133333rem;
    
  }
  .register3 a{
    color:#ca3232;
  }
   .register4{
    width:45%;
    height: 1.2rem;
    border:1px solid #ffffff;
    border-radius:0.133333rem;
    
  }
  .register4 a{
    color:#ffffff;
  }
</style>
