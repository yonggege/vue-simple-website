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
      <ul class="yunzhangSceneUl">
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
    <div class="useTitle">现在使用云之讯，让您的应用搭上云通讯快车</div>
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
        background: 'url("../../static/images/smallnum/banner.png")'
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
        "云掌小号(AX），企业为每个业务员申请一个虚拟号码，客户拨打该号码可直接联系到相应的业务员，业务员侧可显示客户的真实手机号码或者虚拟号码。可应用于房产中介，二手车，平台类互联网公司等行业。",
      sceneData: [
        {
          sceneImgs: "../../static/images/smallnum/scene1.png",
          sceneTitles: "中介行业",
          sceneInfos:
            "经纪人在中介平台发布房源信息，留下<br>电话生成虚拟号码，客户可通过中介平<br>台查看并拨打经纪人的虚拟号码，双方<br>号码不可见。"
        },
        {
          sceneImgs: "../../static/images/smallnum/scene2.png",
          sceneTitles: "O2O行业",
          sceneInfos: "二手车商家在O2O平台发布二手车信<br>息，留下虚拟服务号码，客户拨打商家<br>虚拟号码，双方号码不可见，保护了<br>O2O平台客户信息。"
        },
        //此处为云掌小号页-场景应用占位使用，请勿删除
        {},{}
        
      ],
      advantageData: [
        {
          advantageImgs: "../../static/images/smallnum/advantage1.png",
          advantageTitles: "呼转、回呼",
          advantageInfos:
            "支持呼转和回呼，接听率高"
        },
        {
          advantageImgs: "../../static/images/smallnum/advantage2.png",
          advantageTitles: "加强私密性",
          advantageInfos:
            "保护被叫方信息，防止隐私泄露"
        },
        {
          advantageImgs: "../../static/images/smallnum/advantage3.png",
          advantageTitles: "资源统一管理",
          advantageInfos: "全国大、中、小城市资源，<br>支持17和非170手机号码，<br>可报备标记"
        },
        {
          advantageImgs: "../../static/images/smallnum/advantage4.png",
          advantageTitles: "政策支持",
          advantageInfos: "运营商直接授权，为大数据<br>分析和挖掘提供有力保障"
        }
      ],
      productData: [
        {
          productImgs: "../../static/images/smallnum/product1.png",
          productTitles: "点击通话",
          productInfos: "零人维护、一键拨号、两路呼叫",
          productActions: "了解更多"
        },
        {
          productImgs: "../../static/images/smallnum/product2.png",
          productTitles: "安全通话",
          productInfos: "随机临时号、双向保护、防止骚扰、<br>快速接入",
          productActions: "了解更多"
        },
        {
          productImgs: "../../static/images/smallnum/product3.png",
          productTitles: "语音验证",
          productInfos:
            "语音播报、3秒到达、100%验证到达<br>，配合语音通知双保险",
          productActions: "了解更多"
        },
        {
          productImgs: "../../static/images/smallnum/product4.png",
          productTitles: "语音通知",
          productInfos: "高并发、无遗漏、无高峰延迟满足更<br>多通知场景",
          productActions: "了解更多"
        }
      ]
    };
  },
};
</script>
