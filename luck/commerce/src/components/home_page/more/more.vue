<template>
  <div id="app">
  	<div class="recommend">
  		<div class="left"></div>
  		<div class="center">为您推荐</div>
  		<div class="right"></div>
  	</div>
    <div class="demo-infinite-container">
   <div class="box" v-for='(data,index) in arr' @click='gets(index)'>
    <router-link to='/details'>
   	<div class="imgs">
   		<img v-lazy="data.pic0"/>
   	</div>
   	<div class="font">
   		<div class="left">
        <p>{{data.goodsname}}</p>
   			<p>保税区</p>
   		</div>
   		<div class="right">
        <p>￥{{data.price}}</p>
   			<p>￥{{data.parameter}}</p>
   		</div>
   	</div>
    </router-link>
   </div>
    <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
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
      num:3,
      loading: false,
      scroller: null
    }
  },
  mounted () {
    this.scroller = this.$el
  },
  // 渲染数据
  created(){
    let url="http://114.55.249.153:8028/goods/list?page=1&limit=3";
    axios.get(url).then(res=>{
      this.arr=res.data.recommendList;
      this.bool=true;
       this.arr.sort((a,b)=>{
        var x=a.id;
        var y=b.id;
          return this.bool==true?x-y:y-x;
      })
    })
  },
 methods:{
  // 传入id
    gets(id){
      // 把数据设置到localStorage里
      localStorage.setItem("pic0",this.arr[id].pic0);
      localStorage.setItem("parameter",this.arr[id].parameter);
      localStorage.setItem("goodsname",this.arr[id].goodsname);
      localStorage.setItem("price",this.arr[id].price);
    },
    loadMore () {
      this.loading = true;
      setTimeout(() => {
        let url="http://114.55.249.153:8028/goods/list?page=1&limit="+this.num;
    axios.get(url).then(res=>{
      this.arr=res.data.recommendList;
      this.bool=true;
       this.arr.sort((a,b)=>{
        var x=a.id;
        var y=b.id;
          return this.bool==true?x-y:y-x;
      })
       this.num += 3;
        this.loading = false;
    })
      }, 2000)

    }
  }
}
</script>

<style scoped="scoped">
a{
  color: #333333;
}
  #app{
    font-weight: bold;
    font-family: "微软雅黑";
  }
	.recommend{
		padding:0.266666rem;
		width: 100%;
		display: flex;

	}
	.recommend .left, .recommend .right{
		background: #cccccc;
		width: 40%;
		height: 0.04rem;
		margin-top: 0.2rem;
	}
	.recommend .center{
		color: #999999;
		padding: 0 0.266666rem;
	}
 .box{
 	width: 100%;
 	height: 6.133333rem;
 	padding: 0.133333rem;
 	background: #fff;
 	border-top: 0.013333rem solid #ddd;
 }
 .box .imgs,img{
 	height: 4.266666rem;
 	width: 100%;
 }
 .box .font{
 	width: 100%;
 	height: 1.226666rem;
 	margin: 0.253333rem 0;
 	
 }
 .box .left{
 	float: left;
 	width: 70%;
 	height:1.333333rem ;
 	border-right:0.013333rem solid #ddd ;
 	padding: 0.066666rem  0.133333rem;
 }
 .box .left p:nth-of-type(1){
 	font-size: 0.373333rem;
 		font-weight: bold;
 }
 .box .left p:nth-of-type(2){
 	font-size: 0.266666rem;
 	padding: 0.02rem 0;
 	width: 25%;
 	text-align: center;
 	border: 0.013333rem solid #f38873;
 	border-radius: 0.173333rem;
 	color: #f38873;
 	margin: 0.133333rem 0;
 }
 .box .right{
 	margin-top: 0.133333rem;
 	float: right;
 	padding: 0 0.133333rem 0 0;
 }
 .box .right p:nth-of-type(1){
 	font-size: 0.373333rem;
 	color: #ca3232;
 	font-weight: bold;
 }
 .box .right p:nth-of-type(2){
 	font-size: 0.266666rem;
 	color: #ddd;
 	text-indent:10px;
 	text-decoration:line-through;
 }
</style>
