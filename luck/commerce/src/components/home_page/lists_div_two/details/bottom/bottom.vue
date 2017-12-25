<template>
  <div id="app">
  	<div class="bottom">
      <div>
        <p><img src="../../../../../assets/images/details/details_54.jpg"/></p>购物车</div>
      <div>
        <p><img src="../../../../../assets/images/details/details_51.png" id='img'/></p>收藏</div>
      <div @click='gouwu()'>加入购物车</div>
  		<div @click='purchase()'>立即购买</div>
  	</div>
    <div class="background" v-if='shows'>
    <div class="box" >
     <div class="box_s">
      <img v-lazy="pic0" class="left">
      <div class="right">
        <p>{{goodsname}}</p>
        <p class="text">￥{{price}}</p>
      </div>
      <div class="close" @click='close()'>x</div>
    </div>
    <div class="alert">
        <p class="number">购买数量</p>
        <p class="buttons">
          <button @click='jian()'>-</button>
          <input type="text" value="1" id="inp">
          <button @click='jia()'>+</button>
        </p>
      </div>
      <div class="ok" @click='urteilen1'>
          确定
      </div>
    </div>
   </div>
    <div class="background" v-if='show'>
    <div class="box" >
     <div class="box_s">
      <img v-lazy="pic0" class="left">
      <div class="right">
        <p>{{goodsname}}</p>
        <p class="text">￥{{price}}</p>
      </div>
      <div class="close" @click='close()'>x</div>
    </div>
    <div class="alert">
        <p class="number">购买数量</p>
        <p class="buttons">
          <button @click='jian()'>-</button>
          <input type="text" value="1" id="inp">
          <button @click='jia()'>+</button>
        </p>
      </div>
      <div class="ok" @click='urteilen'>
          确定
      </div>
    </div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show:false,
      // 空字符串
      pic0:"",
      goodsname:"",
      price:"",
      shows:false,
      username:''
    }
  },
  methods:{
    // 点击打开/显示
    purchase(){
      this.show=true;
    },
    gouwu(){
      this.shows=true;
    },
    // 点击关闭
    close(){
      this.show=false;
      this.shows=false;
    },
    urteilen1(){
      if(this.username==null){
        this.$router.push('/Ready');
      }else if(this.username!=null){
        this.$router.push('/tab2');
      }
    },
    urteilen(){
      if(this.username==null){
        this.$router.push('/Ready');
      }else if(this.username!=null){
        this.$router.push('/order_form');
      }
    },
    // 减--
    jian(){
       if(inp.value <= 0) {
                inp.value = 0;
            } else {
                inp.value = parseInt(inp.value) - 1;
            }
    },
    // 加++
    jia(){
      inp.value = parseInt(inp.value) + 1;
    }
  },
  mounted(){
    this.username=sessionStorage.getItem("username");
  },
  created(){
    // 获取设置的数据
      let pic0=localStorage.getItem("pic0");
      this.pic0=pic0;
      let goodsname=localStorage.getItem("goodsname");
      this.goodsname=goodsname;
      let price=localStorage.getItem("price");
      this.price=price;
      localStorage.setItem("pic0",pic0);
      localStorage.setItem("goodsname",goodsname);
      localStorage.setItem("price",price);
    }

}
</script>

<style scoped="scoped">
.background{
  width: 100%;
  height: 100vh;
  background:rgba(33,33,33,0.5);
  z-index: 99999999;
  position: fixed;
  bottom: 0;
}
.ok a{
  color: #fff;
}
.buttons{
  float:right;
  margin-top: 0.6rem;
  font-weight: bold;
}
.text{
  color:#ca3232;
}
.box_s{
  width:100%;
  height:2.933333rem;
  background:#fff;
  border-bottom:0.013333rem solid #ddd;
}
.box{
  position:fixed;
  width:100%;
  z-index:9999999999999;
  bottom:0;
}
.number{
  font-size:0.4rem;
  color:#828282;
  float:left; 
  margin-top: 0.666667rem;
}
#inp{
  width:1.333333rem;
  height:0.8rem;
  border:0;
  background:#e6e6e6;
  text-align: center;
}
.bottom{
	width: 100%;
	height:1.466667rem;
	border-top: 0.026667rem solid #ddd;
	position: fixed;
	bottom: 0;
	z-index: 999999;
  color: #cccccc;
}
 .bottom div:nth-of-type(1){
  width: 1.733333rem;
  border-right: 1px solid #ddd;
  text-align: center;
  float: left;
  height: 100%;
  background: #fff;
  padding: 0.08rem 0;
}
.bottom div:nth-of-type(2){
  width: 1.733333rem;
  text-align: center;
  float: left;
   height: 100%;
  background: #fff;
  padding: 0.08rem 0;


}
.bottom div:nth-of-type(3){
  width: 3.466667rem;
  text-align: center;
  float: left;
  background: #ff6060;
   height: 100%;
   color: #fff;
   font-size: 0.48rem;
   font-family: '微软雅黑';
   line-height: 1.466667rem;
}
.bottom div:nth-of-type(4){
  width: 3.066667rem;
  text-align: center;
  float: right;
  background: #ca3232;
   height: 100%;
   color: #fff;
   font-size: 0.48rem;
    line-height: 1.466667rem;
   font-family: '微软雅黑';
}
.bottom img:nth-of-type(1){
  width: 1.12rem;
}
.bottom #img{
  width: 0.693333rem;
}
.ok{
  width:100%;
  height:1.266667rem;
  background:#ca3232;
  text-align:center;
  line-height:1.266667rem;
  color:#fff;
  font-size:0.48rem;
}
button{
  background: #e6e6e6;
  width: 0.8rem;
  height: 0.8rem;
  border:0;

}
button:nth-of-type(1){
  border-bottom-left-radius:0.133333rem;
  border-top-left-radius: 0.133333rem;
}
button:nth-of-type(2){
  border-bottom-right-radius:0.133333rem;
  border-top-right-radius: 0.133333rem;
}

button:hover{
  background: #f7f7f7;
}
.close{
  position:absolute;
  width:0.666667rem;
  height:0.666667rem;
  border-radius:0.666667rem;
  border:0.013333rem solid #000;
  text-align:center;
  line-height:0.6rem;
  margin-left:9rem;
  margin-top:0.3rem;
}
.alert{
  width:100%;
  height:1.866667rem;
  background:#fff;
  padding:0 0.266667rem 0 0.533333rem;
  font-family:'微软雅黑';
}
.right{
  float:right;
  font-size:0.346667rem;
  width:4.986667rem;
  margin-top:0.733333rem;
  margin-right:1.333333rem;
}
.left{
  float:left;
  position:absolute;
  margin-top:-0.533333rem;
  width:2.8rem;
  margin-left:0.533333rem;
}
</style>
