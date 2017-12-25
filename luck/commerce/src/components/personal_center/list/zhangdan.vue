<template>
  <div id="app">
    <div class="header">
      <ul>
        <li>﹤</li>
        <li><router-link to='/tab4' tag='li'>返回</router-link></li>
      </ul>
    </div>
     <div class="footer">
      <p>客户名称:北京有限公司
  为了真实、准确地反映双方账务情况，现将双方往来账进行核对：截至2017年12月14日贵单位与我单位往来款金额为￥9000元。请贵单位予以核实。上次对账日期为2016年11月12日，上次对账应收账款金额为￥60000元。</p>
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
  methods:{
  	
  },
  created(){
  	 
  }
}
</script>

<style scoped="scoped">
	#app{
		width:100%;
		height:4.0rem;
		background:#ffffff;
		position:fixed;
		top:0;
		z-index:9999999;
		font-size:0.64rem;
		padding-top: 0.4rem;
		text-align: left;
    font-family: 微软雅黑;
	}
  .header{
    width: 100%;
    height:1.033333rem;
    position:fixed;
    top:0.0rem;
    border-bottom:0.026667rem solid #ca3232;
   }
   .header ul{
    width: 100%;
    height:1.033333rem;
    display: flex;
    font-size:0.4rem;
    align-items: center;
   }
   .footer{
    margin-top: 0.933333rem;
   }
</style>
