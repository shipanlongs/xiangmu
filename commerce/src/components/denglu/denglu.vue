<template>
  <div id="app">
  		<div class="header">
          <img v-bind:src="urls">
      </div>
      <!-- 导航 -->
      <div class="nav">
          <ul>
            <li @click="show()">
              <p>登录</p>
              <img src="../../assets/register-img/sanjiao_04.jpg" v-show="num1">
            </li>
            <li @click="hide()">
              <p>注册</p>
              <img src="../../assets/register-img/sanjiao_04.jpg" v-show="num2">
            </li>
          </ul>
      </div>
      <!-- 登录 -->
      <div class="mian" v-show="num1">
          <div class="top">
              <ul>
                <li><img src="../../assets/register-img/dllogo_08.jpg"></li>
                <li>
                  <p><input type="text" name="" placeholder="请输入手机号" v-model="dltel"></p>
                </li>
              </ul>
          </div>
          <div class="top">
              <ul>
                <li><img src="../../assets/register-img/dllogo_11.jpg"></li>
                <li>
                  <p><input type="password" name="" placeholder="请输密码/最少6位" v-model="dlpassword"></p>
                </li>
              </ul>
          </div>
          <div class="btn" @click="dl()">
              <p>登录</p>
          </div>
          <div class="btn2">
            <p>
              <router-link to="/forget_the_password">
              忘记密码?
              </router-link>
            </p>
          </div>
      </div>
    <!--   注册 -->
      <div class="mian2" v-show="num2">
          <div class="top2">
              <ul>
                <li><img src="../../assets/register-img/dllogo_08.jpg"></li>
                <li>
                  <p><input type="tel" name="" placeholder="请输入手机号" v-model="tel"></p>
                </li>
              </ul>
          </div>
          <div class="top2">
              <ul>
                <li><img src="../../assets/register-img/ceimg_04.jpg"></li>
                <li>
                  <p><input type="text" name="" placeholder="请输入验证码" v-model="yanzheng"></p>
                </li>
                <li >
                  <button @click="yanzhengs()" :disabled="dis">
                      <p v-if="sendMsgDisabled">{{time+'秒后获取'}}</p>
                      <p v-if="!sendMsgDisabled">获取验证码</p>
                  </button>
                </li>
              </ul>
          </div>
          <div class="top2">
              <ul>
                <li><img src="../../assets/register-img/ceimg_07.jpg"></li>
                <li>
                  <p><input type="password" name="" placeholder="请输入密码" v-model="password"></p>
                </li>
              </ul>
          </div>
          <div class="top2">
              <ul>
                <li><img src="../../assets/register-img/ceimg_09.jpg"></li>
                <li>
                  <p><input type="text" name="" placeholder="邀请码(没有可不填)"></p>
                </li>
              </ul>
          </div>
          <div class="ce" @click="cz()">
              <p>注册</p>
          </div>
      </div>
  </div>
</template>

<script>
import axios from "axios";
export default { 
  data () {
    return {
      num1:true,
      num2:false,
      loca:"",
      loca1:"",
      urls:"",
      tel:"",
      yanzheng:"",
      yanzhengma:"",
      password:"",
      dltel:"",
      dlpassword:"",
      time: 59, // 发送验证码倒计时
      sendMsgDisabled: false,
      dis:false
    }
  },
  created(){
    this.loca=window.location.href.substr(0,22);
    this.loca1=window.location.href.split("/")[4];
    this.urls=`${this.loca}src/assets/register-img/dl_01.jpg`;
    if(this.loca1==0){
      this.num1=true;
      this.num2=false;
    }else{
      this.num1=false;
      this.num2=true;
      this.urls=`${this.loca}src/assets/register-img/zc_01.jpg`;
    }
  },
  methods:{
    show(){
      this.num1=true;
      this.num2=false;
      this.urls=`${this.loca}src/assets/register-img/dl_01.jpg`;
    },
    hide(){
      this.num1=false;
      this.num2=true;
      this.urls=`${this.loca}src/assets/register-img/zc_01.jpg`;
    },
    yanzhengs(){
      if(this.tel==""){
         alert("请输入手机号");
      }else if(this.tel.length<11||this.tel.length>11){
        alert("手机号码格式不对");
      }else{
         //倒计时
        this.sendMsgDisabled = true;
        this.dis=true;
        let interval = setInterval(()=> {
         if ((this.time--) <= 0) {
          this.time = 59;
          this.sendMsgDisabled = false;
          this.dis=false;
          clearInterval(interval);
         }
        }, 1000);
        const url="http://114.55.249.153:8028/login/sendCode";
        let objs={phone:this.tel};
        axios.post(url,objs).then((res)=>{
          if(res.data.error_code==0){
            alert(res.data.msg);
            this.yanzhengma=res.data.code;
          }else{
            alert("发送失败");
          }
        })
      }
    },
    cz(){

       if(this.tel==""||this.yanzheng==""){
          alert("手机号或验证码为空");
       }else if(this.tel.length<11){
          alert("手机号码不正确");
       }else if(this.password==""){
          alert("密码为空");
       }else if(this.password.length<6){
          alert("密码格式不对");
       }else if(this.yanzheng==this.yanzhengma){
          const url="http://114.55.249.153:8028/login/regWithPhone";
          let obj={
            phone:this.tel,
            password:this.password
          }
          axios.post(url,obj).then((res)=>{
            if(res.data.error_code==0){
              alert(res.data.msg);
              this.urls=`${this.loca}src/assets/register-img/dl_01.jpg`;
              this.num1=true;
              this.num2=false;
            }else{
              alert(res.data.msg);
            }
          })
       }else{
        alert("验证码不对");
       }
    },
    dl(){
        if(this.dltel==""||this.dlpassword==""){
          alert("手机号或者密码为空");
        }else if(this.dltel.length<11||this.dlpassword.length<6||this.dltel.length>11){
          alert("手机号码或者密码格式不正确");
        }else{
          const url="http://114.55.249.153:8028/login/LoginByPhone";
          let obj={
            phone:this.dltel,
            password:this.dlpassword
          }
          axios.post(url,obj).then((res)=>{
              if(res.data.error_code==0){
                sessionStorage.setItem("username",res.data.data.phone);
                window.location.href='http://localhost:8080/tab1';
                alert("登录成功");
              }else{
                alert("手机号或者密码不正确");
              }
           })
        }
    }
  }
}
</script>

