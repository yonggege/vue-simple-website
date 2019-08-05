<template>
  <div class="container">
    <tomain></tomain>
    <div class="loginArea">
      <div class="loginForm">
        <div class="loginSwitch">
          <ul>
            <li :class="{ active: isActive}"  @click="loginway">验证码登录</li>
            <li :class="{ active: !isActive}" @click="loginway">密码登录</li>
          </ul>
        </div>
         <div  v-show="isActive">
          <div class="phoneNum">
            <input type="number" placeholder="请输入手机号" maxlength="11" style="ime-mode:Disabled;" 
            onkeyup="value=value.replace(/[^\d]/g,'')" oninput="if(value.length>11)value=value.slice(0,11)">
            <span class="code" @click="getCode">{{getCodes}}</span>
          </div>
          <div class="flag"></div>
          <div class="vertifyCode">
            <input type="number" placeholder="请输入验证码" maxlength="6" style="ime-mode:Disabled;" 
            onkeyup="value=value.replace(/[^\d]/g,'')" oninput="if(value.length>11)value=value.slice(0,6)">
          </div>
          <div class="flag"></div>
          <div class="login" @click="doLogin">{{logins}}</div>
          <div class="register">
              <span>{{registerInfo}}</span>
              <span class="registerAction" @click="doRegister">{{registerActions}}</span>
          </div>
          	</div>
          	<div  v-show="!isActive"> 
          	   <div class="email">
                  <input type="text" placeholder="邮箱">
              </div>
               <div class="emailflag"></div>
          	   <div class="emailCode">
                  <input type="text" placeholder="密码">
              </div>
               <div class="emailflag"></div>
              <div class="controlGroup">
                <span class="rememberPass"> 
                  <input type="checkbox" id="checkboxRemeber">
                  <label for="checkboxRemeber">记住邮箱</label>
                </span>
                <span class="forgetPass">忘记密码</span>
              </div>
              <div class="login" @click="doLogin">{{logins}}</div>
              <div class="register">
                  <span>{{registerInfo}}</span>
                  <span class="registerAction" @click="doRegister">{{registerActions}}</span>
              </div>
          </div>
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="bannerArea bannerAreaOne" :style="bannerAreaOneStyle"></div>
          </div>
          <div class="swiper-slide">
            <div class="bannerArea bannerAreaTwo" :style="bannerAreaTwoStyle"></div>
          </div>
          <div class="swiper-slide">
            <div class="bannerArea bannerAreaThree" :style="bannerAreaThreetyle"></div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <about></about>
  </div>
</template>
<script>
import tomain from "./BaseToMain"
import about from "./BaseAbout"
import Swiper from "swiper"
import "swiper/dist/css/swiper.min.css"

export default {
  components: {
    tomain,
    about
  },
  data() {
    return {
      bannerAreaOneStyle: {
        background: 'url("../../static/images/register/bannerAraOne.png")',
        backgroundRepeat: "no-repeat"
      },
      bannerAreaTwoStyle: {
        background: 'url("../../static/images/register/bannerAraOne.png")',
        backgroundRepeat: "no-repeat"
      },
      bannerAreaThreetyle: {
        background: 'url("../../static/images/register/bannerAraOne.png")',
        backgroundRepeat: "no-repeat"
      },
      isActive: true,
      getCodes: "获取验证码",
      logins: "登录",
      registerInfo: "还没有账号？",
      registerActions: "立即注册"
    };
  },
  methods: {
    loginway() {
      this.isActive == true ? (this.isActive = false) : (this.isActive = true);
    },
    getCode() {
      console.log("获取验证码");
      this.getCodes = "60s后再获取";
    },

    doLogin() {
      console.log("登录...........");
    },

    doRegister() {
      this.$router.push("/Register");
    }
  },

  mounted() {
    var myHeaderSwiper = new Swiper(".swiper-container", {
      loop: true,
      autoplay: {
        disableOnInteraction: false,
        delay: 4000
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }
};
</script>
<style scoped>
.loginArea {
  height: 650px;
  width: 100%;
  position: relative;
}

.swiper-container,
.bannerArea {
  width: 100%;
  height: 100%;
}

.loginForm {
  position: absolute;
  z-index: 20;
  width: 416px;
  height: 520px;
  margin-top: 65px;
  margin-left: 61%;
  border-radius: 8px;
  background-color: #fff;
}

.loginSwitch {
  margin-top: 49px;
  margin-left: 30px;
  width: 356px;
  height: 56px;
  background: rgba(240, 240, 240, 1);
  border-radius: 6px;
}

.loginSwitch ul {
  position: relative;
  top: 6px;
  display: flex;
  height: 44px;
  width: 100%;
  background: rgba(240, 240, 240, 1);
  border-radius: 8px;
}

.loginSwitch ul li {
  flex: 1;
  height: 44px;
  line-height: 44px;
  text-align: bottom;
  cursor: pointer;
}

.active {
  background: rgba(255, 255, 255, 1);
  border-radius: 8px;
  margin: 0 6px;
  height: 44px;
  line-height: 44px;
}

.phoneNum {
  margin-top: 46px;
  margin-left: 30px;
  width: 356px;
  height: 56px;
  position: relative;
}

.phoneNum input,
.vertifyCode input,
.email input,
.emailCode input {
  width: 100%;
  height: 100%;
  padding-left: 12px;
  border: none;
  outline: none;
  background: none;
}

::-webkit-input-placeholder {
  /* WebKit, Blink, Edge */
  color: #000000;
}
:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #000000;
}
::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #000000;
}
:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #000000;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type="number"] {
  -moz-appearance: textfield;
}
.code {
  position: absolute;
  left: 230px;
  top: 8px;
  width: 106px;
  height: 40px;
  line-height: 40px;
  background: rgba(242, 242, 242, 1);
  border-radius: 8px;
  color: #000000;
  cursor: pointer;
}

