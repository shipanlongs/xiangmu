<template>
	<div id="app">
		<div class="header">
			<ul>
				<li><img src="../../assets/xiaoyu_03.jpg"></li>
		   		<li v-on:click="back()">&nbsp;返回</li>
		   		<li>找回密码</li>
   			</ul>
		</div>
		<div class="blank">
			
		</div>
		<div class="tel">
			<p>短信验证已发送，请输入验证码</p>
		</div>
		<div class="import">
			<p>验证码</p>
			<input type="text" name="" v-model="yanzheng">
		</div>
		<div class="blank_two"></div>
		<div class="btn">
			<button @click="goto()">下一步</button>
		</div>
	</div>
</template>
<script>
import Bus from './bus.js';
export default {
  name: 'app',
  data () {
    return {
     	src:"./src/assets/shopping_Car/购物车_07.jpg",
     	arr:"",
     	yanzheng:""
     	
    }
  },
  mounted(){
  	Bus.$on('yanzheng',(res)=>{
  		this.arr=res;
  	})
  },
  methods:{
  	back(){
  		window.history.back(-1);
  	},
  	goto(){
  		if(this.arr==this.yanzheng){
  			this.$router.push('/find');
  		}else if(this.arr!=this.yanzheng){
  			alert("输入错误");
  		}
  	}
  }
}
</script>
<style scoped="scoped">
.header{
	width: 100%;
	height: 1.173333rem;
	background: #ca3231;
	position: fixed;
	top: 0;
	z-index: 10000000;
}
.header ul{
	width: 100%;
		height: 1.173333rem;
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
	color: white;
}
.header ul li:nth-child(3){
	font-weight: bold;
	width: 50%;
	text-align: center;
	font-size: 0.533333rem;
	color: white;
}
.blank{
	width: 100%;
	height: 1.76rem;
}
.tel{
	width: 100%;
	height: 0.773333rem;
}
.tel p{
	font-size: 0.533333rem;
	text-align: center;
	line-height: 0.773333rem;
	font-family: "宋体";
	font-weight: bold;
}
.import{
	width: 100%;
	height: 2.08rem
}
.import input{
	margin-left: 7.9%;
	width: 84.1%;
	height: 0.533333rem;
	border: none;
	border-bottom: 1px solid #ccc;
	text-align: center;
	font-size: 0.4rem;
}
.import p{
	text-align: center;
	font-size: 0.426667rem;
	color: #bbbbbb;
	margin-top: 0.933333rem;
}
.blank_two{
	width: 100%;
	height: 1.48rem;
}
.btn button{
	width: 78.5%;
	height: 1.2rem;
	background: #ca3232;
	border: none;
	border-radius: 0.2rem;
	color: white;
	font-size: 0.453333rem;
	margin-left: 10.7%;
}
.btn p{
	text-align: center;
	margin-top: 0.693333rem;
	font-size: 0.346667rem;
	color: #ca3232;
	font-weight: bold;
}
</style>