<template>
  <div class="container">
    <div class="aboutArea">
     <ul>
       <li v-for="(item,index) in aboutData" :key="item.index" @click="goToPage(index)">{{item}}</li>
     </ul>
    </div>
    <div class="copyright">{{copyrights}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      aboutData: [
        "关于我们",
        "法律声明及隐私权政策",
        "联系我们",
        "加入云之讯"
      ],
      copyrights:
        "© 2018 深圳市云之讯网络技术有限公司 粤ICP备14046849号 增值电信业务经营许可证：粤B2-20140247  深圳市市场监督管理局企业主体身份公示"
    };
  },

   methods: {
    goToPage(index) {
      switch (index) {
        case 0:
          console.log("跳转到关于我们页", index);
          break;
        case 1:
          console.log("跳转到法律声明及隐私权政策页", index);
          break;
        case 2:
          console.log("跳转到联系我们页", index);
          break;
        case 3:
          console.log("跳转到加入云之讯页", index);
          break;
        default:
          break;
      }
    }
  }
};
</script>
<style scoped>
.container {
  height: 330px;
  width: 100%;
}
.aboutArea {
  height: 15px;
  line-height: 15px;
  margin-left: 300px;
  padding-top: 41px;
  width: 640px;
}
.aboutArea ul {
  display: flex;
}
.aboutArea ul li {
  flex: 1;
  height: 15px;
  font-size: 16px;
  font-weight: 400;
  color: rgba(108, 108, 108, 1);
  cursor: pointer;
}

.aboutArea ul li:last-child {
  margin-left: -42px;
}
.copyright {
  margin-top: 20px;
  margin-left: 338px;
  width: 803px;
  height: 12px;
  font-size: 12px;
  font-weight: 400;
  color: rgba(156, 156, 156, 1);
  line-height: 30px;
}
</style>


