<template>
  <div class="main-container">
    <myheader></myheader>
    <div class="topBannerBox">
      <div class="swiper-container swiper-container-header">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
           <div class="topBannerArea topBannerOne">
           </div>
          </div>
          <div class="swiper-slide">
           <div class="topBannerArea topBannerOne">
           </div>
          </div>
          <div class="swiper-slide">
           <div class="topBannerArea topBannerOne">
           </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="productBox">
      <div class="boxTitle">{{productTitle}}</div>
         <div class="swiper-father">
          <div class="swiper-container swiper-container-advantage">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="myAdvTopArea myAdvTopAreaLeft">
                  <div class="myAdvImg"><img src="../../static/images/main/adv1.png"></div>
                  <div class="myAdvTitle">身份验证</div>
                  <div class="myAdvText">5秒必达、99%到达率</div>
                </div>
                <div class="myAdvBottomArea">
                    <div class="bottomTopArea">
                      <div class="myProductTitle">短信验证</div>
                      <div class="myProductInfo">自主开发的分发系统，监控质量，99%到达率。优惠促销低至0.036元/条</div>
                      <div class="myProductAction">接入即享超值优惠</div>
                    </div>
                    <div class="bottomBottomArea">
                      <div class="myProductTitle">语音验证</div>
                      <div class="myProductInfo">自主开发的分发系统,监控质量，99%到达率。</div>
                      <div class="myProductAction">立即接入</div>
                    </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="myAdvTopArea myAdvTopAreaMiddle">
                  <div class="myAdvImg"><img src="../../static/images/main/adv2.png"></div>
                  <div class="myAdvTitle">消息推送</div>
                  <div class="myAdvText">轻松接入无遗漏烦忧</div>
                </div>
                <div class="myAdvBottomArea">
                    <div class="bottomTopArea">
                      <div class="myProductTitle">短信通知</div>
                      <div class="myProductInfo">无盲点覆盖三网，准时及时</div>
                      <div class="myProductAction">立即接入</div>
                    </div>
                    <div class="bottomTopArea">
                      <div class="myProductTitle">短信验证</div>
                      <div class="myProductInfo">用户激活，促销，满减，快速便捷触达用户</div>
                      <div class="myProductAction">立即接入</div>
                    </div>
                    <div class="bottomTopArea">
                      <div class="myProductTitle">短信验证</div>
                      <div class="myProductInfo">海外APP、网站、微信公众号开发者/跨境电商、跨境物流</div>
                      <div class="myProductAction">立即接入</div>
                    </div>
                    <div class="bottomTopArea">
                      <div class="myProductTitle">短信验证</div>
                      <div class="myProductInfo">简单、轻松接入，100%收到，无遗漏烦忧</div>
                      <div class="myProductAction">立即接入</div>
                    </div>
                  
                </div>
              </div>
              <div class="swiper-slide">
                <div class="myAdvTopArea myAdvTopAreaRight">
                  <div class="myAdvImg"><img src="../../static/images/main/adv3.png"></div>
                  <div class="myAdvTitle">呼叫中心</div>
                  <div class="myAdvText">低门槛、跨区域、无时限</div>
                </div>
                <div class="myAdvBottomArea">
                    <div class="bottomTopArea">
                      <div class="myProductTitle">点击通话</div>
                      <div class="myProductInfo">零成本、零插件、低门槛、跨区域、无时限，客服服务平台</div>
                      <div class="myProductAction">查看详情</div>
                    </div>
                    <div class="bottomTopArea">
                      <div class="myProductTitle">短信验证</div>
                      <div class="myProductInfo">双向保护、防止骚扰、录音清晰、快速接入</div>
                      <div class="myProductAction">查看详情</div>
                    </div>
                    <div class="bottomTopArea">
                      <div class="myProductTitle">短信验证</div>
                      <div class="myProductInfo">虚拟号码、隐私盾牌、快速接入</div>
                      <div class="myProductAction">查看详情</div>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-button-prev" tabindex="-1"></div>
          <div class="swiper-button-next" tabindex="-1"></div>
        </div>
    </div>
    <div class="middleBox">
       <div class="swiper-container swiper-container-middle">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
           <div class="middleBannerArea middleBannerOne">
             <div class="numProtectArea">
               <div class="numProtectTitle">{{numProtectTitles}}</div>
               <div class="numProtectInfo">{{numProtectInfos}}</div>
               <div class="numProtectText">{{numProtectTexts}}</div>
             </div>
             <div class="privateProtectArea">
               <div class="privateProtectTitle">{{privateProtectTitles}}</div>
               <div class="privateProtectInfo">{{privateProtectInfos}}</div>
               <div class="privateProtectAction" @click="knowMore">{{privateProtectActions}}</div>
             </div>
           </div>
          </div>
          <div class="swiper-slide">
           <div class="middleBannerArea middleBannerOne">
               <div class="numProtectArea">
               <div class="numProtectTitle">{{numProtectTitles}}</div>
               <div class="numProtectInfo">{{numProtectInfos}}</div>
               <div class="numProtectText">{{numProtectTexts}}</div>
             </div>
             <div class="privateProtectArea">
               <div class="privateProtectTitle">{{privateProtectTitles}}</div>
               <div class="privateProtectInfo">{{privateProtectInfos}}</div>
               <div class="privateProtectAction" @click="knowMore">{{privateProtectActions}}</div>
             </div>
           </div>
          </div>
          <div class="swiper-slide">
           <div class="middleBannerArea middleBannerOne">
               <div class="numProtectArea">
               <div class="numProtectTitle">{{numProtectTitles}}</div>
               <div class="numProtectInfo">{{numProtectInfos}}</div>
               <div class="numProtectText">{{numProtectTexts}}</div>
             </div>
             <div class="privateProtectArea">
               <div class="privateProtectTitle">{{privateProtectTitles}}</div>
               <div class="privateProtectInfo">{{privateProtectInfos}}</div>
               <div class="privateProtectAction" @click="knowMore">{{privateProtectActions}}</div>
             </div>
           </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="partnerBox">
      <div class="boxTitle">{{partnerTitle}}</div>
      <div class="parnerList">
        <ul >
          <li v-for="item in partnerData" :key="item.index">
              <img :src="item.partnerImg">
          </li>
        </ul>
      </div>
      <div class="validList">
        <ul>
          <li v-for="item in validData" :key="item.index"> 
            <img :src="item.validImg">
            <span>{{item.validText}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="newsBox">
        <div class="boxTitle">{{newsBigTitle}}</div>
        <div class="newsList">
          <ul>
            <li v-for="item in newsData" :key="item.index">
              <div class="newsImg"><img :src="item.newsImg"></div>
              <div class="newsSamllTitle">{{item.newsSamllTitle}}</div>
              <div class="newsInfo" v-html="item.newsInfo"></div>
              <div class="newsMore">{{item.newsMore}}</div>
            </li>
          </ul>
        </div>
    </div>
    <div class="registerBox">
      <div class="boxTitle" v-html="registerTitle"></div>
      <div class="registerNow" @click="registerNow">{{registerNowInfo}}</div>
    </div>
    <myfooter></myfooter>
  </div>
</template>
<script>
import myheader from "./BaseHeader";
import myfooter from "./BaseFooter";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";

export default {
  components: {
    myheader,
    myfooter
  },
  data: function() {
    return {
      productTitle: "稳定、全面的通讯产品",
      partnerTitle: "因为专业 · 所以信赖",
      numProtectTitles: "号码保护",
      numProtectInfos: "双隐模式更安全，专属中间号快捷互通",
      numProtectTexts: "适用场景：临时性联络需求，如中介，网约车，O2O等",
      privateProtectTitles: "隐私保护通话",
      privateProtectInfos: "保护用户隐私、提升满意度，工作资料防泄漏",
      privateProtectActions: "了解更多",
      partnerData: [
        { partnerImg: "../../static/images/main/index-cp-logo1.png" },
        { partnerImg: "../../static/images/main/index-cp-logo2.png" },
        { partnerImg: "../../static/images/main/index-cp-logo5.png" },
        { partnerImg: "../../static/images/main/index-cp-logo19.png" },
        { partnerImg: "../../static/images/main/index-cp-logo3.png" },

        { partnerImg: "../../static/images/main/index-cp-logo4.png" },
        { partnerImg: "../../static/images/main/index-cp-logo6.png" },
        { partnerImg: "../../static/images/main/index-cp-logo7.png" },
        { partnerImg: "../../static/images/main/index-cp-logo8.png" },
        { partnerImg: "../../static/images/main/index-cp-logo9.png" },

        { partnerImg: "../../static/images/main/index-cp-logo10.png" },
        { partnerImg: "../../static/images/main/index-cp-logo11.png" },
        { partnerImg: "../../static/images/main/index-cp-logo12.png" },
        { partnerImg: "../../static/images/main/index-cp-logo14.png" },
        { partnerImg: "../../static/images/main/index-cp-logo13.png" },

        { partnerImg: "../../static/images/main/index-cp-logo20.png" },
        { partnerImg: "../../static/images/main/index-cp-logo18.png" },
        { partnerImg: "../../static/images/main/index-cp-logo15.png" },
        { partnerImg: "../../static/images/main/index-cp-logo17.png" },
        { partnerImg: "../../static/images/main/index-cp-logo16.png" }
      ],

      validData: [
        {
          validImg: "../../static/images/main/index-valid-logo1.png",
          validText: "通信网络安全认证"
        },
        {
          validImg: "../../static/images/main/index-valid-logo2.png",
          validText: "增值电信业务经营许可证"
        },
        {
          validImg: "../../static/images/main/index-valid-logo3.png",
          validText: "AAA级信用企业"
        },
        {
          validImg: "../../static/images/main/index-valid-logo4.png",
          validText: "反信息诈骗联盟成员"
        }
      ],

      newsBigTitle: "云掌互联.新动态",
      newsData: [
        {
          newsImg: "../../static/images/main/news1.png",
          newsSamllTitle: "物联网解决方案出炉",
          newsInfo:
            "物联网解决方案出炉，关注场景和应用<br>从心出发，跨越生长，云之讯四周年趣味运动会",
          newsMore: " → 阅读更多"
        },
        {
          newsImg: "../../static/images/main/news2.png",
          newsSamllTitle: "云掌互联，你的流量你做主",
          newsInfo:
            "变革：人工智能+全营销平台<br>云之讯2018春节放假通知及服务安排",
          newsMore: " → 阅读更多"
        },
        {
          newsImg: "../../static/images/main/news3.png",
          newsSamllTitle: "从心出发，跨越生长",
          newsInfo: "春节期间我司客服业务正常运行<br>&nbsp&nbsp&nbsp",
          newsMore: " → 阅读更多"
        }
      ],
      registerTitle: "现在注册&nbsp，&nbsp即享免费套餐",
      registerNowInfo: "免费注册"
    };
  },
  methods: {
    registerNow() {
      console.log("跳转到注册页面");
    },
    knowMore() {
      console.log("了解更多");
    }
  },
  mounted() {
    var myHeaderSwiper = new Swiper(".swiper-container-header", {
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

    var myAdvantageSwiper = new Swiper(".swiper-container-advantage", {
      watchSlidesProgress: true,
      loop: true,
      initialSlide: 1,
      centeredSlides: true,
      loopedSlides: 3,
      slidesPerView: "auto",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });

    var myMiddleSwiper = new Swiper(".swiper-container-middle", {
      loop: true,
      autoplay: {
        disableOnInteraction: false,
        delay: 5000
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  },
};
</script>
<style scoped>
.main-container {
  width: 100%;
  height: 100%;
}

.topBannerBox {
  height: 610px;
  width: 100%;
}

.swiper-container {
  width: 100%;
  height: 100%;
  color: #fff;
}

.topBannerArea,
.middleBannerArea {
  width: 100%;
  height: 100%;
}
.swiper-pagination {
  position: relative;
  margin-top: -45px;
}
.topBannerOne {
  background: url("../../static/images/main/banner-one.png");
  background-size: cover;
}
.topBannerTwo {
  background-color: #ccc;
}
.topBannerThree {
  background-color: red;
}
.productBox {
  height: 970px;
  width: 100%;
  background: rgba(247, 248, 250, 1);
}

.swiper-father {
  position: relative;
}

.swiper-container-advantage {
  margin-top: 80px;
  width: 1100px;
  height: 670px;
}
.swiper-container-advantage .swiper-slide {
  width: 320px;
  height: 600px;
  margin-left: 20px;
  margin-top: 30px;
  margin-right: 20px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 3px 9px 1px rgba(39, 65, 118, 0.06);
  border-radius: 8px;
}

.swiper-container-advantage .swiper-slide.swiper-slide-active {
  position: relative;
  width: 340px;
  height: 670px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 3px 9px 1px rgba(39, 65, 118, 0.06);
  border-radius: 8px;
  bottom: 30px;
}

.swiper-father .swiper-button-prev {
  background: url("../../static/images/main/swiper-button-prev.png") no-repeat;
  left: 18%;
  outline: none;
}

.swiper-father .swiper-button-next {
  background: url("../../static/images/main/swiper-button-next.png") no-repeat;
  right: 18%;
  outline: none;
}

.myAdvTopArea {
  width: auto;
  height: 158px;
  border-radius: 8px 8px 0px 0px;
}

.myAdvTopAreaLeft {
  background: linear-gradient(
    -30deg,
    rgba(65, 192, 197, 1),
    rgba(93, 222, 215, 1)
  );
}
.myAdvTopAreaMiddle {
  background: linear-gradient(
    -30deg,
    rgba(70, 152, 242, 1),
    rgba(97, 175, 252, 1)
  );
  background-size: cover;
  background-position: 100%;
}
.myAdvTopAreaRight {
  background: linear-gradient(
    -30deg,
    rgba(251, 91, 84, 1),
    rgba(255, 132, 126, 1)
  );
}

.myAdvImg {
  padding-top: 26px;
}

.myAdvTitle {
  padding-top: 10px;
  font-weight: bold;
  font-size: 18px;
  margin: 0 auto;
  color: rgba(255, 255, 255, 1);
}

.myAdvText {
  margin-top: 10px;
  font-size: 14px;
}

.bottomTopArea {
  margin-top: 30px;
  text-align: left;
  padding-left: 25px;
  width: 255px;
  height: auto;
  font-size: 14px;
  color: rgba(55, 69, 82, 1);
}

.myProductTitle {
  color: #374552;
  font-size: 14px;
  font-weight: bold;
}
.myProductInfo {
  color: #868c93;
  font-size: 12px;
  margin-top: 6px;
  line-height: 22px;
}
.myProductAction {
  color: #00a2e9;
  font-size: 12px;
  margin-top: 4px;
  cursor: pointer;
}

.bottomBottomArea {
  text-align: left;
  margin-top: 30px;
  margin-left: 10px;
  padding-left: 16px;
  padding-top: 12px;
  width: 85%;
  height: 80px;
  background: rgba(248, 244, 254, 1);
  border-radius: 8px;
}

.middleBox {
  height: 770px;
  width: 100%;
}

.middleBannerOne {
  background: url("../../static/images/main/middleBannerOne.png");
  background-size: cover;
  position: relative;
}

.middleBannerTwo {
  background-color: #00a2e9;
}
.middleBannerThree {
  background-color: #303539;
}

.numProtectArea {
  position: absolute;
  top: 370px;
  margin-left: 19%;
  height: 170px;
  width: 400px;
}

.privateProtectArea {
  position: absolute;
  top: 530px;
  margin-left: 19%;
  height: 170px;
  width: 400px;
}
.privateProtectTitle {
  font-size: 18px;
}
.privateProtectInfo {
  font-size: 14px;
  padding-top: 8px;
}
.privateProtectAction {
  margin-left: 40%;
  margin-top: 10%;
  width: 60px;
  font-size: 14px;
  border: 1px solid rgba(0, 162, 233, 1);
  border-radius: 2px;
  color: #00a2e9;
  padding: 6px 10px;
  cursor: pointer;
}
.privateProtectAction:hover {
  color: #fff;
  background-color: rgba(0, 162, 233, 1);
}

.numProtectTitle {
  font-size: 24px;
  padding-top: 8px;
}
.numProtectInfo {
  font-size: 18px;
  padding-top: 8px;
}
.numProtectText {
  font-size: 14px;
  padding-top: 6px;
}

.partnerBox {
  height: 800px;
  width: 100%;
  background: rgba(247, 248, 250, 1);
}

.parnerList,
.validList {
  margin-top: 50px;
}

.parnerList ul {
  display: flex;
  flex-wrap: wrap;
  width: 1180px;
  margin: 0 auto;
}

.parnerList ul li {
  width: 20%;
  margin-bottom: 20px;
}

.validList ul {
  display: flex;
  width: 50%;
  margin: 0 auto;
}
.validList ul li {
  flex: 1;
}
.validList ul li img {
  vertical-align: middle;
}
.validList ul li span {
  height: 12px;
  font-size: 12px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}

.newsBox {
  height: 648px;
  width: 100%;
  background-color: #fff;
}

.newsList {
  margin-top: 50px;
}
.newsList ul {
  display: flex;
  width: 60%;
  margin: 0 auto;
}
.newsList ul li {
  flex: 1;
  height: 80%;
  margin: 0 40px;
}

.newsImg {
  width: 350px;
  height: 256px;
  background-color: #ccc;
}
.newsSamllTitle {
  text-align: left;
  margin-top: 16px;
  font-size: 20px;
  color: rgba(55, 69, 82, 1);
  font-weight: bold;
  line-height: 30px;
}

.newsInfo {
  text-align: left;
  margin-top: 14px;
  width: 337px;
  height: 46px;
  font-size: 16px;
  font-weight: 400;
  color: rgba(55, 69, 82, 1);
  line-height: 30px;
}

.newsMore {
  text-align: left;
  margin-top: 26px;
  width: auto;
  height: 16px;
  font-size: 17px;
  font-weight: 400;
  color: rgba(0, 162, 233, 1);
  line-height: 30px;
  cursor: pointer;
}

.registerBox {
  height: 302px;
  width: 100%;
  background-color: #303539;
}

.registerBox div {
  text-align: center;
  color: #fff;
}

.boxTitle {
  padding-top: 80px;
  font-size: 36px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}

.registerNow {
  width: 200px;
  height: 60px;
  line-height: 60px;
  margin: 0 auto;
  font-size: 18px;
  margin-top: 40px;
  background-color: #00a2e9;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  cursor: pointer;
}
</style>
