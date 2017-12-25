<template>
  <div id="app">
   <div class="header">
   	<ul>
   		   <ul>
				<li><img src="../../assets/geren_03.jpg"/></li>
		   		<li v-on:click="back()">&nbsp;返回</li>
		   		<li>个人中心</li>
   			</ul>
   	</ul>
   		
   </div>
   
   <div class="main">
   	<div class="imge">
   			<img src="../../assets/u=2296586257,2988238117&fm=21&gp=0.jpg"/>
   			
   	</div>
   	<p>{{username}}</p>
   </div>
   
   <div class="list">
   	<ul>
   		<li>我的订单</li>
   		<router-link to="/dfk" tag="li">
   		<li>查看所有订单 ></li>
   		</router-link>
   	</ul>
   </div>
   
   <div class="order">
   	<ul>
   		<li>
   			<router-link :to="{name:'num1',query:{id:0}}" tag="li">
   				<img src="../../assets/personal_center/geren1.jpg"/>
   				<p>待支付</p>
   			</router-link>
   		</li>
   		<li>
   			<router-link :to="{name:'num2',query:{id:1}}" tag="li">
   			<img src="../../assets/personal_center/geren2.jpg"/>
   			<p>待发货</p>
   			</router-link>
   		</li>
   		<li>
   			<router-link :to="{name:'num3',query:{id:2}}" tag="li">
   			<img src="../../assets/personal_center/geren3.jpg"/>
   			<p>已收货</p>
   			</router-link>
   		</li>
   		<li>
   			<router-link :to="{name:'num4',query:{id:3}}" tag="li">
   			<img src="../../assets/personal_center/geren4.jpg"/>
   			<p>已完成</p>
   			</router-link>
   		</li>
   	</ul>	
   </div>
   
   <div class="bill">
   	<ul>
   		<router-link to='/zhangdan' tag='ul'>
	   		<li>补贴账单</li>
	   		<li> ></li>
   		</router-link>
   	</ul>
   </div>
   
    <div class="bill">
   	<ul>
   		<router-link to='/daijin' tag='ul'>
   		<li>我的代金券</li>
   		<li class="text">1张代金券即将过期</li>
   		</router-link>
   	</ul>
   </div>
   
   <div class="bill">
   	<ul>
   		<router-link to='/guanyu' tag='ul'>
   		<li>关于我们</li>
   		<li> ></li>
   		</router-link>
   	</ul>
   </div>
   
   <div class="btn" @click="tuchu()">
   	 <p>退出登录</p>
   </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username:""
    }
  },
  methods:{
  	back(){
  		window.history.back(-1);
  	},
  	tuchu(){
  		sessionStorage.clear('username');
  		this.$router.push('/Ready');
  	}
  },
  created(){
  	 this.username=sessionStorage.getItem("username");
  }
}
</script>

<style scoped="scoped">
.header{
	width: 100%;
	height: 1.2rem;
	background: #1c1c1e;
	position: fixed;
	top: 0;
	display: flex;
	align-items: center;
	z-index: 9999999;
}
.header ul{
	width: 100%;
	height: 0.933333rem;
	display: flex;
	align-items: center;
}
.header ul li:nth-child(1) img{
	width: 0.346667rem;
	height: 0.933333rem;
	margin-left: 0.266667rem;
}
.header ul li:nth-child(2){
	font-size: 0.426666rem;
	font-weight: bold;
	width: 20%;
	color: white;
}
.header ul li:nth-child(3){
	font-weight: bold;
	width: 50%;
	text-align: center;
	font-size: 0.533333rem;
	color: white;
}
.main{
	border: 1px solid #1c1c1e;
	width: 100%;
	height: 5.32rem;
	background: #1c1c1e;
	position: relative;
}
.imge{
	width: 1.866666rem;
	height: 1.866666rem;
	border-radius: 0.933333rem;
	border: 3px solid white;
	margin: 0 auto;
	margin-top: 1.2rem;
}
.imge img{
	width: 100%;
	border-radius: 0.933333rem;
}
.main p{
	padding-top: 0.333333rem;
	margin: 0 auto;
	text-align: center;
	width: 4rem;
	height: 1.333333rem;
	color: #ebebeb;
	font-size: 0.4rem;
	font-family: "微软雅黑";
}
.come_up{
	width: 9.2rem;
	height: 3.48rem;
	background: white;
	position: absolute;
	bottom: 30%;
	left: 4%;
	border-bottom: 2px solid #c5c5c5;
}
.come_up ul{
	width: 9.2rem;
	height: 3.466666rem;
}
.come_up ul li:nth-child(1){
	width: 100%;
	color: #8d8e90;
	font-size: 0.333333rem;
	text-align: center;
	margin-top: 0.266667rem;
	font-family: "微软雅黑";
}
.come_up ul li:nth-child(2){
	width: 100%;
	text-align: center;
	color: #ff4747;
	font-size: 0.573333rem;
	font-weight: bold;
	font-family: "微软雅黑";
}
.come_up ul li:nth-child(3){
	width: 100%;
	font-size: 0.4rem;
	text-align: center;
	font-family: "微软雅黑";
	margin-top: 0.733333rem;
	color: #a0a1a3;
}
.list{
	width: 100%;
	height: 1.066666rem;
	text-align: center;
}
.list ul{
	width: 100%;
	height: 1.22 6666rem;
	display: flex;
	justify-content:space-between;
	font-size: 0.426667rem;
	color: #a0a1a3;
}
.list ul li:nth-child(1){
	height: 1.2rem;
	line-height: 1.2rem;
	padding-left: 0.4rem;

}
.list ul li:nth-child(2){
	height: 1.2rem;
	line-height: 1.2rem;
	padding-right: 0.4rem;
}

.bill{
	width: 100%;
	height: 1.066666rem;
	text-align: center;
	border:1px solid #ebebeb;
}
.bill ul{
	width: 100%;
	height: 1.22 6666rem;
	display: flex;
	justify-content:space-between;
	font-size: 0.426667rem;
	font-family: "微软雅黑";
	color: #a0a1a3;
}
.bill ul li:nth-child(1){
	height: 1.2rem;
	line-height: 1.2rem;
	padding-left: 0.4rem;
}
.bill ul li:nth-child(2){
	height: 1.2rem;
	line-height: 1.2rem;
	padding-right: 0.4rem;
}
.text{
	color: #ff4747;
}
.order{
	width: 100%;
	height: 2.266666rem;
	border-bottom: 1px solid #ebebeb;
}
.order ul{
	width: 100%;
	height: 2.266666rem;
	border-top: 1px solid #ebebeb;
	display: flex;
	align-items: center;
	justify-content: space-around;
	text-align: center;
}
.order ul li img{
	width: 0.56rem;
	height: 0.64rem;
}
.order ul li{
	font-size: 0.333333rem;
	font-family: "微软雅黑";
}
.order ul li p{
	color: #a0a1a3;
}
.btn{
	width:95%;
	height:0.933333rem;
	background:#ca3232;
	margin:0 auto;
	margin-bottom:0.133333rem;
	margin-top: 0.133333rem;
	border-radius:0.133333rem;
	text-align: center;
	line-height:0.933333rem;
	color:#ffffff;
	font-size: 0.373333rem;
}
</style>
