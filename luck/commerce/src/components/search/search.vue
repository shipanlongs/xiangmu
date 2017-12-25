<template>
  <div class="header">
   		<ul class="ul">
   			<li><img src="../../assets/search_02.jpg" @click='click()'/></li>
   			<li>
   				<input type="search" name="search" id="search" value=""  placeholder="搜索你喜欢的东西"/>
   			</li>
   			<li><img src="../../assets/search_01.jpg"/></li>
   		</ul>
   		<div class="img" v-show='img'>
   			<img src="../../assets/images/img/alert_03.png" id='img' >
	   		<ul >
	   			<li>
	   				<p><img src="../../assets/images/img/img_03.jpg"></p><p>洋玩意总店</p>
	   				
	   			</li>
	   			<li>
	   				<p><img src="../../assets/images/img/img_06.jpg"></p><p>洋玩意总店</p>
	   				
	   			</li>
	   			<li>
	   				<p><img src="../../assets/images/img/img_08.png"></p><p>洋玩意总店</p>
	   				
	   			</li>
	   		</ul>
   		</div>
   		
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      img:false
    }
  },
  methods:{
    click(){
        this.img=!this.img;
       
    }
  }
}
</script>

<style scoped="scoped">
.img #img{
	width: 4.4rem;
	height: 3.2rem;
	margin: 0.133333rem 0.0rem 0.0rem 0.133333rem;
	position: absolute;
}
.img ul{
	position: absolute;
	margin-top: 0.4rem;
	margin-left: 0.146667rem;
}
.img li{
	display: flex;
	height: 1rem;
	width: 4.35rem;
	line-height: 1rem;
	padding: 0 0 0 0.266667rem;
	color: #fff;
	font-size: 0.293333rem;
	border-bottom:0.013333rem solid #e24a4a;

}
.img li:last-child{
	border:0;
}
.img li p:last-child{
	margin-left: 0.133333rem;
}
.img ul img{
	width: 0.56rem;
  	margin-top:0.2rem;

}
		.header{
			width:100%;
			height:1.173333rem;
			background: #ca3232;
			position:fixed;
			top: 0rem;
			z-index: 9999999;
		}
		.header .ul{
			width:100%;
			height:1.173333rem;
			display:flex;
			justify-content: space-between;
			align-items: center;
		}
		.header .ul li img{
			margin-top: 0.133333rem;
		}
		.header .ul li:nth-child(1){
			margin-left: 0.146666rem;
		}
		.header .ul li:nth-child(1) img{
			width: 0.8rem;
			height: 0.733333rem;
		}
		.header .ul li:nth-child(3) img{
			width: 0.613333rem;
			/*height: 0.733333rem;*/
			margin-right:0.146666rem;
		}
		.header input{
			border:none;
			width: 7.066666rem;
			height:0.733333rem;
			background: #a22828;
			border-radius:0.133333rem;
			color:#ff6767;
			outline:none;
			padding-left: 0.133333rem;
		}
</style>
