<template>
  <div id="app">
    <div class="header">
    <ul>
    	<li><h1>购物车</h1></li>
    	<li>
    		<router-link :to="{path:'/tab2',query:{add:indexs}}">
    			<button>完成</button>
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
    		<li>{{name}}</li>
    	</ul>
    </div>
    <!--主体-->
<div class="empty">    
    <div class="subject" v-for="(data,index) in arr">
    	<ul>
    		<li>
    			<label for="check" @click="spot_two(index)" :class="{active:isCctive,active_block:isDctive}" name="ming"> 
    				<input type="checkbox" id="check" style="opacity:0;">
    			</label>
    		</li>
    		<li>
    			<div>
    				<img v-lazy="data.pic0">
    			</div>
    		</li>
    		<li>
    			<p>{{data.goodsname}}</p>
    			<div>
    				<!--左按钮-->
    				<button class="START_TQVault" v-on:click="subtract(index)">-</button><input class="cart-count" v-model="indexs[index]"/>
    				<button class="Start_Titan" v-on:click="add(index)">+</button>
    			</div>
    		</li>
    	</ul>
    </div>
 </div>
    <div class="payment">
    	<ul>
    		<li>
    			<label for="check" :class="{active:isCctive,active_block:isDctive}" name="all" @click="check_all()">
    				<input type="checkbox" name="fu" id="check" style="opacity:0;">
    			</label>
    		</li>
    		<li>全选</li>
    		<li><button>移至收藏夹</button></li>
    		<li>
    			<button @click="del()">删除</button>
    		</li>
    	</ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name:"洋玩意总店",
      isCctive:true,
      isDctive:false,
      arr:[],
      arr2:[],
      indexs:[]
    }
  },
  created(){

      axios.get("./src/assets/JSONs/shopping_car.json").then((res)=>{
        this.arr=res.data;
        this.indexs=[];
        for(var i=0;i<this.arr.length;i++){
        	if(this.$route.query.add){
        	this.indexs[i] = this.$route.query.add[i];
        }else{
        	this.indexs[i] = 1
        }
       
        	 }

      })

  },
  methods:{
  	add(index){	                 
          var adds = this.indexs[index]++;
          this.indexs[index] = this.indexs.splice(index,1,adds)
          console.log(this.indexs[index])
         
      },
       subtract(index){
        if(this.indexs[index] <= 1){                                                       
   		return false;
       }
      var subtracts = this.indexs[index]--;
      this.indexs[index] = this.indexs.splice(index,1,subtracts)
       console.log(this.indexs[index])
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
    },
    del(index){
    	for(var index in this.arr){
        if(document.getElementsByName('ming')[index].className=='active_block'){
          this.arr.splice(index,1);
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
		z-index: 10000000;
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
	.header ul li:nth-child(2) button{
		background: #ca3232;
		border: none;
		color: white;
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
	.check_all ul li img{
		width: 0.573333rem;
		height: 0.573333rem;
		margin-top: 0.066666rem;
		outline: none;
	
	}
	.check_all ul li:nth-child(1){
		width: 10%;
		text-align: center;
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
	.check_all_block{
		position: absolute;
		left: 0.213333rem;
	}
	.check_all_all{
		position: absolute;
		top: 0.24rem;
	}
	.subject{
		width: 100%;
		height: 3.146666rem;
		background: white;
	}
	.subject ul{
		width: 100%;
		height: 3.146666rem;
		display: flex;
		align-items: center;
		text-align: center;
	}
	.subject ul li:nth-child(1){
		width: 10%;
		text-align: center;
	}
	.subject ul li:nth-child(1) label{
		width: 0.573333rem;
		height: 0.673333rem;
		display: block;
		background-size: 100%;
		margin-left: 0.266667rem;
	}
	.subject ul li:nth-child(1) img{
		width: 0.6rem;
		height: 0.6rem;
	}
	.subject ul li input{
		width: 0.573333rem;
		height: 0.573333rem;
	}
	.subject ul li:nth-child(2){
		width: 25%;
		border: 1px solid #dddddd;
	}
	.subject ul li:nth-child(2) div{
		width: 2.426666rem;
		height: 2.4rem;
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
	
	
	.payment{
		width:100%;
		height: 1.293333rem;
		opacity: 0.8;
		position: fixed;
		bottom: 1.266666rem;
		background: white;
	}
	.payment ul{
		width: 100%;
		height: 1.293333rem;
		display: flex;
		align-items: center;
	}
	.payment ul li:nth-child(1){
		width: 8%;
	}
	.payment ul li:nth-child(1) img{
		width: 0.666667rem;
		height: 0.666667rem;
		margin-left: 0.133333rem;
	}
	.payment ul li:nth-child(2){
		width: 30%;
		font-size: 0.346667rem;
		margin-left: 0.066667rem;
	}
	.payment ul li:nth-child(1) input{
		width: 0.533333rem;
		height: 0.533333rem;
		margin-left: 0.266667rem;
	}
	.payment ul li:nth-child(1) label{
		background-size: 100%;
		width:0.583333rem;
		height: 0.686667rem;
		display: block;
		margin-left: 0.266667rem;
	}
	.payment ul li:nth-child(3){
		width: 33.2%;
	}
	.payment ul li:nth-child(3) button{
		width: 100%;
		height: 1.293333rem;
		background: #666666;
		border: none;
		color: white;
		font-size:0.413333rem; 
	}
	.payment ul li:nth-child(4){
		width: 29.3%;
	}
	.payment ul li:nth-child(4) button{
		width: 100%;
		height: 1.293333rem;
		background: #ff5400;
		color: white;
		font-size:0.413333rem; 
		border: none;
	}
	.freight{
		margin-left: 0.733333rem;
		color: #717171;
		font-size: 0.4rem;
	}
	.empty{
		width: 100%;
		height: 13.666667rem;
		background: #f1f1f1;
	}
</style>
