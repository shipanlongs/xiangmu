<template>
  <div id="app">
    <div class="top">
      <p> <router-link to='/tab1' ><img src="../../../../assets/images/Woche/Woche_03.jpg" style="width:0.386667rem;" /><span>返回</span></router-link></p>
      <h2>新品上架</h2>
      <p><img src="../../../../assets/images/Woche/Woche_05.jpg" style="width:0.746667rem;"/></p>
     </div>
     <div class="sort">
       <ul>
         <li @click='Umsatz()'>销量</li>
         <li @click='Preis()'>价格</li>
       </ul>
       <div class="divs" v-for='data in arr'>
      <div class="left">
        <img v-lazy="data.img"/>
      </div>
      <div class="right">
             <p class="text_one">
               {{data.concat}}
             </p>
             <div class="text_three">
              <p class="text_two">￥{{data.money}}</p>
              <p class="text">￥{{data.yuanjia}}</p>
            </div>
            <p class="txt">{{data.ponper}}人购买</p>
             <div class="text_four">
              <p>保税区</p>
              <p>运费 ￥{{data.yunfai}}</p>
             </div>
      </div>
     </div>
     </div>
     <div class="gai">
      
     </div>
  </div>

</template>

<script>
import axios from "axios";
export default {
  name: 'app',
  data () {
    return {
      // 获取空数组
      arr:[],
      // 设置bool为false
      bool:false,
      data:[]
    }
  
  },
  methods:{
    // 销量
    Umsatz(){
      this.bool=!this.bool;
      // 数组排序
      this.arr.sort((a,b)=>{
        var x=a.ponper;
        var y=b.ponper;
          return this.bool==true?x-y:y-x
      })
    },
    // 价格
    Preis(){
      this.bool=!this.bool;
      // 数组排序
      this.arr.sort((a,b)=>{
        var x=a.money;
        var y=b.money;
          return this.bool==true?x-y:y-x
      })
    }
  },
  // 创建之前
  created(){
    // 地址
    let url="./src/assets/json/data.json";
    // 获取数据
    axios.get(url).then(res=>{
      // 把数据渲染到页面上
      this.arr=res.data
    })
  }
}
</script>

<style scoped="scoped">
#app{
    font-weight: bold;
    font-family: "微软雅黑";
  }
select{
  border:0;
}
.sort ul li:hover{
color: red;
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
  .sort ul{
    display: flex;
    height: 1.2rem;
    line-height: 1.2rem;
    background: #fff;
    font-size: 0.426667rem;
    border-bottom:0.013333rem solid #ddd;
    border-top:0.013333rem solid #ddd;

  }
  .sort ul li{
    flex: 1;
    text-align: center;
  }
  .sort ul li:nth-child(1){
    border-right:0.013333rem solid #ddd;
  }
   .divs{
    height: 3.333333rem;
    width: 100%;
    border-bottom: 0.013333rem solid #ddd;
    padding: 0.266667rem;
    background: #fff;
  }
  .divs .left{
    float: left;
  }
  .divs .left img{
    width: 2.826667rem;
  }
   .divs .right{
    height: 100%;
    float: right;
    width: 6.573333rem;
    padding: 0.066667rem 0 0.306667rem 0.306667rem;
  }
  .divs .right img{
    width: 1.066667rem;
    float: right;
  }
  .divs .right .text_one{
    width: 5.733333rem;
    font-size: 0.346667rem;
    font-weight: bold;
  }
  .divs .right .text_two{
    color: #ca3232;
    font-size:0.453333rem;

  }
  .divs .right .text_three{
    color: #bbbbbb;
    font-size: 0.36rem;
    display: flex;
  }
  .divs .right .text{
    text-decoration:line-through;
    margin-left: 0.266667rem;
  }
  .divs .right .text_four{
    font-size: 0.266667rem;
    color: #f38873;
    margin-top: 0.1rem;
  }
  .divs .right .text_four p:nth-child(1){
    border:0.013333rem solid red;
    padding: 0.013333rem 0.2rem; 
    border-radius: 0.133333rem;
    float: left;
  }
  .divs .right .text_four p:nth-child(2){
   float: right;
   color: #999999;
  }
  .txt{
    color: #bbbbbb;
    font-size: 0.293333rem;
  }
</style>
