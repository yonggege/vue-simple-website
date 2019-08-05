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
        background: 'url("../../static/images/callsecure/banner.png")'
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
        "安全通话(AXB）业务员与客户之间通过临时生成的中间号码进行相互沟通，订单结束后，中间号码失效，可以有效的保护双方隐私。可应用于出行，快递，VIP服务，订餐等行业、约车沟通、网络电话。",
      sceneData: [
        {
          sceneImgs: "../../static/images/callsecure/scene1.png",
          sceneTitles: "出行行业",
          sceneInfos:
            "以订单作为绑定依据，生成隐私号码，<br>司机及乘客双方通过该隐私号码进行互<br>拨通话。订单完成，绑定关系解除。"
        },
        {
          sceneImgs: "../../static/images/callsecure/scene2.png",
          sceneTitles: "物流行业",
          sceneInfos:
            "即为快递员和买家分配一个隐私号码，<br>派件期间通过该号码进行通话，物品派<br>送成功，绑定关系随即解除。"
        },
        {
          sceneImgs: "../../static/images/callsecure/scene3.png",
          sceneTitles: "中介行业",
          sceneInfos:
            "经纪人在中介平台发布房源信息，留下<br>电话生成虚拟号码，客户可通过中介平<br>台查看并拨打经纪人的虚拟号码，双方<br>号码不可见。"
        },
        {
          sceneImgs: "../../static/images/callsecure/scene4.png",
          sceneTitles: "O2O行业",
          sceneInfos:
            "二手车商家在O2O平台发布二手车信<br>息，留下虚拟服务号码，客户拨打商家<br>虚拟号码，双方号码不可见，保护了<br>O2O平台客户信息。"
        }
      ],
      advantageData: [
        {
          advantageImgs: "../../static/images/callsecure/advantage1.png",
          advantageTitles: "订单控制",
          advantageInfos: "订单生成时，生成随机临时<br>号码，订单结束号码失效"
        },
        {
          advantageImgs: "../../static/images/callsecure/advantage2.png",
          advantageTitles: "隐私保护",
          advantageInfos:
            "隐藏主被叫双方真实号码，<br>避免恶意骚扰，防止隐私泄<br>露，或盗卖高端客户信息"
        },
        {
          advantageImgs: "../../static/images/callsecure/advantage3.png",
          advantageTitles: "资源统一管理",
          advantageInfos:
            "全国大、中、小城市资源，<br>支持17和非170手机号码，<br>可报备标记"
        },
        {
          advantageImgs: "../../static/images/callsecure/advantage4.png",
          advantageTitles: "政策支持",
          advantageInfos: "运营商直接授权，为大数据<br>分析和挖掘提供有力保障"
        }
      ],
      productData: [
        {
          productImgs: "../../static/images/callsecure/product1.png",
          productTitles: "点击通话",
          productInfos: "零人维护、一键拨号、两路呼叫",
          productActions: "了解更多"
        },
        {
          productImgs: "../../static/images/callsecure/product2.png",
          productTitles: "云掌小号",
          productInfos: "虚拟号码、隐私盾牌、快速接入",
          productActions: "了解更多"
        },
        {
          productImgs: "../../static/images/callsecure/product3.png",
          productTitles: "语音验证",
          productInfos:
            "语音播报、3秒到达、100%验证到达<br>，配合语音通知双保险",
          productActions: "了解更多"
        },
        {
          productImgs: "../../static/images/callsecure/product4.png",
          productTitles: "语音通知",
          productInfos: "高并发、无遗漏、无高峰延迟满足更<br>多通知场景",
          productActions: "了解更多"
        }
      ]
    };
  }
};
</script>

