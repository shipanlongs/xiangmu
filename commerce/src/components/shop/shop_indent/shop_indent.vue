<template>
  <div id="app">
  			<div class="header">
   			<ul>
   				<li></li>
   				<li><h2>店铺订单</h2></li>
   				<li></li>
   			</ul>
   		</div>
   		<div class="nav">
   				<ul>
   					<li :class={active:num1} @click="index1()"><router-link to='/dfk' tag='li'>待付款</router-link></li>
   					<li  :class={active:num2} @click="index2()"><router-link to='/dfh' tag='li'>代发货</router-link></li>
   					<li  :class={active:num3} @click="index3()"><router-link to='/yfh' tag='li'>已发货</router-link></li>
   					<li  :class={active:num4} @click="index4()"><router-link to='/ywc' tag='li'>已完成</router-link></li>
   				</ul>
   		</div>
   		<div class="bg">
   			<router-view></router-view>
   		</div>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      num1:true,
      num2:false,
      num3:false,
      num4:false,
      id:""
    }
  },
  created(){
  	this.id=this.$route.query.id;
  	switch(this.id){
  		case 0:
  		this.index1();break;
  		case 1:
  		this.index2();break;
  		case 2:
  		this.index3();break;
  		case 3:
  		this.index4();break;
  	}
  },
  methods:{
  	getstyle(sty1,sty2,sty3,sty4){
  		this.num1=sty1;
  		this.num2=sty2;
  		this.num3=sty3;
  		this.num4=sty4;
  	},
  	index1(){
  		this.getstyle(true,false,false,false);
  	},
  	index2(){
  		this.getstyle(false,true,false,false);
  	},
  	index3(){
  		this.getstyle(false,false,true,false);
  	},
  	index4(){
  		this.getstyle(false,false,false,true);
  	}
  }
}
</script>

<style scoped="scoped">
	.bg{
		background: #f1f1f1;
		height:14.04rem;
		border:0.013333rem solid #dddddd;
	}
	#app{
		width:100%;
		height:1.293333rem;
		position:fixed;
		top: 0;
		z-index: 99999999;
		background:#FFFFFF;
	}
	.header{
		width: 100%;
		height:1.186666rem;
		border-bottom:1px solid #ca3232;
	}
	.header ul{
		width: 100%;
		height:1.186666rem;
		display:flex;
		align-items: center;
		justify-content: space-between;
	}
	.header ul li{
		font-size: 0.373333rem;
	}
	.header ul li:nth-child(1){
		padding-left: 0.266666rem;
	}
	
	.header ul li:nth-child(3){
		padding-right: 0.266666rem;
	}
	.header ul li:nth-child(3) img{
		width: 0.666666rem;
		height:0.666666rem;
	}
	.nav{
		width:100%;
		height:1.173333rem;
		margin-top:0.026666rem;
		/*border-bottom: 1px solid #dddddd;*/
		font-size: 0.373333rem;
	}
	.nav ul{
		width:100%;
		height:1.173333rem;
		display:flex;
		justify-content: space-around;
		text-align: center;
		line-height: 1.173333rem;
	}
	.nav ul li{
		width: 2.493333rem;
		height:1.213333rem;
	}
	.active{
		border-bottom: 0.026667rem solid  #ca3232;
	}
	/*ul li:hover{
		border-bottom: 0.026667rem solid  #ca3232;
	}*/
</style>
