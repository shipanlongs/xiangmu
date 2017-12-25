<template>
  <div id="app">
   <div class="family_pack">
   	<div class="top">
   		<div class="left">家庭套装</div>
   		<router-link to="/family_skip">
   			<div class="right">更多实惠<span>＞</span></div>
   			</router-link>
   	</div>
   	<div class="bottom">
   		<div class="left" v-for='(data,index) in arr' @click='gets(index)'>
   			<router-link to='/details'>
		   				<p style="height:0.666667rem;">{{data.goodsname}} </p>
		   				<p id="blue" style="display:flex;margin-top:0.3rem;">
		   					<span style="color:#009cff;font-size:0.213333rem;">￥{{data.price}}</span>
		   					<span class="text">
		   					￥{{data.parameter}}
		   				</span>
		   					
		   				</p>
		   				<img v-lazy="data.pic0"/></router-link>  			
   		</div>
   	</div>
   	
   </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'app',
  data () {
    return {
    	// 定义空数组
    	arr:[],
    	page:'',
    	limit:'',
    	num:4
    }
  },
  created(){
    let url="http://114.55.249.153:8028/goods/list?page=1&limit="+this.num;
    axios.get(url).then(res=>{
      this.arr=res.data.homeRecommend;
     	this.bool=true;
     	 this.arr.sort((a,b)=>{
        var x=a.id;
        var y=b.id;
          return this.bool==true?x-y:y-x
      })
    })
  },
  methods:{
  	// 传入id
    gets(id){
    	// 设置数组里的img
    	localStorage.setItem("pic0",this.arr[id].pic0);
    	// 设置数组里的原价
    	localStorage.setItem("parameter",this.arr[id].parameter);
    	// 设置数组里的内容
    	localStorage.setItem("goodsname",this.arr[id].goodsname);
    	// 设置数组里的价格
    	localStorage.setItem("price",this.arr[id].price);

    	
    }
  }
}
</script>

<style scoped="scoped">
	#app{
    font-weight: bold;
    /*font-family: "微软雅黑";*/
  }
  a{
  	color: #333;
  }
	.family_pack{
		margin-top: 0.266666rem;
		width: 100%;
		height: 5.733333rem;
		background: #fff;
		border: 0.013333rem solid #ddd;
		border-left: none;
		border-right: none;
	}
	.family_pack .top{
		height: 1.06rem;
		width: 100%;
		line-height:1.06rem;
		border-bottom:0.013333rem solid #dddddd ;
		font-size: 0.373333rem;
	}
	.family_pack .top .left{
		float: left;
		width: 2.16rem;
		text-align: center;
	}
	.family_pack .top .right{
		float: right;
		width: 2.306666rem;
		text-align: center;
		color: #999999;
	}
	.family_pack .bottom{
		display: flex;
		width: 100%;
		height: 4.666666rem;
	}
	.family_pack .bottom div{
		width: 33%;
		border-right: 0.013333rem solid #ddd;
	}
	.family_pack .bottom div:last-child{
		border-right:none;
	}
	.family_pack .top .left{
		color: #009cff;
		border-bottom: 0.013333rem solid #009cff;
	}
	.family_pack .top .right span{
		color: #009cff;
	}
	.family_pack .bottom,.leading .bottom,.recommend .bottom{
		font-weight: bold;
		font-family: "微软雅黑";
		font-size: 0.32rem;
	}
	.family_pack .bottom .left{
		padding: 0.2rem 0.5rem 0.293333rem 0.3rem;
	}
	.family_pack .bottom img{
		width: 2.026666rem;
		height: 2.333333rem;
		margin-top: 0.3rem;
		margin-left: 0.4rem;
	}
	.text{
		text-decoration:line-through;
		color: #ddd;
		padding: 0 0 0 0.133333rem;
		font-size: 0.16rem;
	}
</style>
