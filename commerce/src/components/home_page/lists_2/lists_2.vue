<template>
<swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
    <swiper-slide>
      <div class="box"  >
      <ul >
        <li  @click='gets(index)' v-for='(data,index) in arr'><router-link to='/abnehmen' >
          <p><img v-lazy="data.img"/></p>
          <p >{{data.li}}</p></router-link>
        </li>
      </ul>
    </div>
    </swiper-slide>
  </swiper>

</template>

<script>
import axios from "axios";
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      //定义一个空数组
      arr:[],
      notNextTick: true,
        swiperOption: {
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          mousewheelControl: true,
          observeParents: true,
          debugger: true,
          // loop:true
        }
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
	.box{
		width: 100%;
		height: 2.533333rem;
		background: #fff;
    border-bottom: 0.013333rem solid #ddd;
    font-weight: bold;
    font-family: "微软雅黑";
	}
  a{
    color: #777777;
  }
  .box ul{
   display: flex;

  }
	.box ul li{
    padding: 0.333333rem;
		text-align: center;
		font-size: 0.32rem;
	}
	.box li p:nth-of-type(1){
		height:1.333333rem ;
	}
	.box li img{
		width: 1.333333rem;
	}

</style>
