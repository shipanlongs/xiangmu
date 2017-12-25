<template>
  <div id="app" style="">
  	<div class="heng">
  		<ul>
  			<li v-for='data in arr'>
  				<p><img v-lazy="data.img"></p>
  				<div>
  					<p>{{data.p1}}</p>
  					<p>{{data.p2}}</p>
  				</div>
  			</li>
  			<article style="font-size:0.533333rem;color:#999;margin-top: 0.133333rem;">＞</article>
  		</ul>
  	</div>
  	<div class="details">
  		<div class="fufu">
        <div class="left">
          <p>{{goodsname}}&nbsp;&nbsp;+{{description}}</p>
        </div>
        <div class="right"  @click='fn()'>
          <img src="../../../../../assets/images/details/details_17.jpg"><p>客服</p>
        </div>

      </div>
      <div class="fus">
        <p style="color:#ff7200;font-size:0.466667rem;
        ">￥219.00</p>
       <div style="display:flex;font-size:0.333333rem;color:#999;">
         <p>市场价</p>
        <p class="text">￥596.00</p>
       </div>
        
      </div>
        <ul>
          <li>运费 ￥<p>25</p></li>
          <li>销量<p>2046</p></li>
          <li>
            <p class="bao">保税区</p></li>
        </ul>
  	</div>
    <div class="recommend">
      <div class="left"></div>
      <div class="center">往上滑动查看详情</div>
      <div class="right"></div>
    </div>
   <div>
    <div  id='shows'>
    <mu-tabs :value="activeTab" @change="handleTabChange" v-if='showa' >
      <mu-tab value="tab1" title="商品详情"/>
      <mu-tab value="tab2" title="评价(156)"/>
      <mu-tab value="tab3"  title="规格参数"/>
  </mu-tabs>
  <mu-tabs :value="activeTab" @change="handleTabChange" v-if='showb'id='showb' >
      <mu-tab value="tab1" title="商品详情"/>
      <mu-tab value="tab2" title="评价(156)"/>
      <mu-tab value="tab3"  title="规格参数"/>
  </mu-tabs>
  <div v-if="activeTab === 'tab1'">
    <div class="xq">
      <p>
        <img v-lazy="img"/>
      </p>
      <div class="zong">
        <ul>
          <li v-for='data in jsons'>
            <p><img :src="data.img"/></p>
            <p>{{data.p}}</p>
          </li>
        </ul>
      </div>
      <div class="mains">
          <ul>
            <li v-for='data in datas'>
              <div class="left">
                <p><img :src="data.left_img"/></p>
                <div class="zou">
                  <p class="tou">{{data.left_p1}}</p>
                <p class="p">{{data.left_p2}}</p>
                </div>
                
              </div>
              <div class="right" style="margin-left:0.266667rem;">
                <p><img :src="data.right_img"/></p>
                <div class="zou">
                  <p class="tou">{{data.right_p1}}</p>
                <p class="p">{{data.right_p2}}</p>
                </div>
                
              </div>
            </li>
          </ul>
        <div class="boxs">
          <div class="boxs_box">
            <div style="font-size:0.453333rem;text-align:center;">
              <p>平台合法，购物手法</p>
            <p>会计法规以及研发九朵云</p>
            </div>
            <div style="font-size:0.266667rem;margin-top:0.333333rem;">
              <p>为什么要身份证：</p>
            <p>1.为什么要几乎分割而是经过合法结婚的个</p>
            <p>2.为什么要身份证UI而体验感觉也入会费股提供福遇到个月的发语音月有人非</p>
            <p>3.为什么要身份证宽容和提高defhdekfjkwehjefyhu客户身份证局而官方机构</p>
            </div>
            
          </div>
          
        </div>
      </div>
      <div class="pp">
        <p>高科技货到付款就，的发符号库舒服</p>
        <p>反馈给还是健 课了凤凰城遥不可及健康板块电话费哭得或发髻</p>
        <p>覆盖北京和覅币从v结婚后框架和北京考察</p>
      </div>
      <img src="../../../../../assets/images/details/details_48.jpg" style="width:100%;" />
    </div>
  </div>
  <div v-if="activeTab === 'tab2'">
    <div class="ba" v-for='data in json'>
      <div class="ba_s">
        <p><img v-lazy="data.touxian"></p>
        <p style="padding:0 0.266667rem;margin-top:0.133333rem;">{{data.name}}</p>
        <p><img v-lazy="data.hg"></p>
      </div>
      <p class="p">{{data.nr}}</p>
      <p class="time">{{data.time}}</p>
      <p><img v-lazy="data.img" style="width: 2.4rem;margin-top:0.333333rem;"></p>
    </div>
    <mu-divider />
    
  </div>
  <div v-if="activeTab === 'tab3'">
    <div class="background">
      </mu-list-item>
    <mu-list-item v-for='data in data'>
      <p>{{data.p1}}</p>
      <p style="color:#333333;">{{data.p2}}</p>
    </mu-list-item>
    </mu-list>
    <mu-divider />
    </div>
  </div>
