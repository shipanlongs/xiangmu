<template>
  <div id="app">
   <div class="recommend">
   	<div class="top">
   		<div class="left">本月推荐</div>
   		<router-link to='/recommend'>
   		<div class="right">更多推荐<span>＞</span></div></router-link>
   	</div>
   	<div class="bottom">
   		<ul class="div_one" >
   				<li v-for='(data,index) in arr' @click='gets(index)'><router-link to='/details'>
   					<div style="float:left;">
   						<p>{{data.goodsname}}</p>
   						<p>{{data.description}}</p>
   					</div>
   					<img v-lazy="data.pic0" /></router-link>
   				</li>
   				
	   		</ul>
   		</div>
   		
   		</div>
   	</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'app',
  data () {
    return {
    	arr:[],
    	id:'',
    	page:'',
    	limit:'',
    	mun:4
    }
  },
  // 渲染数据
  created(){
  	let url='http://114.55.249.153:8028/goods/list?page=1&limlt='+this.num;
  	axios.get(url).then(res=>{
  		this.arr=res.data.monthRecommend;
  		this.bool=true;
     	 this.arr.sort((a,b)=>{
        var x=a.id;
        var y=b.id;
          return this.bool==true?x-y:y-x
      })
  	})
  },
   methods:{
    gets(id){
    	// 把数据设置到localStorage里
    	localStorage.setItem("goodsname",this.arr[id].goodsname);
    	localStorage.setItem("description",this.arr[id].description);
    	localStorage.setItem("pic0",this.arr[id].pic0);
    	
    }
  }
}
</script>

<style scoped="scoped">
#app{
    font-weight: bold;
    font-family: "微软雅黑";
  }
	.recommend{
		margin-top: 0.24rem;
		width: 100%;
		height: 6.826666rem;
		background: #fff;
		border: 0.013333rem solid #ddd;
		border-left: none;
		border-right: none;
	}
	 .top{
		height: 1.06rem;
		width: 100%;
		line-height:1.06rem;
		border-bottom:0.013333rem solid #dddddd ;
		font-size: 0.373333rem;
	}
	 .top .left{
		float: left;
		width: 2.16rem;
		text-align: center;
	}
	 .top .right{
		float: right;
		width: 2.306666rem;
		text-align: center;
		color: #999999;
	}
	 .top .left{
		color: #e38dff;
		border-bottom: 0.013333rem solid #e38dff;
	}
	.top .right span{
		color: #e38dff;
	}
	 .bottom{
		width: 100%;
		height: 5.733333rem;
		color: #333333;
		font-family: "微软雅黑";
		font-weight: bold;
		font-size: 0.293333rem;
		margin-top: 0.013333rem;
	}
	
	 .bottom .div_one{
		width: 100%;
		height: 100%;
	}
	.bottom .div_one li{
		width: 50%;
		float: left;
		height: 50%;
		padding: 0.266667rem 0.4rem;
	}
	.bottom .div_one li:last-child,.bottom .div_one li:nth-of-type(2){
		border-left:0.013333rem solid #ddd;
	}
	.bottom .div_one li:nth-of-type(3),.bottom .div_one li:last-child{
		border-top:0.013333rem solid #ddd;

	}
	a{
		color: #333333;
	}
	.bottom .div_one p:first-child{
		width: 2.2rem;
	}
	.bottom .div_one  p:last-child{
		color: #999999;
		width: 2.2rem;
		/*white-space: nowrap;*/
		overflow: hidden;
	}
	.bottom .div_one  img{
		float: right;
		width: 1.146666rem;
		height: 2.2rem;
		margin-left: 0.493333rem;
	}
	 
</style>