.flag {
  margin-left: 30px;
  margin-top: 6px;
  width: 356px;
  height: 1px;
  background: rgba(243, 243, 243, 1);
}
.vertifyCode {
  height: 40px;
  margin-top: 40px;
  margin-left: 30px;
}
.login {
  margin-left: 30px;
  margin-top: 40px;
  width: 356px;
  height: 46px;
  line-height: 46px;
  background: rgba(0, 162, 233, 1);
  opacity: 0.4;
  border-radius: 6px;
  color: #ffffff;
  cursor: pointer;
}
.register {
  margin-top: 17px;
  margin-left: auto;
  margin-right: auto;
  font-size: 14px;
}

.registerAction {
  color: #00a2e9;
  cursor: pointer;
}

.email,
.emailCode {
  margin-top: 43px;
  margin-left: 40px;
  width: 200px;
  height: auto;
  font-size: 14px;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  line-height: 30px;
}

.emailCode {
  margin-top: 23px;
}

.emailflag {
  margin-left: 30px;
  margin-top: 22px;
  width: 356px;
  height: 1px;
  background: rgba(243, 243, 243, 1);
}
.controlGroup {
  margin-top: 40px;
  text-align: left;
}
.controlGroup span {
  font-size: 14px;
  font-weight: 400;
  color: rgba(0, 162, 233, 1);
  line-height: 30px;
}

.rememberPass {
  margin-left: 32px;
  position: relative;
}

.rememberPass input[type="checkbox"] {
  position: absolute;
  left: 0;
  top: 0;
  width: 100px;
  height: 10px;
  opacity: 0;
}
.rememberPass label {
  position: absolute;
  width: 60px;
  left: 30px;
  top: 0;
  height: 20px;
  line-height: 20px;
}
.rememberPass label:before {
  content: "";
  position: absolute;
  left: -30px;
  width: 15px;
  height: 15px;
  border: 0.5px solid #ddd;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  cursor: pointer;
}

.rememberPass label:after {
  content: "";
  position: absolute;
  left: -25.5px;
  top: 2px;
  width: 6px;
  height: 10px;
  border: 0;
  border-right: 1px solid #fff;
  border-bottom: 1px solid #fff;
  background: #fff;
  transform: rotate(40deg);
  -webkit-transform: rotate(40deg);
  -moz-transform: rotate(40deg);
  -ms-transform: rotate(40deg);
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  cursor: pointer;
}

.rememberPass input[type="checkbox"]:checked + label:before {
  background: #00a2e9;
  border-color: #00a2e9;
}
.rememberPass input[type="checkbox"]:checked + label:after {
  background: #00a2e9;
}

.forgetPass {
  margin-left: 280px;
  cursor: pointer;
}
</style>


