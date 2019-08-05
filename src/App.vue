<template>
  <div id="app">
    <myhint v-show="$route.meta.showHint"></myhint> 
    <router-view></router-view>
  </div>
</template>

<script>
import myhint from "./components/BaseHint";

export default {
  name: "App",
  components: {
    myhint
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

img {
  border: none;
}

a {
  text-decoration: none;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}

.container {
  height: 100%;
  width: 100%;
}
.commonBannerArea {
  width: 100%;
  height: 500px;
  margin-top: 90px;
}
.commonMenu {
  height: 60px;
  line-height: 60px;
  padding: 0;
  border-bottom: 1px solid #e4e8ea;
  overflow: hidden;
}
.commonMenuList ul {
  width: 450px;
  display: flex;
  margin: 0 auto;
}
.commonMenuList ul li {
  flex: 1;
}

.commonMenuList ul li a {
  font-size: 16px;
  height: 100%;
  color: #374552;
  padding: 20px 0;
  border: none;
  outline: none;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(255, 0, 0, 0);
}

.commonMenuList ul li a:hover,
.commonMenuList ul li a.active {
  height: 80px;
  border-bottom: 2px solid #00a2e9;
  color: #00a2e9;
  text-decoration: none;
}

.commonIntroduction {
  width: 1180px;
  text-align: left;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  height: 130px;
}
.commonFlag {
  display: inline-block;
  padding-top: 12px;
  width: 4px;
  height: 36px;
  background: rgba(0, 162, 233, 1);
  position: relative;
  top: 12px;
}

.commonIntroductionTitle {
  margin-left: 9px;
  width: 97px;
  height: 24px;
  font-size: 24px;
  font-weight: bold;
  color: rgba(55, 69, 82, 1);
}

.commonIntroductionInfo {
  margin-top: 51px;
  width: auto;
  height: 16px;
  font-size: 16px;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  line-height: 30px;
}

.commonScene {
  width: 1180px;
  text-align: left;
  margin-top: 108px;
  margin-left: auto;
  margin-right: auto;
  height: 500px;
}

.sceneList {
  margin-top: 45px;
  height: 380px;
}

.sceneList ul {
  width: 100%;
  height: 100%;
  display: flex;
}
.sceneList ul li {
  flex: 1;
  margin: 0 30px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(235, 235, 235, 1);
}

.yunzhangSceneUl li:nth-child(3),
.yunzhangSceneUl li:nth-child(4) {
  visibility: hidden;
}

.sceneImg {
  width: 270px;
  height: 200px;
}
.sceneImg img {
  width: 100%;
  height: 200px;
}
.sceneTitle {
  margin-top: 30px;
  width: auto;
  height: 18px;
  font-size: 18px;
  font-weight: bold;
  color: rgba(37, 37, 37, 1);
  text-align: center;
}
.sceneInfo {
  margin-top: 32px;
  width: auto;
  height: 35px;
  font-size: 14px;
  font-weight: 400;
  color: rgba(138, 150, 163, 1);
  line-height: 22px;
  text-align: center;
}

.commonAdvantage,
.commonProduct {
  margin-top: 106px;
  width: 1180px;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  height: 420px;
}

.advantageList {
  margin-top: 17px;
}

.advantageList ul {
  width: 100%;
  height: 100%;
  display: flex;
}
.advantageList ul li {
  flex: 1;
  margin: 0 47px;
}

.advantageTitle {
  margin-top: 21px;
  width: auto;
  height: 20px;
  font-size: 20px;
  font-weight: bold;
  color: rgba(55, 69, 82, 1);
  text-align: center;
}

.advantageInfo {
  margin-top: 27px;
  width: auto;
  height: 57px;
  padding-left: 20px;
  font-size: 14px;
  font-weight: 400;
  color: rgba(138, 150, 163, 1);
  line-height: 22px;
  text-align: left;
}
.productList {
  margin-top: 45px;
}

.productList ul {
  width: 100%;
  height: 100%;
  display: flex;
}
.productList ul li {
  flex: 1;
  margin: 0 15px;
  width: 270px;
  height: 318px;
  border: 1px solid rgba(235, 235, 235, 1);
  text-align: center;
}

.productImg {
  margin-top: 33px;
}

.productTitle {
  margin-top: 28px;
  width: auto;
  height: 19px;
  font-size: 20px;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
}

.productInfo {
  margin-top: 33px;
  width: auto;
  height: 34px;
  font-size: 14px;
  font-weight: 400;
  color: rgba(138, 150, 163, 1);
  line-height: 22px;
}
.productAction {
  margin-left: auto;
  margin-right: auto;
  margin-top: 34px;
  width: 130px;
  height: 38px;
  line-height: 38px;
  border: 1px solid rgba(0, 162, 233, 1);
  border-radius: 4px;
  color: rgba(0, 162, 233, 1);
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
}

.productAction:hover {
  background: rgba(0, 162, 233, 1);
  color: #fff;
}

.conmmonUse {
  width: 1180px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 111px;
  height: 330px;
  border-top: 1px solid #e4e8ea;
  text-align: center;
}
.useTitle {
  margin-top: 110px;
  width: auto;
  height: 36px;
  font-size: 36px;
  font-weight: 400;
  color: rgba(37, 37, 37, 1);
}
.useAction {
  width: 172px;
  height: 52px;
  line-height: 52px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  background: rgba(0, 162, 233, 1);
  border-radius: 4px;
  font-size: 18px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
}

.onlineExperience {
  position: relative;
  width: 162px;
  height: 44px;
  line-height: 44px;
  background: rgba(0, 162, 233, 1);
  border-radius: 4px;
  top: 277px;
  left: 376px;
  font-size: 18px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
}
</style>

