<template>
  <div class="header">
    <div class="header_logo">
      <img :src="headerLogoSrc" :alt="headerLogoAlt">
    </div>
    <div class="header_ul">
      <ul>
        <li v-for="(item,index) in hederUlData" :key="item.id" @click="goToPage(index)" @mouseover="menuOver(index)" @mouseout="menuOut(index)">{{item}}</li>
      </ul>
    </div>
    <transition name="fade"  enter-active-class="animated fadeInDown"  leave-active-class="animated fadeOutUp">
      <div class="header_content" v-show="showHeaderContent"  @mouseover="contentOver" @mouseout="contentOut">
        <ul>
          <li v-for="(item,index) in productList" :key="item.index" @click="jumpProduct(index)">{{item}}</li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerLogoSrc: "../../static/images/main/logo.png",
      headerLogoAlt: "云之讯",
      hederUlData: [
        "首页",
        "产品",
        "免费体验",
        "技术支持",
        "关于我们",
        "登录",
        "注册有礼"
      ],
      productList: ["点击通话", "安全通话", "云掌小号", "语音验证", "语音通知"],
      showHeaderContent: false
    };
  },

  methods: {
    goToPage(index) {
      switch (index) {
        case 0:
          console.log("首页");
          this.$router.push("/");
          break;
        case 1:
          console.log("产品页");
          break;
        case 2:
          console.log("免费体验页");
          break;
        case 3:
          console.log("技术支持页");
          break;
        case 4:
          console.log("关于我们页");
          break;
        case 5:
          console.log("登录页");
          this.$router.push("/Login");
          break;
        case 6:
          console.log("注册有礼页");
          this.$router.push("/Register");
          break;
        default:
          break;
      }
    },

    jumpProduct(index) {
      switch (index) {
        case 0:
          this.$router.push("/CallClick");
          break;
        case 1:
          this.$router.push("/CallSecure");
          break;
        case 2:
          this.$router.push("/SmallNum");
          break;
        case 3:
          this.$router.push("/VoiceVerify");
          break;
        case 4:
          this.$router.push("/VoiceNotice");
          break;
        default:
          break;
      }
    },

    menuOver(index) {
      switch (index) {
        case 1:
          this.showHeaderContent = true;
          break;
        default:
          break;
      }
    },
    menuOut(index) {
      switch (index) {
        case 1:
          this.showHeaderContent = false;
          break;
        default:
          break;
      }
    },

    contentOver() {
      this.showHeaderContent = true;
    },
    contentOut() {
      this.showHeaderContent = false;
    }
  }
};
</script>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
.header {
  width: 100%;
  margin: 0 auto;
  height: 90px;
  line-height: 90px;
  background-color: #2b303b;
  overflow: hidden;
  position: fixed;
  top: 0;
  z-index: 10000;
  display: flex;
  color: #fff;
}

.header_logo img {
  margin-top: 24px;
  margin-left: 380px;
}

.header_ul {
  margin-left: 360px;

  margin-top: 25px;
  width: 662px;
}

.header_ul ul {
  list-style: none;
  display: flex;
  height: 40px;
  line-height: 40px;
}
.header_ul ul li {
  flex: 1;
  height: 100%;
  cursor: pointer;
  font-size: 16px;
}

.header_ul ul li:hover {
  color: #00a2e9;
}

.header_ul ul li:last-child {
  background-color: #00a2e9;
}
.header_ul ul li:last-child:hover {
  color: #fff;
}

.toMainArea {
  position: absolute;
  margin-top: 20px;
  margin-left: 1464px;
  cursor: pointer;
}

.header_content {
  background-color: red;
  position: fixed;
  /* top: 90px; */
  left: 0px;
  width: 100%;
  z-index: 1009;
  background: url("../../static/images/main/bg-blur.png") 0px 0px repeat;
}

.header_content ul {
  width: 100%;
  height: 100%;
  padding-left: 50px;
}
.header_content ul li {
  cursor: pointer;
}
.header_content ul li:hover {
  color: #00a2e9;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
