<template>
  <div id="app">
  	<div class="top">
      <p @click='back()'><img src="../../../../assets/images/images/family_03.jpg" style="width:0.386667rem;" /><span>返回</span></p>
      <h2>家庭套餐</h2>
      <p><img src="../../../../assets/images/images/family_05.jpg" style="width:0.746667rem;"/></p>
     </div>
      
  		<div class='hang'>
        <ul>
          <li v-for='data in arr'>
            <router-link to='/details'>
            <div class="imgs">
              <img v-lazy="data.pic0"/>
               <img v-lazy="data.pic1"/>
                <img v-lazy="data.pic2"/>
            </div>
            <div class="bottom">
              <div class="left">
                <p>{{data.goodsname}}</p>
                <button>保税区</button>
              </div>
              <div class="right">
                <p>￥{{data.price}}</p>
                <p>￥{{data.parameter}}</p>
              </div>
            </div></router-link>
          </li>
        </ul>  
      </div>
      
    <div class="gai">
      
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'app',
  data () {
    return {
      arr:[]
    }
  },
  created(){
    let url='http://114.55.249.153:8028/shopping/listByPage';
    axios.get(url).then(res=>{
      this.arr=res.data.data;
      // console.log(res.data.data)
      this.bool=true;
       this.arr.sort((a,b)=>{
        var x=a.id;
        var y=b.id;
          return this.bool==true?x-y:y-x
      })
    })
  },
  methods:{
    back(){
      window.history.back(-1);
    }
  }
}
</script>

<style scoped="scoped">
#app{
    font-weight: bold;
    font-family: "微软雅黑";
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
		background: #009cff;
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
  li{
  width: 100%;
  height: 5.066667rem;
  background: #fff;
  border-bottom: 0.013333rem solid #ddd;
  border-top: 0.013333rem solid #ddd;
  margin-bottom: 0.133333rem;


}
  .imgs{
  padding: 0.24rem 0.266667rem 0.333333rem 0;
  display: flex;
}
.imgs img{
  flex: 1;
  width: 2.946667rem;
  height: 2.946667rem;
  margin-left: 0.266667rem;
}
.bottom{
  width: 100%;
  height: 1.3rem;
  padding: 0 0.266667rem 0 0.266667rem;
   color: #000;

}
.bottom .left{
  float: left;
  width: 75%;
  height: 100%;
  border-right: 0.013333rem solid #ddd;
}
.bottom .left p:nth-child(1){
  font-size: 0.36rem;
  font-weight: bold;
}
.bottom .left button{
  background: #fff;
  padding: 0.066667rem 0.266667rem;
  border:0.013333rem solid red;
  border-radius: 0.133333rem;
  margin-top: 0.066667rem;
  color: red;

}
.bottom .right{
  float: right;
}
.bottom .right p:nth-child(1){
  color: red;
  font-size:0.346667rem;

}
.bottom .right p:nth-child(2){
  color: #ddd;
  text-decoration:line-through;
  
}
</style>
