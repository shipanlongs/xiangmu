<template>
  <div id="app">
    <div class="header">
    <ul>
    	<li><h1>购物车</h1></li>
    	<li>
    		<router-link :to="{path:'/compile',query:{add:this.$route.query.add}}">
    			<button>编辑</button>
    		</router-link>
    	</li>
    	<li><img src="../../assets/shopping_Car/购物车_03.jpg"/></li>
    </ul>
    </div>
    <!--开头单选按钮部分-->
    <div class="check_all">
    	<ul>
    		<li>
    			<input type="checkbox"  id="check" style="display:none;">
    			<label for="check" @click="spot()" :class="{active:isCctive,active_block:isDctive}" name="top">	
    			</label>
    		</li>
    		<li>&nbsp;&nbsp;{{name}}</li>
    	</ul>
    </div>
    <!--主体-->
    <div class="subject" v-for="(data,index) in arr">
    	<ul>
    		<li>
    			
    			<label for="check" @click="spot_two(index)" :class="{active:isCctive,active_block:isDctive}" name="ming"> 
    				<input type="checkbox" id="check" style="opacity:0;">
    			</label>
    		</li>
    		<li><div><img v-lazy="data.pic0"></div></li>
    		<li>
    			<p>{{data.goodsname}}</p>
    			<h2>￥{{data.prive}}</h2>
    			<h5>￥{{data.parameter}}</h5>
    			<div>
    				<!--左按钮-->
    				<button class="START_TQVault">-</button><input class="cart-count" v-model="num[index]"/>
    				<button class="Start_Titan">+</button>
    			</div>
    		</li>
    	</ul>
    </div>
    <div class="subject">
    	<ul>
    		<li>
    			
    			<label for="check" @click="spot_two(index)" :class="{active:isCctive,active_block:isDctive}" name="ming"> 
    				<input type="checkbox" id="check" style="opacity:0;">
    			</label>
    		</li>
    		<li><div><img v-lazy="pic0"></div></li>
    		<li>
    			<p>{{goodsname}}</p>
    			<h2>￥{{price}}</h2>
    			<h5>￥{{parameter}}</h5>
    			<div>
    				<!--左按钮-->
    				<button class="START_TQVault">-</button><input class="cart-count"/>
    				<button class="Start_Titan">+</button>
    			</div>
    		</li>
    	</ul>
    </div>
    <!--合计-->
    <div class="subtotal">
    	<ul>
    		<li>小计￥{{tal}}</li>
    	</ul>
    </div>
    <!--分割部分-->
    <div class="cut_off">
    	<ul>
    		<li></li>
    		<li>您可能还想要</li>
    		<li></li>
    	</ul>
    </div>

    <div class="foot">
    	<ul>
    	  <li><div><img src="../../assets/foot_03.jpg" height="271" width="249"></div></li>
    	  <li><div><img src="../../assets/shopping_Car/购物车_07.jpg"></div></li>
    	</ul>	
    </div>

    <div class="payment">
    	<ul>
    		<li>
    			<label for="check" :class="{active:isCctive,active_block:isDctive}" name="all" @click="check_all()">
    				<input type="checkbox" name="fu" id="check" style="opacity:0;">
    			</label>
    		</li>
    		<li><p>全选</p></li>
    		<li><p>合计：￥{{tal}}<p><span class="freight">(不包含运费)</span></p></p></li>
    		<li>
    			<router-link to="/order_form">
    				<button>去付款</button>
    			</router-link>
    		</li>
    	</ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
