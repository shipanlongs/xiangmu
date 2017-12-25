<template>
	<div id="app">
		 <div class="header">
   	<ul>
				<li><img src="../../assets/hese_03.jpg"></li>
		   		<li v-on:click="back()">&nbsp;返回</li>
		   		<li>选择支付方式</li>
   			</ul>
   		
   </div>

   <div class="big_background">
   	
   

<!-- 支付宝 -->
  <div class="alipay">
  	<ul>
  		<li><img src="../../assets/pay/zhifubao.jpg" height="100" width="99"></li>
  		<li>支付宝支</li>
  		<li><img src="../../assets/pay/jian_06.jpg" height="46" width="25"></li>
  	</ul>
  </div>
<!-- 微信 -->
  <div class="WeChat_pay">
  	<ul>
  		<li><img src="../../assets/pay/weixin.jpg" height="100" width="99"></li>
  		<li>微信支付</li>
  		<li><img src="../../assets/pay/jian_06.jpg" height="46" width="25"></li>
  	</ul>
  </div>
  </div>

   <div class="footer">
  	
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
	
.header{
	width: 100%;
	height: 1.2rem;
	background: #ffffff;
	position: fixed;
	top: 0;
	display: flex;
	align-items: center;
	border-bottom: 1px solid #ca3232;
	z-index: 1000000000;
}
.header ul{
	width: 100%;
	height: 0.933333rem;
	display: flex;
	align-items: center;
}
.header ul li:nth-child(1) img{
	width: 0.333333rem;
	height: 0.613333rem;
	margin-left: 0.266667rem;
}

.header ul li:nth-child(2){
	font-size: 0.426666rem;
	font-weight: bold;
	width: 20%;
	color: #7a7a7a;
}
.header ul li:nth-child(3){
	font-weight: bold;
	width: 50%;
	text-align: center;
	font-size: 0.533333rem;
	color: #000;
}
.big_background{
	width: 100%;
	height: 15.333333rem;
	background: #f1f1f1;
}
.alipay{
	width: 100%;
	height:2.026667rem;
	background: white;
	border-bottom: 1px solid #dddddd;  
}
.alipay ul{
	width: 100%;
	height:2.026667rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.alipay ul li:nth-child(1) img{
	width: 1.32rem;
	height: 1.346667rem;
	margin-left: 0.44rem;
}
.alipay ul li:nth-child(2){
	font-size: 0.466667rem;
	font-weight: bold;
	margin-right: 3.733333rem;
	font-family: "微软雅黑";
}
.alipay ul li:nth-child(3) img{
	width: 0.333333rem;
	height: 0.613333rem;
	margin-right: 0.4rem;
}
.WeChat_pay{
	width: 100%;
	height:2.026667rem;
	background: white;
	border-bottom: 1px solid #dddddd; 
}
.WeChat_pay ul{
	width: 100%;
	height:2.026667rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.WeChat_pay ul li:nth-child(1) img{
	width: 1.32rem;
	height: 1.346667rem;
	margin-left: 0.44rem;
}
.WeChat_pay ul li:nth-child(2){
	font-size: 0.466667rem;
	font-weight: bold;
	margin-right: 3.733333rem;
	font-family: "微软雅黑";
}
.WeChat_pay ul li:nth-child(3) img{
	width: 0.333333rem;
	height: 0.613333rem;
	margin-right: 0.4rem;
}
.footer{
	width: 100%;
	height: 1.346667rem;
	background: #f1f1f1;
	position: fixed;
	bottom: 0;
	z-index: 10000;
}
</style>