</div>
    </div>
 
<div style="width: 100%;
  height: 102vh;
  background:rgba(33,33,33,0.5);
  z-index: 999999999999999;
  position: absolute;top:0;" v-show='show'>
  <div class="div" >
  <p style="font-size:0.7rem;color:#000;">18351097732</p>
  
  <div style="margin-top:0.666667rem;">
    <button style="margin-right:1.333333rem;">确定</button>
  <button @click='close()'>取消</button>
  </div>
</div>
  
  
</div>

  </div>
</template>

<script>
window.onscroll=function(){
  // 来获取滑动条高度||页面的高度
  var t = document.documentElement.scrollTop || document.body.scrollTop;  
var shows = document.getElementById("shows");
    if(shows){
      if(t>=10){
      shows.style.display='block'
    } else{
      shows.style.display='none'
    }
  }
}
// 引入axios
import axios from "axios";
// 导出
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      // 默认tab1
       activeTab: 'tab1',
       // 定义空数组
       arr:[],
       json:[],
       data:[],
       jsons:[],
       datas:[],
       // 懒加载
       img:"./src/assets/images/details/details_20.jpg",
       description:'',
       goodsname:"",
       pic0:"",
       show:false,
       shows:false,
       showa:true,
       showb:false
    }
  },
   methods: {
    handleTabChange (val) {
      this.activeTab = val

    },
    fn(){
      this.show=true;
    },
    close(){
      this.show=false;
    },
    fnn(){
      var t=document.documentElement.scrollTop || document.body.scrollTop
        if(t>=583){
           this.showa=false;
           this.showb=true;
        }else{
          this.showa=true;
          this.showb=false;
        }
      }
  },
  mounted(){
    // 监听滚轮事件
    window.addEventListener('scroll', this.fnn);
  },
  created(){
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    // 获取设置的数据
      let goodsname=localStorage.getItem("goodsname");
      this.goodsname=goodsname;
       let description=localStorage.getItem("description");
      this.description=description;
       let pic0=localStorage.getItem("pic0");
      this.pic0=pic0;
    // 地址
    let url="./src/assets/json/mains_li.json";
    // 获取地址里的数据
    axios.get(url).then(res=>{
      // 把数据渲染到页面上
      this.arr=res.data
    })

    let urls="./src/assets/json/ba.json";
    axios.get(urls).then(res=>{
      this.json=res.data
    })

    let url_background="./src/assets/json/background.json";
    axios.get(url_background).then(res=>{
      this.data=res.data
    })

    let url_zong="./src/assets/json/zong.json";
    axios.get(url_zong).then(res=>{
      this.jsons=res.data
    })

    let url_mains="./src/assets/json/mains.json";
    axios.get(url_mains).then(res=>{
      this.datas=res.data
    })
  }
}
</script>