var num = null;
export default {
  name: 'app',
  data () {
    return {
     	cont:"",
     	name:"洋玩意总店",
     	isCctive:true,
     	isDctive:false,
     	arr:[],
     	prive:"",
     	num:null,
     	price:'',
     	pic0:'',
     	goodsname:'',
     	parameter:''
    }
  },
  computed:{
  	tal:function(){
  		var tal = 0;
  		for(var i in this.arr){
  			if(this.arr[i].check == 1){
  			tal+=this.arr[i].cont*(this.arr[i].pricve)
  			}
  		}
  		return tal;
  	}
  },
   created(){
      axios.get("./src/assets/JSONs/shopping_car.json").then((res)=>{
        this.arr=res.data;
        if(this.$route.query.add){
        	this.num = this.$route.query.add;
        }else{
        	this.num = [1,1]
        }
      })
      let pic0=localStorage.getItem("pic0");
      this.pic0=pic0;
      let goodsname=localStorage.getItem("goodsname");
      this.goodsname=goodsname;
      let price=localStorage.getItem("price");
      this.price=price;
      let parameter=localStorage.getItem('parameter');
      this.parameter=parameter;
  },
methods:{
	spot(){
		
	},
	spot_two(index){
		if(this.arr[index].check!=1){
			document.getElementsByName('ming')[index].className="active_block";
			this.arr[index].check=1;
		}else if(this.arr[index].check==1){
			document.getElementsByName('ming')[index].className="active";
			this.arr[index].check=0;
		}
	},
	
    check_all(){
    	 if(document.getElementsByName('all')[0].className!="active_block"){
          document.getElementsByName('all')[0].className="active_block";
          document.getElementsByName('top')[0].className="active_block";
          for(var i in this.arr){
    	  document.getElementsByName('ming')[i].className="active_block";
          this.arr[i].check=1;
         }
       }else if(document.getElementsByName('all')[0].className=="active_block"){
          document.getElementsByName('all')[0].className="active";
          document.getElementsByName('top')[0].className="active";
          for(var i in this.arr){
     	  document.getElementsByName('ming')[i].className="active";
          this.arr[i].check=0;
          
         }
       }
    }
  }
}
</script>

