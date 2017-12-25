<template>
	<div id="app">
		 <div class="header">
    	<ul>
    		<li><img src="../../assets/hese_03.jpg"></li>
    		<li v-on:click="back()">返回</li>
    		<li>订单确认</li>
    		<li><img src="../../assets/shopping_Car/购物车_03.jpg"/></li>
    	</ul>
    </div>

<div class="backgroun">
    	<div class="address">
    		<ul>
    			<li><img src="../../assets/order_from/dingwei_03.jpg"></li>
    			<li>
    				<router-link to="/address">
    				刘德华 18800001234
    				<p>地址：历山大道888号</p>
    				</router-link>
    			</li>
    			<li> ></li>
    			
    		</ul>
    		<div class="flower">
    			
    		</div>
    	</div>

    	<div class="title">
    		<ul>
    			<li><img src="../../assets/order_from/sure_03.jpg"/></li>
    			<li>洋玩意总店</li>
    		</ul>
    	</div>

    	<div class="list">
    		<ul>
    			<li><div><img v-lazy="src"></div></li>
    			<li>
    				Metabolic酵素x酵母精华粒减肥排毒 60粒
    				<p><button>保税区</button></p>
    			</li>
    			<li>
    				￥219.00
    				<p>x1</p>
    			</li>
    		</ul>
    	</div>

    	<div class="list">
    		<ul>
    			<li><div><img v-lazy="src"></div></li>
    			<li>
    				Metabolic酵素x酵母精华粒减肥排毒 60粒
    				<p><button>保税区</button></p>
    			</li>
    			<li>
    				￥219.00
    				<p>x1</p>
    			</li>
    		</ul>
    	</div>
    	<div class="list">
    		<ul>
    			<li><div><img v-lazy="pic0"></div></li>
    			<li>
    				{{goodsname}}
    				<p><button>保税区</button></p>
    			</li>
    			<li>
    				￥{{price}}
    				<p>x1</p>
    			</li>
    		</ul>
    	</div>
    	<div class="subtotal">
    		<p>小计 ￥438.00</p>
    	</div>
    	<!-- 配送方式 -->
    	<div class="delivery">
    		<ul>
    			<li>配送方式</li>
    			<li>厂家直邮 邮费￥25 ></li>
    		</ul>
    	</div>

    	<div class="delivery">
    		<ul>
    			<li>优惠券</li>
    			<li>10元优惠券 ></li>
    		</ul>
    	</div>

    	<div class="footer">
    		<ul>
    			<li>总价:￥438.00</li>
    			<li>
	    			<router-link to="/pay">
	    				<button>确认支付</button>
	    			</router-link>
    			</li>
    		</ul>
    	</div>
