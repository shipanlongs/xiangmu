<template>
  <div id="app">
  	<div class="top">
      <p @click='back()'><img src="../../../../assets/images/Woche/Woche_03.jpg" style="width:0.386667rem;" /><span>返回</span></p>
      <h2>本周主打</h2>
      <p><img src="../../../../assets/images/Woche/Woche_05.jpg" style="width:0.746667rem;"/></p>
     </div>
     <div class="divs" v-for='(data,index) in arr'>
      
     	<div class="left">
     		<img v-lazy="data.pic0"/>
     	</div>
     	<div class="right"><router-link to='/details'>
     		     <p class="text_one">{{data.goodsname}}</p>
     		     <p class="text_two">￥{{data.price}}</p>
     		     <div class="text_three">
     		     	<p>市场价</p> 
     		     	<p class="text">￥{{data.parameter}}</p>
     		    </div>
     		     <div class="text_four">
     		     	<p>日本直销</p>
     		     	<p class="txt">118人购买</p>
     		     </div></router-link>
     		     <img src="../../../../assets/images/recommend/recommend_17.jpg" @click='click(index)'/>
     	</div>
     </div>
     <div class="gai">
     	
     </div>
       <img src="../../../../assets/images/gouwu_03.png" v-show='img' id='imgs'>
       <div style="width:100%;height:1.333333rem;"></div>
  </div>

</template>

<script>
import axios from 'axios';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      arr:[],
      img:false,
      goodsname:'',
      stock:'',
      sale_ty:'',
      price:'',
      status:''
    }
  },
  methods:{
    click(id){
        this.img=true;
        setTimeout(()=> {  
           this.img=false;
        }, 1800);
        const url='http://114.55.249.153:8028/goods/add'
           let obj = {
              stock:this.stock,
              goodsname: this.goodsname,
              price:this.price,
              sale_ty:this.sale_ty,
              status:this.status
            }
          axios.post(url,obj).then((res) => {
            // this.getList()
          })
        localStorage.setItem("pic0",this.arr[id].pic0);
      localStorage.setItem("goodsname",this.arr[id].goodsname);
      localStorage.setItem("price",this.arr[id].price);
      localStorage.setItem("parameter",this.arr[id].parameter);
    },
    back(){
      window.history.back(-1);
    },
    getList(){
      let url='http://114.55.249.153:8028/shopping/listByPage';
    axios.get(url).then(res=>{
      this.arr=res.data.data;
    })
    }
  },
  created(){
    this.getList()
  }
}
</script>

<style scoped="scoped">
#app{
    font-weight: bold;
  }
#imgs{
  position: absolute;
  top:50%;
  left:50%;
  width: 6.533333rem;
  height: 2.8rem;
  margin-left:-3.2rem;
  margin-top: -1.9rem;
  border:0.013333rem solid #ddd;
  border-radius: 0.266667rem;
}
#app{
  background: #f1f1f1;
  height: 15.333333rem;
}
.gai{
    width: 100%;
    height:1.466667rem;
    background: #f1f1f1;
    position: fixed;
    bottom: 0;
    z-index: 999;
  }
	.top{
		width: 100%;
		height:1.173333rem;
		background: #ca3232;
		position: fixed;
		top: 0;
		z-index: 9999999;
    color: #fff;
    padding: 0 0.173333rem 0 0.24rem;
	}
  .top p:nth-child(1){
    width: 30%;
    float: left;
    height: 0.266667rem;
  }
  .top h2{
    width: 40%;
    text-align: center;
    float: left;
    line-height: 1.173333rem;

  }
  span{
    position: absolute;
    padding: 0.4rem 0 0 0.066667rem;
    color: #fff;
  }
  .top p:last-child{
    width: 8%;
    float: right;
  }
  .top img{
    margin-top: 0.266667rem;
  }
  .divs{
  	height: 4.5rem;
  	width: 100%;
  	border-bottom: 0.013333rem solid #ddd;
  	padding: 0.24rem 0.213333rem 0.24rem 0.266667rem;
  	background: #fff;

  }
  .divs .left{
  	float: left;
  }
  .divs .left img{
  	width: 4.32rem;
    height: 4rem;
    border: 0.013333rem solid #ddd;
    padding: 0.466667rem 0.466667rem;
  }
   .divs .right{
  	float: right;
   
  }
  .divs .right{
  	width: 5.2rem;
  	padding: 0.106667rem 0 0 0.333333rem;
  }
  .divs .right img{
  	width: 1.066667rem;
  	float: right;
  }
  .divs .right .text_one{
  	width: 4.266667rem;
  	font-size: 0.346667rem;
  	font-weight: bold;
     color: #000;
  }
  .divs .right .text_two{
  	color: #ff7200;
  	font-size:0.453333rem;

  }
  .divs .right .text_three{
  	color: #999999;
  	font-size: 0.346667rem;
  	display: flex;
  	margin-top: 0.093333rem;
  }
  .divs .right .text{
  	text-decoration:line-through;
  	margin-left: 0.266667rem;
  }
  .divs .right .text_four{
  	font-size: 0.306667rem;
  	display: flex;
  	color: #f38873;
  	margin-top: 0.2rem;
  }
  .divs .right .text_four p:nth-child(1){
  	border:0.013333rem solid red;
  	padding: 0.026667rem 0.133333rem; 
  	border-radius: 0.133333rem;
  }
  .txt{
  	color: #bbbbbb;
  	margin-left: 0.2rem;
  }
</style>
