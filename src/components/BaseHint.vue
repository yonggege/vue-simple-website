<template>
  <div class="container">
      <div class="hint">
        <ul class="pub-fun-list">
          <li class="item online"><a href="javascript:void(0);">{{onlines}}</a></li>
          <li class="item tel"> <a href="javascript:void(0);">{{tels}}</a></li>
          <li class="item feedback"><a href="https://www.wenjuan.com/s/neYnqe/" target="_blank">{{feedbacks}}</a></li>
          <li class="item to-top"> <a href="javascript:void(0);" v-show="showTop" @click="goTop">{{totops}}</a></li>
		  </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      onlines: "在线咨询",
      tels: "电话咨询",
      feedbacks: "意见反馈",
      totops: "TOP",
      showTop: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },

  methods: {
    scrollToTop(el) {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let browserHeight = window.outerHeight;
      if (browserHeight - scrollTop < 200) {
        this.showTop = true;
      } else {
        this.showTop = false;
      }
    },
    goTop() {
      window.pageYOffset = 0;
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  }
};
</script>

<style scoped>
.hint {
  width: 66px;
  height: 80px;
  position: fixed;
  top: 668px;
  right: 0;
  margin-top: -120px;
  z-index: 10001;
}

.item:last-child {
  border-bottom: none;
}

.item {
  width: 100%;
  border-bottom: 1px solid rgba(0, 162, 233, 0.6);
}

.item a:hover {
  background-color: #61affc;
}

.to-top a:hover {
  background-color: #e3e5e8;
}
.item a {
  display: block;
  width: 66px;
  padding-top: 50px;
  text-align: center;
  height: 30px;
  position: relative;
  font-size: 12px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}

.online a {
  background: #00a2e9 url("../../static/images/hint/hint1.png") 18px 16px
    no-repeat;
}

.tel a {
  background: #00a2e9 url("../../static/images/hint/hint2.png") 18px 16px
    no-repeat;
}
.feedback a {
  background: #00a2e9 url("../../static/images/hint/hint3.png") 18px 16px
    no-repeat;
}

.to-top a {
  height: 26px;
  padding-top: 20px;
  color: #374552;
  background-color: #e3e5e8;
  background-position: -137px 4px;
}
.to-top a {
  background: #e3e5e8 url("../../static/images/hint/topIcon.png") 26px 8px
    no-repeat;
}
</style>