<style scoped="scoped">
#showb{
  position: fixed;
  z-index: 999999999999999999999999999999999;
  top:0;
  height: 1.186667rem;
}
#shows{
  display: none;
}
.bao{
  border:0.026667rem solid red;
  padding:0.026667rem  0.266667rem;
  text-align:center;
  border-radius:0.106667rem;
   margin-left:1.2rem;
   color:red;
}
.mu-tabs {
    background-color: #fff;
    border-bottom: 0.013333rem solid #ddd;
}
.mu-tab-link {
    min-height: 1.066667rem;
    font-size: 0.346667rem;
     color:#999;
     font-weight: bold;
     font-family: "微软雅黑";
}
.mu-tab-active{
  color: #ca3232;
}
.mu-item-content p:nth-of-type(1){
  float: left;
  color: #999999;
  font-family: "微软雅黑";
}
.mu-item-content p:nth-of-type(2){
  float: right;
}
.background{
  background: #fff;
}
.heng{
	width: 100%;
	height: 1.066667rem;
	background: #f9f9f9;
	border:0.013333rem solid #ddd;
	border-left: 0;
	border-right: 0;

}
.heng ul{
	display: flex;
	padding: 0.066667rem 0.266667rem 0 0.466667rem;
}
.heng li{
	width: 90px;
	color: #ca3232;
	font-size: 0.266667rem;
	margin-right: 0.5rem;
}
.heng li p img{
	float: left;
}
.heng div{
	float: right;
}
.heng img{
	width: 0.693333rem;
	margin-top: 0.133333rem;
}
.details{
	width: 100%;
	height:4.266667rem;
	border:0.013333rem solid #ddd;
	border-left: 0;
	border-right: 0;
  padding: 0.3rem 0 0 0.36rem;
  margin-top: 0.106667rem;
  background:#fff;
}
.details .fufu{
  width:100%;
  height: 1.333333rem;
  /*border:0.066667rem solid red;*/
}
.details .fufu .left{
  width:80%;
  border-right:1px solid #ddd;
  height:100%;
  font-size:0.466667rem;
  font-weight: bold;
  float: left;
}
.details .left p{
  width:90%;
}
.details .right{
  width: 20%;
  float: right;
  text-align: center;
  /*height: 0.866667rem;*/
}
.details .right img{
  width: 0.666667rem;
}
.details .fus{
  width: 2.893333rem;
  height: 1.16rem;
  margin-top: 0.3rem;
}
.text{
  margin-left: 0.133333rem;
  text-decoration: line-through;
}
.details ul{
  color:#cccccc;
   display:flex;
   width:100%;
   border-top:1px solid #ddd;
   padding: 0.133333rem;
   margin-top: 0.266667rem;
}
.details ul li{
  display: flex;
  flex: 1;
}
.recommend{
    padding:0.266666rem;
    width: 100%;
    display: flex;
    border-bottom:1px solid #ddd;
  }
  .recommend .left, .recommend .right{
    background: #cccccc;
    width: 33%;
    height: 0.04rem;
    margin-top: 0.2rem;
  }
  .recommend .center{
    color: #999999;
    padding: 0 0.266666rem;
    font-weight:bold;
    font-family: "微软雅黑";
  }
.ba{
  padding:0.333333rem 0.266667rem 0.4rem 0.4rem;
  width: 100%;
  background:#fff;
  color: #333333;
} 

  .ba img:nth-of-type(1){
    width: 0.826667rem;
  }
    .ba img:nth-of-type(2){
    width: 0.733333rem;
  }
 
.ba_s{
  display:flex;
}
.time{
  color:#bbbbbb;
  margin-top: 0.2rem;
}
.p{
  font-size:0.346667rem;
  font-weight:bold;
  font-family:'微软雅黑';
  margin-top:0.333333rem;
}
.xq{
  background: #fff;
  width: 100%;
}
.xq p img{
  width: 100%;
  margin-top: 0.16rem;
}
.zong{
  width:100%;
  height:2.066667rem;
  background:#fff;
}
.zong ul{
  display: flex;
}
.zong li{
  flex: 1;
  text-align: center;
  color: #727272;
  font-family:'微软雅黑';
}
.zong ul li img{
  width: 1.013333rem;
}
.mains{
  width:100%;
  height:14.00rem;
  border:0.013333rem solid #fc3961;
  border-left:0;
  border-right:0;
}
.mains ul{
  width:100%;
  height:8rem;
}
.mains ul li{
  display:flex;
  height:2.666667rem;
  width:100%;
  padding:0.3rem 0.5rem 0.36rem 0.5rem;
}
.mains ul li:nth-child(odd){
  background:#eeeeee;
}
.mains ul li img{
  width:1.026667rem;
  float:left;
  margin-top:0.466667rem;
}
.mains ul li .left{
  float:left;
  width:50%;
}
.mains ul li .right{
  float:right;
  width:50%;
}
.mains ul li .p{                
  font-size:0.186667rem;
  color:#848484;
  margin-top: -0.066667rem;
}
.mains ul li .tou{
  font-size:0.4rem;
  color:#707070;
}
.mains ul li .zou{
  float:right;
  width:3.3rem;
}
.boxs{
  width:100%;
  height:5.733333rem;
  background:#fff;
  padding:0.333333rem 0.466667rem;
  margin-top: 0.026667rem;
}
.boxs .boxs_box{
  width:100%;
  height:100%;
  background:#ff325d;
  color:#fff;
  padding:0.306667rem 0.306667rem;
  
}
.pp{
  width:100%;
  height:1.6rem;
  background:#eeeeee;
  color:#f77691;
  text-align:center;
  padding: 0.133333rem 0 0.266667rem 0;
  font-size: 0.266667rem;
}
.div{
  width:6.666667rem;
  height:4.0rem;
  background:#fff;
  position:absolute;
  left:50%;
  top:50%;
  /*z-index:999999999999999;*/
  text-align:center;
  padding-top:0.666667rem;
  border:0.026667rem solid #ddd;border-radius:0.266667rem;
  margin-left:-3.333333rem;
  margin-top:-2.0rem;
}
button{
  padding:0.133333rem 0.4rem;
  color:blue;
  background:#fff;
  border:0.013333rem solid #ddd;
  font-size:0.4rem;
}
</style>
