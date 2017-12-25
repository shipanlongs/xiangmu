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
			<p>请输入您的手机号码</p>
		</div>
		<div class="import">
			<p>手机号</p>
			<input type="text" name="" v-model="tel">
		</div>
		<div class="blank_two"></div>
		<div class="btn">
			<button @click="goto()">下一步</button>
			<button>联系客服</button>
		</div>
	</div>
</template>
<script>
import axios from 'axios';
import Bus from './bus.js';
export default {
  name: 'app',
  data () {
    return {
     	tel:""
     	
    }
  },
  methods:{
  	back(){
  		window.history.back(-1);
  	},
  	goto(){
  		if(this.tel==""){
  			alert("手机号为空");
  		}else if(this.tel.length<11||this.tel.length>11){
  			
  			alert("输入的格式不对");
  		}else{
  			this.$router.push("/code");
  			const url="http://114.55.249.153:8028/login/findPasswordByPhone";
		  	let obj={
		  		phone:this.tel
		  	}
		  	axios.post(url,obj).then((res)=>{
		  		Bus.$emit('yanzheng',res.data.code);
		  		localStorage.setItem("phone",res.data.phone);
		  	})
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
.btn button:nth-of-type(1){
	width: 78.5%;
	height: 1.2rem;
	background: #ca3232;
	border: none;
	border-radius: 0.2rem;
	color: white;
	font-size: 0.453333rem;
	margin-left: 10.7%;
}
.btn   button:nth-of-type(2){
	width: 78.5%;
	height: 1.2rem;
	background: white;
	border: none;
	border: 1px solid #ca3232;
	border-radius: 0.2rem;
	color: #ca3232;
	font-size: 0.453333rem;
	margin-left: 10.7%;
	margin-top:0.533333rem;
}
</style>