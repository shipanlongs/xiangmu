<template>
  <div id="app">
      <div class="mian">
        <ul>
          <li>订单编号:00001451454</li>
          <li>待付款</li>
        </ul>
      </div>
      <div class="mian-down1">
          <div class="mian-down1left">
              <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1632889287,2598654548&fm=27&gp=0.jpg"/>
          </div>
          <div class="mian-down1center">
            <h4>Metabolic酿素*小牧目镜减肥排毒60粒来买吧哈哈啊哈哈啊哈哈啊哈哈</h4>
            <button>保税区</button>
          </div>
          <div class="mian-down1right">
            <p>￥219.00</p>
            <p>×1</p>
          </div>
      </div>
      <div class="mian-down1">
          <div class="mian-down1left">
              <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1632889287,2598654548&fm=27&gp=0.jpg"/>
          </div>
          <div class="mian-down1center">
            <h4>Metabolic酿素*小牧目镜减肥排毒60粒来买吧哈哈啊哈哈啊哈哈啊哈哈</h4>
            <button>保税区</button>
          </div>
          <div class="mian-down1right">
            <p>￥219.00</p>
            <p>×1</p>
          </div>
      </div>
      <div class="footer">
        <p>共2件商品<span>合计:</span>￥180.00(运费￥25.00)</p>
      </div>
  </div>
</template>

<script>
	
  export default {
  name: 'app',
  data () {
    return {
     
    }
  },
  components:{
  	
  },
  methods:{
    
  },
  mounted(){
    
  }
}
</script>

<style scoped="scoped">
  #app{
    margin-top:2.5rem;
  }
	.mian,.mian-down1{
    background: #FFFFFF;
  }
  .mian{
    width:98%;
    height:0.92rem;
    border-bottom:1px solid #dddddd;
    margin: 0 auto;
    margin-top: 0.146667rem;
  }
  .mian ul{
    width:98%;
    height:0.92rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .mian ul li:nth-child(1){
    color:#a0a0a0;
    font-size:0.266666rem;
  }
  .mian ul li:nth-child(2){
    color:#ff6600;
    font-size:0.4rem;
    font-weight: bold;
  }
  .mian-down1{
    width: 98%;
    height:2.293333rem;
    border:1px solid #FFFFFF;
    border-bottom: 1px solid #CCCCCC;
    margin: 0 auto;
    display:flex;
    align-items: center;
  }
  .mian-down1left{
    width: 1.6rem;
    height:1.586666rem;
    margin:0.266666rem 0rem;
    border:0.013333rem solid #dddddd;
    text-align:center;
  }
  .mian-down1left img{
    width:0.76rem;
    height:1.386667rem;
    margin-top: 0.093333rem;
  }
  .mian-down1center{
    width:60%;
    height:1.586667rem;
    /*border:0.013333rem solid red;*/
    margin-left:0.293333rem;
  }
  .mian-down1center h4{
    font-size: 0.333333rem;
    width: 200px;
      word-break: break-all;
      text-overflow: ellipsis;
      display: -webkit-box; /** 将对象作为伸缩盒子模型显示 **/
      -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
      -webkit-line-clamp: 2; /** 显示的行数 **/
      overflow: hidden;  /** 隐藏超出的内容 **/
  }
  .mian-down1center button{
    border:none;
    width:1.333333rem;
    height:0.493333rem;
    border:0.013333rem solid #f38873;
    background: #FFFFFF;
    border-radius:0.133333rem;
    margin-top: 0.066667rem;
    color:#f38873;
    outline:none;
  }
  .mian-down1right{
    width:20%;
    height:1.586667rem;
    text-align: right;
  }
  .footer{
    width:98%;
    height:0.96rem;
    background: #FFFFFF;
    margin:0 auto;
    text-align:right;
    line-height:0.96rem;
    padding-right: 0.4rem;
  }
  .footer p{
    font-size:0.373333rem;
  }
  .footer p span{
    font-size:0.4rem;
    font-weight: bold;
    letter-spacing:0.04rem;
  }
</style>
