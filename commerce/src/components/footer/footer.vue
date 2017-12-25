<template>
  <div id="app">
				<ul>
					<li @click="gouwu()">
						<router-link to="/tab1">
							<img :src="Img1" alt="" />
							<p :class="{'active':activeA}">购物</p>
						</router-link>
					</li>
					<li @click="gouwucart()">
							<img :src="Img2" alt="" />
							<p :class="{'active':activeB}">购物车</p>
					</li>
					<li @click="guanli()">
						<router-link to="/tab3">
							<img :src="Img3" alt="" />
							<p :class="{'active':activeC}">店铺管理</p>
						</router-link>
					</li>
					<li @click="geren()">
							<img :src="Img5" alt="" />
							<p :class="{'active':activeD}">个人中心</p>
					</li>
				</ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
     return {
      activeTab: 'tab1',
      username:"",
      Img1:"./src/components/footer/img/nav_active_1.jpg",
      Img2:"./src/components/footer/img/nav_init_2.jpg",
      Img3:"./src/components/footer/img/nav_init_3.jpg",
      Img5:"./src/components/footer/img/nav_init_5.jpg",
      activeA:true,
      activeB:false,
      activeC:false,
      activeD:false
    }
  },
  mounted(){
  	this.username=sessionStorage.getItem("username");
  },
  methods:{
  	handleTabChange (val) {
      this.activeTab = val
    },
    geren(){
    	this.Img5="./src/components/footer/img/nav_active_5.jpg"
    	this.Img1="./src/components/footer/img/nav_init_1.jpg"
    	this.Img2="./src/components/footer/img/nav_init_2.jpg"
    	this.Img3="./src/components/footer/img/nav_init_3.jpg"
    	if(this.username==null){
    		this.$router.push('/Ready');
    	}else if(this.username!=null){
    		this.$router.push('/tab4');
    	}
    	this.activeA=false;
    	this.activeB=false;
    	this.activeC=false;
    	this.activeD=true;
    },
    gouwucart(){
    	this.Img2="./src/components/footer/img/nav_active_2.jpg"
    	this.Img1="./src/components/footer/img/nav_init_1.jpg"
    	this.Img3="./src/components/footer/img/nav_init_3.jpg"
    	this.Img5="./src/components/footer/img/nav_init_5.jpg"
    	if(this.username==null){
    		this.$router.push('/Ready');
    	}else if(this.username!=null){
    		this.$router.push('/tab2');
    	}
    	this.activeA=false;
    	this.activeB=true;
    	this.activeC=false;
    	this.activeD=false;
    },
    gouwu(){
    	this.Img1="./src/components/footer/img/nav_active_1.jpg"
    	this.Img2="./src/components/footer/img/nav_init_2.jpg"
    	this.Img3="./src/components/footer/img/nav_init_3.jpg"
    	this.Img5="./src/components/footer/img/nav_init_5.jpg"
    	this.activeA=true;
    	this.activeB=false;
    	this.activeC=false;
    	this.activeD=false;
    },
    guanli(){
    	this.Img3="./src/components/footer/img/nav_active_3.jpg"
    	this.Img1="./src/components/footer/img/nav_init_1.jpg"
    	this.Img2="./src/components/footer/img/nav_init_2.jpg"
    	this.Img5="./src/components/footer/img/nav_init_5.jpg"
    	this.activeA=false;
    	this.activeB=false;
    	this.activeC=true;
    	this.activeD=false;
    }
  }
}
</script>

<style scoped="scoped">
	#app{
		width: 100%;
		height:1.353333rem;
		position: fixed;
		bottom: 0rem;
		border-top:1px solid #cccccc;
		background: #FFFFFF;
		z-index: 1000;
		font-weight: bold;
		font-family: "微软雅黑";
	}
	#app ul{
		width: 100%;
		height:1.293333rem;
		display:flex;
		text-align: center;
		align-items: center;
	}
	#app ul li{
		width: 25%;
		margin-top:0.133333rem;
	}
	#app ul li p{
		color:#bbbbbb;
	}
	#app ul li img{
		width: 0.533333rem;
		height:0.533333rem;
	}
	#app ul li .active{
		color:#FF6000;
	}
</style>

