<template>
  <div id="app">
   	<div class="box">
   		<ul >
   			<li v-for='(data,index) in arr' @click='gets(index)'><router-link to='/abnehmen' >
   				<p><img v-lazy="data.img"/></p>
   				<p >{{data.li}}</p></router-link>
   			</li>
   		</ul>
   	</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      //定义一个空数组
      arr:[]
    }
  },
  //创建之前
  created(){
    //地址
    let url="./src/assets/json/lists.json";
    //获取它的数据
    axios.get(url).then(res=>{
    //把数据渲染到页面上
      this.arr=res.data
    })
  },
  methods:{
    // 点击事件
    gets(id){
      // 设置数组里的数据 并命名
       localStorage.setItem("lis",this.arr[id].li);
    }
  }
}
</script>

<style scoped="scoped">
#app{
    font-weight: bold;
    font-family: "微软雅黑";
  }
	.box{
		width: 100%;
		height: 5.2rem;
		background: #fff;
	}
  a{
    color: #777777;
  }
	.box ul li{
    width: 25%;
    float: left;
		text-align: center;
		font-size: 0.32rem;
    margin-top: 0.4rem;
	}
	.box li p:nth-of-type(1){
		height:1.333333rem ;
	}
	.box li img{
		width: 1.333333rem;
	}
	.box li p:nth-of-type(2){
		margin-top: 0.266667rem;
	}
</style>
