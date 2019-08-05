<template>
  <div class="header">
    <span class="header_logo">
      <img :src="headerLogoSrc" :alt="headerLogoAlt">
    </span>
      <span class="toMainArea" @click="gotoMain">
        <span class="toMainImg"><img :src="toMainImgs"></span>  
        <span >{{toMainInfo}}</span>  
      </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerLogoSrc: "../../static/images/main/logo.png",
      headerLogoAlt: "云之讯",
      toMainImgs:'../../static/images/main/toMain.png',
      toMainInfo:'返回首页'
    };
  },

  methods: {
    gotoMain() {
       this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  margin: 0 auto;
  height: 100px;
  line-height: 100px;
  background-color: #2b303b;
  overflow: hidden;
  position: relative;
  display: flex;
  color: #fff;
}

.header_logo img {
  margin-top: 20px;
  margin-left: 376px;
}

.toMainArea {
  position: absolute;
  height: 100px;
  line-height: 100px;
  top: 25px;
  right: 20%;;
  cursor: pointer;
  color: #fff;
}

.toMainArea img {
  padding-top: 10px;
}
.toMainImg {
  position: relative;
  top: 2px;
}
</style>