</div>
	</div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      // img:"./src/assets/shopping_Car/购物车_03.jpg"	,
      src:"./src/assets/shopping_Car/购物车_07.jpg"
    }
  },
  methods:{
  	back(){
  		window.history.back(-1);
  	}
  },
  created(){
  	let pic0=localStorage.getItem("pic0");
      this.pic0=pic0;
      let goodsname=localStorage.getItem("goodsname");
      this.goodsname=goodsname;
      let price=localStorage.getItem("price");
      this.price=price;
      let parameter=localStorage.getItem('parameter');
      this.parameter=parameter;
    }
}
</script>
<style scoped="scoped">
	.header{
		width: 100%;
		height: 1.186667rem;
		background: white;
		position: fixed;
		top: 0;
		border-bottom: 1px solid #ca3232;
		z-index: 1000000000;
	}
	.header ul{
		display: flex;
		align-items: center;
		width: 100%;
		height: 1.173333rem;
		/*justify-content: space-between;*/
	}
	.header ul li:nth-child(1){
		width: 8%;
	}
	.header ul li:nth-child(1) img{
		width: 0.4rem;
		height: 0.653333rem;
		margin-left: 0.24rem;
	}
	.header ul li:nth-child(2){
		font-size: 0.44rem;
		font-family: "微软雅黑";

	}
	.header ul li:nth-child(3){
		width: 70%;
		font-size: 0.546667rem;
		font-weight: bold;
		text-align: center;
	}
	.header ul li:nth-child(4){
		width: 12%;
	}
	.header ul li img{
		width: 0.693333rem;
		height: 0.666667rem;
		margin-left: 0.333333rem;
	}
	.address{
		width: 100%;
		height: 2.013333rem;
		background: #fffdf5;
		position: relative;
	}
	.flower{
		width: 100%;
		height: 0.066667rem;
		background: url(../../assets/order_from/hua.jpg);
		position: absolute;
		bottom: 0;
	}
	.address ul{
		width: 100%;
		height: 2.013333rem;
		display: flex;
		align-items: center;
	}
	.address ul li:nth-child(1){
		width: 12%;
	}
	.address ul li:nth-child(1) img{
		width: 0.493333rem;
		height: 0.653333rem;
		margin-left: 0.333333rem;
	}
	.address ul li:nth-child(2){
		width: 81.9%;
		font-size:0.426667rem; 
		color: #000;
	}
	.address ul li:nth-child(2) p{
		font-size:0.36rem;
		color: #666666;
	}
	.address ul li:nth-child(2) a{
		color: #000;
	}
	.address ul li:nth-child(3){
		width: 6.1%;
		font-size: 0.666667rem;
		color: #bbbbbb;
	}
	.backgroun{
		width: 100%;
		height: 15.333333rem;
		background:#f1f1f1;
	}
	.title{
		margin-top: 0.266667rem;
		background: white;
		width: 100%;
		height: 0.933333rem;
	}
	.title ul{
		width: 100%;
		height: 0.933333rem;
		display: flex;
		align-items: center;
		margin-left:  0.4rem;
		border-bottom: 1px solid #ccc;
	}
	.title ul li:nth-child(1) img{
		width: 0.466667rem;
		height: 0.466667rem;
		margin-top: 0.133333rem;
	}
	.title ul li:nth-child(2){
		width: 70%;
		height: 0.933333rem;
		font-size:0.346667rem;
		line-height: 1rem;
		margin-left: 0.106667rem;
	}
	.list{
		width: 100%;
		height: 2.4rem;
		background: white;
	}
	.list ul{
		margin-left:  0.4rem;
		width: 100%;
		height: 2.4rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom:  1px solid #dddddd;

	}
	.list ul li:nth-child(1) img{
		width: 0.773333rem;
		height: 1.4rem;
		margin-top: 0.106667rem;
	}
	.list ul li:nth-child(1) div{
		width: 1.613333rem;
		height: 1.626667rem;
		border: 1px solid white;
		text-align: center;
	}
	.list ul li:nth-child(2){
		width: 43.5%;
		font-size: 0.293333rem;
		margin-right: 1rem;
	}
	.list ul li:nth-child(2) button{
		width: 1.44rem;
		height: 0.533333rem;
		border: none;
		border: 1px solid #f48f7b;
		border-radius: 0.106667rem;
		color: #f48f7b;
		background: white;
		margin-top: 0.346667rem;
	}
	.list ul li:nth-child(3){
		margin-right: 0.733333rem;
		font-size: 0.333333rem;
	}
	.list ul li:nth-child(3) p{
		margin-left: 1.04rem;
	}
	.subtotal{
		background: white;
		width: 100%;
		height: 0.933333rem;
		border-bottom: 1px solid #dddddd;
	}
	.subtotal p{
		float: right;
		line-height: 0.933333rem;
		font-size: 0.386667rem;
		margin-right: 0.36rem;
		color: #ca3232;
	}
	.delivery{
		margin-top:0.266667rem; 
		width: 100%;
		height: 1.186667rem;
		background: white;
		border-top: 1px solid #dddddd;
		border-bottom: 1px solid #dddddd;
	}
	.delivery ul{
		width: 100%;
		height: 1.186667rem;
		display: flex;
		justify-content: space-between;
	}
	.delivery ul li:nth-child(1){
		color: #999999;
		font-size: 0.373333rem;
		line-height: 1.186667rem;
		margin-left: 0.36rem;
	}
	.delivery ul li:nth-child(2){
		font-size: 0.36rem;
		line-height: 1.186667rem;
		margin-right: 0.36rem;
	}
	.footer{
		width: 100%;
		height:1.293333rem;
		background: white;
		position: fixed;
		bottom: 0;
		z-index: 10000;
	}
	.footer ul{
		width: 100%;
		height:1.293333rem;
		display: flex;
		justify-content: space-between;
	}
	.footer ul li:nth-child(1){
		font-size: 0.4rem;
		color: #ca3232;
		line-height: 1.293333rem;
		margin-left: 0.333333rem;
	}
	.footer ul li:nth-child(2) button{
		width: 2.933333rem;
		height: 1.266667rem;
		border:none;
		background: #ca3232;
		color:white; 
		font-size: 0.426667rem;
	}
</style>

