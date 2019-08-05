<template>
<div class="container">
  <myheader></myheader>
  <div class="commonBannerArea" :style="bannerStyle">
    <div class="onlineExperience">在线体验</div>
  </div>
  <div class="commonMenu">
    <div class="commonMenuList">
      <ul>
        <li v-for="item in menuData" :key="item.index" >
          <a :href="item.menuUrl">{{item.menuTitle}}</a>
        </li>
      </ul>
    </div>
  </div>
  <div class="commonIntroduction" id="itemIntroduction">
    <div class="commonTitle">
      <span class="commonFlag"> </span>
      <span class="commonIntroductionTitle">产品简介</span> 
    </div>
    <div class="commonIntroductionInfo">{{commonIntroductionInfos}}</div>
  </div>
  <div class="commonScene" id="itemScene">
    <div class="commonTitle">
      <span class="commonFlag"> </span>
      <span class="commonIntroductionTitle">应用场景</span> 
    </div>
    <div class="sceneList">
      <ul>
        <li v-for="item in sceneData" :key="item.index">
          <div class="sceneImg"><img :src="item.sceneImgs"></div>
          <div class="sceneTitle">{{item.sceneTitles}}</div>
          <div class="sceneInfo" v-html="item.sceneInfos"></div>
        </li>
      </ul>
    </div>
  </div>
  <div class="commonAdvantage" id="itemAdvantage">
     <div class="commonTitle">
      <span class="commonFlag"> </span>
      <span class="commonIntroductionTitle">产品优势</span> 
    </div>
    <div class="advantageList">
      <ul>
        <li v-for="item in advantageData" :key="item.index">
          <div class="advantageImg"><img :src="item.advantageImgs"></div>
          <div class="advantageTitle">{{item.advantageTitles}}</div>
          <div class="advantageInfo" v-html="item.advantageInfos"></div>
        </li>
      </ul>
    </div>
  </div>
  <div class="commonProduct" id="itemProduct">
    <div class="commonTitle">
      <span class="commonFlag"> </span>
      <span class="commonIntroductionTitle">相关产品</span> 
    </div>
    <div class="productList">
      <ul>
        <li v-for="item in productData" :key="item.index">
          <div class="productImg"><img :src="item.productImgs"></div>
          <div class="productTitle">{{item.productTitles}}</div>
          <div class="productInfo" v-html="item.productInfos"></div>
          <div class="productAction">{{item.productActions}}</div>
        </li>
      </ul>
    </div>
  </div>
  <div class="conmmonUse">
    <div class="useTitle">现在使用云掌互联，让您的应用搭上云通讯快车</div>
    <div class="useAction">立即使用</div>
  </div>
  <myfooter></myfooter>
</div>
</template>

<script>
import myheader from "./BaseHeader";
import myfooter from "./BaseFooter";
export default {
  components: {
    myheader,
    myfooter
  },
  data() {
    return {
      bannerStyle: {
        background: 'url("../../static/images/callclick/banner.png")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      },
      menuData: [
        {
          menuTitle: "产品简介",
          menuUrl: "#itemIntroduction"
        },
        {
          menuTitle: "应用场景",
          menuUrl: "#itemScene"
        },
        {
          menuTitle: "产品优势",
          menuUrl: "#itemAdvantage"
        },
        {
          menuTitle: "相关产品",
          menuUrl: "#itemProduct"
        }
      ],
      commonIntroductionInfos:
        "用户通过PC或者APP一键拨号，业务系统调用云掌互联API接口，平台发起两路呼叫，实现双方通话。",
      sceneData: [
        {
          sceneImgs: "../../static/images/callclick/scene1.png",
          sceneTitles: "网页呼叫(PC)",
          sceneInfos:
            "企业可在网页上嵌入高清电路级语音通<br>信能力，满足各种沟通需求。"
        },
        {
          sceneImgs: "../../static/images/callclick/scene2.png",
          sceneTitles: "点击呼叫(APP)",
          sceneInfos: "在APP上调用API接口能力，实现各种<br>通话需求。"
        },
        {
          sceneImgs: "../../static/images/callclick/scene3.png",
          sceneTitles: "通话详单",
          sceneInfos: "通话记录详单可查，同时通过接口返回<br>客户。"
        },
        {
          sceneImgs: "../../static/images/callclick/scene4.png",
          sceneTitles: "录音保存",
          sceneInfos: "录音可查，通话结束后还可通过接口返<br>回录音地址。"
        }
      ],
      advantageData: [
        {
          advantageImgs: "../../static/images/callclick/advantage1.png",
          advantageTitles: "快速集成",
          advantageInfos:
            "少量代码即可集成到企业<br>ERP、CRM、OA系统中，没<br>有代码冗余"
        },
        {
          advantageImgs: "../../static/images/callclick/advantage2.png",
          advantageTitles: "零人力成本",
          advantageInfos:
            "企业无需购入大量设备，可<br>按需取用、按需付费并集中<br>管理；云端部署企业无需投<br>入人力维护"
        },
        {
          advantageImgs: "../../static/images/callclick/advantage3.png",
          advantageTitles: "功能全面",
          advantageInfos: "灵活去电、全程录音、通话<br>数据分析，达到客户要求"
        },
        {
          advantageImgs: "../../static/images/callclick/advantage4.png",
          advantageTitles: "语音质量",
          advantageInfos: "专有运营商网络电话质量，<br>高可用性"
        }
      ],
      productData: [
        {
          productImgs: "../../static/images/callclick/product1.png",
          productTitles: "安全通话",
          productInfos: "随机临时号、双向保护、防止骚扰、快速接入",
          productActions: "了解更多"
        },
        {
          productImgs: "../../static/images/callclick/product2.png",
          productTitles: "云掌小号",
          productInfos: "虚拟号码、隐私盾牌、快速接入",
          productActions: "了解更多"
        },
        {
          productImgs: "../../static/images/callclick/product3.png",
          productTitles: "语音验证",
          productInfos:
            "语音播报、3秒到达、100%验证到达<br>，配合语音通知双保险",
          productActions: "了解更多"
        },
        {
          productImgs: "../../static/images/callclick/product4.png",
          productTitles: "语音通知",
          productInfos: "高并发、无遗漏、无高峰延迟满足更多<br>通知场景",
          productActions: "了解更多"
        }
      ]
    };
  },
};
</script>