<style scoped="scoped">
  #app{
    width:100%;
    height:17.746667rem;
    background:#ffffff;
    position:fixed;
    top:0.0rem;
    z-index:9999999999;
  }
  .header{
    width:100%;
    height:5.706667rem;
  }
  .header img{
    width:100%;
    height:100%;
  }
  .nav{
    width:100%;
    height: 1.44rem;
    background:#f3f3f3;
    position:relative;
  }
  .nav ul{
    width:100%;
    height: 1.44rem;
    display:flex;
    align-items: center;
    justify-content: space-around;
    font-size: 0.4rem;
    font-weight:300;
  }
  .nav ul li p{
    text-align: center;
  }
  .nav ul li img{
    width:0.266667rem;
    height:0.266667rem;
    margin-left:0.2rem;
    position: absolute;
    margin-top:0.173333rem;
  }
  .mian{
    width:100%;
    height:10.583333rem;
  }
  .mian .top:nth-child(2){
    margin-top: 0.0rem;
  }
  .top{
    width:90%;
    height:2.533333rem;
    border-bottom: 0.013333rem solid #dddddd;
    margin:0 auto;
    margin-top: 0.4rem;
  }
  .top ul{
    width:100%;
    height:2.533333rem;
    display:flex;
    align-items: center;
  }
  .top ul li img{
    width:0.4rem;
  }
  .top ul li input{
    border:none;
  }
   .top ul li:nth-child(2){
    margin-left: 0.4rem;
   }
   .btn{
    width:90%;
    height:1.333333rem;
    background: #ca3232;
    margin:0 auto;
    margin-top: 1.32rem;
    border-radius:0.133333rem;
    text-align:center;
    line-height:1.333333rem;
    font-size: 0.466667rem;
    color:#ffffff;
    font-weight:bold;
   }
   .btn2{
    width:100%;
    height:0.533333rem;
    margin-top: 0.933333rem;
    text-align:center;
    line-height:0.533333rem;
    color:#666666;
   }
   .btn2 p a{
    color: #000;
   }
   .top2:nth-child(1){
     margin-top: 0.746667rem;
   }
   .top2{
    width:90%;
    height:1.84rem;
    border-bottom:0.013333rem solid #dddddd;
    margin:0 auto;
    color:#bbbbbb;
   }
   .top2 ul li button{
    border:none;
    background: #ffffff;
    height:0.4rem;
   }
   .top2 ul{
    width:100%;
    height:1.84rem;
    display:flex;
    align-items: center;
   }
   .top2 ul li img{
    width:0.463333rem;
    height:0.693333rem;
   }
   .top2 ul li input{
    border:none;
    margin-left: 0.533333rem;
   }
   .top2 ul li:nth-child(3){
    width:2.12rem;
    height:0.64rem;
    margin-left:1.333333rem;
    border:0.013333rem solid #bbbbbb;
    text-align: center;
    line-height: 0.64rem;
    border-radius:0.133333rem;
   }
   .ce{
    width:90%;
    height:1.32rem;
    margin:0 auto;
    background: #ca3232;
    border-radius:0.133333rem;
    text-align: center;
    line-height: 1.32rem;
    color:#ffffff;
    font-size:0.453333rem;
    font-weight:bold;
    font-family:微软雅黑;
    margin-top:0.666667rem;
   }
</style>
