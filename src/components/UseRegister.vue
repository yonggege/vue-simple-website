<template>
  <div class="container">
    <tomain></tomain>
    <div class="registerArea">
      <div class="registerForm">
        <div class="commonArea email">
          <input type="text" placeholder="请输入邮箱">
        </div>
        <div class="commonArea">
           <input type="text" placeholder="密码为8-16数字和字母组合">
        </div>
        <div class="commonArea phoneArea">
           <input class = "phoneNum" type="number" placeholder="请输入手机号" maxlength="11" style="ime-mode:Disabled;" 
           onkeyup="value=value.replace(/[^\d]/g,'')" oninput="if(value.length>11)value=value.slice(0,11)">
           <span class="code" @click="getCode">{{getCodes}}</span>
        </div>
        <div class="commonArea">
           <input type="text" placeholder="请输入验证码">
        </div>
        <div class="contract">
          <span>{{agree}}</span>      
          <span class="contractDetail" @click="goContractDetail">{{contracts}}</span>      
          <span>{{law}}</span>      
        </div>
        <div class="registerNow" @click="doRegister">{{registerNows}}</div>
        <div class="login">
          <span>{{loginInfo }}</span>
          <span class="contractDetail" @click="doLogin">{{loginAction}}</span>
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
import tomain from "./BaseToMain";
import about from "./BaseAbout";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";

export default {
  components: {
    tomain,
    about
  },
  data() {
    return {
      bannerAreaOneStyle: {
        background: 'url("../../static/images/register/bannerAraOne.png")'
      },
      bannerAreaTwoStyle: {
        background: 'url("../../static/images/register/bannerAraOne.png")'
      },
      bannerAreaThreetyle: {
        background: 'url("../../static/images/register/bannerAraOne.png")'
      },
      getCodes: "获取验证码",
      agree: "点击注册代表您同意",
      contracts: "《云之讯用户使用协议》",
      law: "及相关服务条款",
      registerNows: "立即注册",
      loginInfo: "已有账号？",
      loginAction: "点此登录"
    };
  },
  methods: {
    getCode() {
      console.log("获取验证码");
      this.getCodes = "60s后再获取";
    },
    goContractDetail() {
      console.log("跳转到协议详情");
    },

    doRegister() {
      console.log("注册..");
    },
    doLogin() {
      this.$router.push("/Login");
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
.registerArea {
  height: 650px;
  width: 100%;
  position: relative;
}

.swiper-container,
.bannerArea {
  width: 100%;
  height: 100%;
  background-color: #ccc;
}

.registerForm {
  position: absolute;
  z-index: 20;
  width: 416px;
  height: 520px;
  margin-top: 65px;
  margin-left: 61%;
  border-radius: 8px;
  background-color: #fff;
}
.commonArea,
.phoneArea {
  width: 356px;
  height: 50px;
  line-height: 50px;
  margin-left: 30px;
  margin-top: 26px;
  border: 1px solid rgba(227, 227, 227, 1);
  border-radius: 10px;
}
.email {
  margin-top: 44px;
}
.contract {
  width: 344px;
  margin-top: 40px;
  margin-left: 30px;
  height: 12px;
  font-size: 12px;
  font-weight: 400;
  color: rgba(78, 78, 78, 1);
  line-height: 30px;
}

.contractDetail {
  color: #00a2e9;
  cursor: pointer;
}
.registerNow {
  margin-top: 23px;
  margin-left: 30px;
  width: 356px;
  height: 46px;
  line-height: 46px;
  background: rgba(0, 162, 233, 1);
  border-radius: 6px;
  color: #fff;
  cursor: pointer;
  text-align: center;
}

.login {
  margin-top: 27px;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  height: 12px;
  text-align: center;
}

.commonArea input {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  padding-left: 12px;
}
::-webkit-input-placeholder {
  /* WebKit, Blink, Edge */
  color: #626262;
}
:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #626262;
}
::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #626262;
}
:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #626262;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type="number"] {
  -moz-appearance: textfield;
}
.phoneArea {
  position: relative;
}

.code {
  position: absolute;
  left: 258px;
  top: 5px;
  width: 92px;
  height: 40px;
  line-height: 40px;
  background: rgba(242, 242, 242, 1);
  border-radius: 10px;
  font-size: 14px;
  font-weight: 400;
  color: rgba(98, 98, 98, 1);
  cursor: pointer;
}
</style>


