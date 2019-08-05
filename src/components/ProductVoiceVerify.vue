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
        background: 'url("../../static/images/voiceverify/banner.png")'
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
        "语音验证码通过电话直呼到用户手机进行语音播报，可以避免各种原因导致的短信不及时、不安全等问题，可有效增强或替代网站、app应用现有的短信通知/验证码。以电话语音的形式进行交互，使用户验证过程更为轻松、高效。",
      sceneData: [
        {
          sceneImgs: "../../static/images/voiceverify/scene1.png",
          sceneTitles: "用户注册",
          sceneInfos:
            "用户注册时通过手机号码验证用户真实<br>身份，杜绝恶意注册，确保用户的真实<br>性，验证码最快3秒到达，确保用户不<br>流失。"
        },
        {
          sceneImgs: "../../static/images/voiceverify/scene2.png",
          sceneTitles: "支付认证",
          sceneInfos: "资金转移环节，需要手机身份验证，确<br>保资金安全，如确认支付、快捷支付、<br>确认收货等。"
        },
        {
          sceneImgs: "../../static/images/voiceverify/scene3.png",
          sceneTitles: "身份认证",
          sceneInfos: "用户在使用手机号码登陆网站或APP<br>时，通过优质线路呼叫用户，告知验证<br>码，完成用户身份确认，顺利快捷登<br>陆。"
        },
        {
          sceneImgs: "../../static/images/voiceverify/scene4.png",
          sceneTitles: "修改密码",
          sceneInfos: "用户忘记密码时，通过呼叫用户注册时<br>的预留手机，告知验证码，确认用户身<br>份，完成密码重置。"
        }
      ],
      advantageData: [
        {
          advantageImgs: "../../static/images/voiceverify/advantage1.png",
          advantageTitles: "快速必达",
          advantageInfos:
            "优质语音通道，支持时效"
        },
        {
          advantageImgs: "../../static/images/voiceverify/advantage2.png",
          advantageTitles: "无拦截",
          advantageInfos:
            "手机固话均可接收，手机软<br>件无法拦截，不受运营商短<br>信管制影响"
        },
        {
          advantageImgs: "../../static/images/voiceverify/advantage3.png",
          advantageTitles: "高并发",
          advantageInfos: "支持高达每秒8000TPS，避<br>免高峰排队、延迟等短信常<br>见问题"
        },
        {
          advantageImgs: "../../static/images/voiceverify/advantage4.png",
          advantageTitles: "通道保障",
          advantageInfos: "多资源渠道作为灾备，保障<br>业务高可用性"
        }
      ],
      productData: [
        {
          productImgs: "../../static/images/voiceverify/product1.png",
          productTitles: "点击通话",
          productInfos: "零人维护、一键拨号、两路呼叫",
          productActions: "了解更多"
        },
        {
          productImgs: "../../static/images/voiceverify/product2.png",
          productTitles: "安全通话",
          productInfos: "随机临时号、双向保护、防止骚扰、<br>快速接入",
          productActions: "了解更多"
        },
        {
          productImgs: "../../static/images/voiceverify/product3.png",
          productTitles: "云掌小号",
          productInfos:
            "虚拟号码、隐私盾牌、快速接入",
          productActions: "了解更多"
        },
        {
          productImgs: "../../static/images/voiceverify/product4.png",
          productTitles: "语音通知",
          productInfos: "高并发、无遗漏、无高峰延迟满足更<br>多通知场景",
          productActions: "了解更多"
        }
      ]
    };
  },
};
</script>

