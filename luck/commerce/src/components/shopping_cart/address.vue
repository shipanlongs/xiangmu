<template>
  <div id="app">
  	<div class="big_background">
    <div class="header">
    	<ul>
    		<li><img src="../../assets/hese_03.jpg" height="49" width="26"></li>
    		<li v-on:click="back()">返回</li>
    		<li>地址选择</li>
    		<li><img src="../../assets/shopping_Car/购物车_03.jpg"/></li>
    	</ul>
    </div>

    <div class="list">
    	<ul>
    		<li><input type="checkbox"></li>
	    	<li>
	    		<router-link to="/order_form">
	    		刘德华 18800001234
	    		<p>地址：历山大道888号</p>
	    		</router-link>
	    	</li>
    	</ul>	
    </div>
    <div class="list">
    	<ul>
    		<li><input type="checkbox"></li>
	    	<li>
	    		史盼龙 13756985657
	    		<p>地址：罗马帝国666号</p>
	    	</li>
    	</ul>	
    </div>
    <div class="list">
    	<ul>
    		<li><input type="checkbox"></li>
	    	<li>
	    		社会龙 14595784523
	    		<p>地址：平顶山108号</p>
	    	</li>
    	</ul>	
    </div>

    <div class="footer">
    	
    </div>

    <div class="btn">
    	<button>地址管理</button>
    </div>

</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
   methods:{
  	back(){
  		window.history.back(-1);
  	}
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
	.header ul li:nth-child(1) img{
		width: 0.333333rem;
		height: 0.613333rem;
		margin-left: 0.266667rem;
		margin-top: 0.066667rem;
	}
	.header ul li:nth-child(1){
		width: 8%;
	}
	.header ul li:nth-child(2){
		font-size: 0.44rem;
		
		font-family: "微软雅黑";
	}
	.header ul li:nth-child(3){
		width: 71%;
		font-size: 0.546667rem;
		font-weight: bold;
		text-align: center;

	}
	.header ul li:nth-child(4){
		width: 8%;
	}
	.header ul li img{
		width: 0.693333rem;
		height: 0.666667rem;
		margin-left: 0.373333rem;
	}
	.list{
		width: 100%;
		height: 2.013333rem;
		background: white;
		border-bottom:1px solid #dddddd;
	}
	.list ul{
		width: 100%;
		height: 2.013333rem;
		display: flex;
		align-items: center;
	}
	.list ul li:nth-child(1){
		width: 10%;
	}
	.list ul li:nth-child(1) input{
		margin-left: 0.253333rem;
		width: 0.56rem;
		height: 0.56rem;
	}
	.list ul li:nth-child(2){
		width: 50%;
		font-size:0.426667rem;
		font-weight: bold;
		font-family: "微软雅黑";
	}
	.list ul li:nth-child(2) a{
		color: #000;
	}
	.list ul li:nth-child(2) p{
		font-size: 0.346667rem;
		margin-top: 0.066667rem;
		color: #666666;
	}
	.footer{
		width: 100%;
		height: 1.293333rem;
		background: #f1f1f1;
		position: fixed;
		bottom: 0;
		z-index: 100;
	}
	.big_background{
		width: 100%;
		height: 15.333333rem;
		background: #f1f1f1;
	}
	
	.btn button{
		text-align: center;
		width: 7.893333rem;
		height: 1.093333rem;
		background: #ca3232;
		border: none;
		border-radius: 0.2rem;
		font-size: 0.4rem;
		color: white;
		font-family: "微软雅黑";
		margin-top: 0.613333rem;
		margin-left: 1.066667rem;
	}
</style>
