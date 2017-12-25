<template>
  <div id="app">
   <div class="leading">
   	<div class="top">
   		<div class="left">本周主打</div>
   		<router-link to='/Woche'>
   		<div class="right">更多主打<span>＞</span></div>
   	</router-link>
   	</div>
   	<div class="bottom" >
   		<div class="lefts" @click='gets(index)' v-for='(data,index) in arr'><router-link to='/details'>
   			<div>
   				<p>{{data.goodsname}}</p>
   				<p class="orange">{{data.description}}</p>
   			</div>
   				<img v-lazy="data.pic0"/></router-link>			
   		</div>
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
    	// 定义空数组
    	arr:[],
    	num:4,
    	limit:'',
    	page:1,
    	id:''
    }
  },
  // 创建之前
  created(){
  	// 地址
  	let url='http://114.55.249.153:8028/goods/list?page=1&limit='+this.num;
  	// 获取数据
  	axios.get(url).then(res=>{
  		// 把数据渲染到页面上
  		this.arr=res.data.weekRecommend;
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
  		 localStorage.setItem("goodsname",this.arr[id].goodsname);
  		 localStorage.setItem("description",this.arr[id].description);
  		 localStorage.setItem("pic0",this.arr[id].pic0);
  	}
   
  }
}
</script>

<style scoped="scoped">
#app{
    font-family: "微软雅黑";
  }
	.leading{
		margin-top: 0.266666rem;
		width: 100%;
		height: 6.64rem;
		background: #fff;
		border:0.013333rem solid #dddddd ;
		border-left: none;
		border-right: none;
    	font-weight: bold;

	}
	a{
		color: #333333;
	}
	.leading .top{
		height: 1.06rem;
		width: 100%;
		line-height:1.06rem;
		border-bottom:0.013333rem solid #dddddd ;
		font-size: 0.373333rem;
	}
	.leading .top .left{
		float: left;
		width: 2.16rem;
		text-align: center;
		color: #ca3232;
		border-bottom: 0.013333rem solid #ca3232;
	}
	.leading .top .right{
		float: right;
		width: 2.306666rem;
		text-align: center;
		color: #999;
	}
	.leading .top .right span{
		color: #ca3232;
	}
	.leading .bottom{
		height: 5.6rem;
		width: 100%;
		display: flex;
	}
	.leading .bottom .lefts:nth-of-type(1){
		border-right: 0.013333rem solid #ddd;
		height: 99%;
		width: 35%;
		padding: 0.3rem 0.3rem 0.3rem 0.4rem;
	}
	.leading .bottom .lefts:nth-of-type(1) div{
		height: 1.16rem;
		width:2.666667rem;
	}
	.orange{
		color: #ffa23f;
		margin-top: 0.133333rem;
		white-space: nowrap;
		overflow: hidden;
	}
	.leading .bottom .lefts:nth-of-type(1) img{
		width: 2.666667rem;
		height: 2.666667rem;
		margin-top: 1.066667rem;
	}
	.leading .bottom .lefts:nth-of-type(2){
		height: 2.266667rem;
		width: 65%;
		padding: 0.3rem 0.3rem 0.3rem 0.3rem;
		position: absolute;
		margin-left: 3.5rem;
		border-bottom:1px solid #ddd;
	}
	.leading .bottom .lefts:nth-of-type(2) div{
		height: 1.16rem;
		float: left;
		width: 2.8rem;
	}
	.leading .bottom .lefts:nth-of-type(2) img{
		width: 1.813333rem;
		height: 1.7rem;
		float: right;
	}
	.leading .bottom .lefts:nth-of-type(3){
		height: 3.333333rem;
		width: 32%;
		padding: 0.2rem 0.3rem 0.2rem 0.3rem;
		border-right:0.013333rem solid #ddd;
		position: absolute;
		margin-top: 2.266667rem;
		margin-left: 3.5rem;
	}
	.leading .bottom .lefts div:nth-of-type(3){
		height: 0.693333rem;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	.leading .bottom .lefts:nth-of-type(3) img{
		width: 1.466667rem;
		margin-top: 0.2rem;
		margin-left: 0.933333rem;
	}
	.leading .bottom .lefts:nth-of-type(4){
		height: 3.333333rem;
		width: 33%;
		padding: 0.2rem 0.3rem 0.2rem 0.3rem;
		position: absolute;
		margin-top: 2.266667rem;
		margin-left: 6.666667rem;
	}
	.leading .bottom .lefts:nth-of-type(4) div{
		height: 0.693333rem;
	}
	.leading .bottom .lefts:nth-of-type(4) img{
		width: 1.466667rem;
		margin-top: 1rem;
		margin-left: 1rem;
	}
	
	
	
</style>