<style scoped="scoped">
	.active{
		background: url(../../assets/touming.jpg)no-repeat;
	}
	.active_block{
		background: url(../../assets/new.jpg)no-repeat;
	}
	.header{
		width: 100%;
		height: 1.24rem;
		position: fixed;
		top: 0;
		background: white;
		z-index: 1000000000;
		outline: initial;
	}
	.header ul{
		width: 100%;
		height: 1.24rem;
		display: flex;
		align-items: center;
		text-align: center;
		border-bottom: 1px solid #ca3232;
	}
	.header ul li:nth-child(1){
		width: 72%;
	}
	.header ul li:nth-child(2){
		width: 18%;
	}
	.header ul li h1{
		margin-left: 3.133333rem;
	}
	.header ul li button{
		width: 1.186666rem;
		height: 0.653333rem;
		background:white;
		font-size: 0.36rem;
		color: #8c8c8c;
		border: none;
		border-radius: 0.133333rem;
		border: 1px solid #666666;
		outline: initial;
	}
	.header ul li:nth-child(3){
		width: 10%;
	}
	.header ul li img{
		width: 0.693333rem;
		height: 0.653333rem;
		margin-top: 0.133333rem;
	}
	.check_all{
		width: 100%;
		height: 1.106666rem;
		border-bottom: 1px solid #dddddd;
	}
	.check_all ul{
		width: 100%;
		height: 1.106666rem;
		display: flex;
		align-items: center;
	}
	.check_all ul li:nth-child(1) label{
		display: block;
		width: 0.573333rem;
		height: 0.598333rem;
		background-size: 100%;
		margin-left: 0.266667rem;
	}
	.check_all ul li:nth-child(2){
		width: 90%;
		font-size: 0.36rem;
	}
	.subject{
		width: 100%;
		height: 3.146666rem;
	}
	.subject ul{
		width: 100%;
		height: 3.146666rem;
		display: flex;
		align-items: center;
		text-align: center;
	}
	.subject ul li:nth-child(1) label{
		width: 0.573333rem;
		height: 0.673333rem;
		display: block;
		background-size: 100%;
		margin-left: 0.266667rem;
	}

	.subject ul li:nth-child(2){
		margin-left: 0.133333rem;
		width: 25%;
		border: 1px solid #dddddd;
	}
	.subject ul li img{
		width: 1.293333rem;
		height: 2.093333rem;
		margin-top: 0.133333rem;
	}
	.subject ul li:nth-child(3){
		width: 53%;
		margin-left: 0.253333rem;
	}
	.subject ul li:nth-child(3) h2{
		width: 35%;
		color: #ca3232;
	float: left;
	}
	.subject ul li:nth-child(3) h5{
		width: 30%;
		line-height: 0.666666rem;
		height: 0.706666rem;
		float: left;
		color: #bbbbbb;
		text-decoration: line-through;
	}
	.subject ul li p{
		font-size: 0.333333rem;
	}
	.subject ul li:nth-child(3) div{
		width: 60%;
		float: left;
	}
	.subject ul li:nth-child(3) div button{
		width: 0.826666rem;
		height: 0.826666rem;
	}
	.subject ul li:nth-child(3) div input{
		width: 1.346666rem;
		height: 0.826666rem;
		background: #e6e6e6;
		border: none;
		text-align: center;
		margin-left: 0.04rem;
		margin-right: 0.04rem;
	}
	.START_TQVault{
		border-top-left-radius: 0.2rem;
		border-bottom-left-radius: 0.2rem;
		background: #f7f7f7;
		color: #999999;
		border: none;
	}
	.Start_Titan{
		border-top-right-radius: 0.2rem;
		border-bottom-right-radius: 0.2rem;
		background: #e6e6e6;
		color: #999999;
		border: none;
	}
	.subtotal{
		width: 100%;
		height: 0.92rem;
		display: flex;
		align-items: center;
		border-top: 1px solid #dddddd;
	}
	.subtotal ul li:nth-child(1){
		margin-left: 0.933333rem;
		width: 100%;
		font-size: 0.32rem;
		color: #ca3232;
	}
	.cut_off{
		width: 100%;
		height: 0.84rem;
		background: #f1f1f1;
	}
	.cut_off ul{
		width: 100%;
		height: 0.84rem;
		align-items: center;
		display: flex;
	}
	.cut_off ul li:nth-child(1){
		width: 35%;
		border-top: 0.013333rem solid #999999;
		margin-left: 0.213333rem;
	}
	.cut_off ul li:nth-child(2){
		width: 25%;
		text-align: center;
		height: 0.8rem;
		line-height: 0.9rem;
		color: #999999;
		font-size: 0.333333rem;
	}
	.cut_off ul li:nth-child(3){
		width: 35%;
		border-top: 0.013333rem solid #999999;
	}
	.payment{
		width:100%;
		height: 1.293333rem;
		background: #000;
		opacity: 0.8;
		position: fixed;
		bottom: 1.266666rem;
	}
	.payment ul{
		width: 100%;
		height: 1.293333rem;
		display: flex;
		align-items: center;
	}
	.payment ul li:nth-child(1) label{
		background-size: 100%;
		width:0.583333rem;
		height: 0.686667rem;
		display: block;
		margin-left: 0.266667rem;
	}
	
	.payment ul li:nth-child(2){
		width: 30%;
		margin-left: 0.173333rem;
	}
	.payment ul li:nth-child(2) p{
		color: white;
		font-size: 0.466666rem;
	}
	.payment ul li:nth-child(3){
		width: 35%;
		height: 0.666667rem;
		margin-bottom: 0.666667rem; 
	}
	.payment ul li:nth-child(3) p{
		height: 0.533333rem;
		color: white;
		font-size: 0.453333rem;
		margin-left: 0.5rem;
	}
	.payment ul li:nth-child(4){
		width: 25%;
	}
	.payment ul li:nth-child(4) button{
		width: 100%;
		height: 1.293333rem;
		background: #ca3232;
		border: none;
		color: white;
		font-size: 0.44rem;
	}
	.freight{
		margin-left: 0.566667rem;
		color: #717171;
		font-size: 0.346667rem;
	}
	.foot{
		width: 100%;
		height: 5.293333rem;
	}
	.foot ul{
		width: 100%;
		height: 5.293333rem;
		display: flex;
		align-items: center;
	}
	.foot ul li:nth-child(1){
		width: 43.1%;
		height: 4.293333rem;
		border: 1px solid #dddddd;
		margin-left: 0.386667rem;
		text-align: center;
	}
	.foot ul li:nth-child(1) div img{
		width: 3.32rem;
		height: 3.893333rem;
		margin-top: 0.266667rem;
	}
	.foot ul li:nth-child(2){
		width: 43.1%;
		height: 4.293333rem;
		border: 1px solid #dddddd;
		margin-left: 0.613333rem;
		text-align: center;
	}
	.foot ul li:nth-child(2) div img{
		width: 2.053333rem;
		height: 3.613333rem;
		margin-top: 0.333333rem;
	}
</style>
