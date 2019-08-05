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
        background: 'url("../../static/images/voicenotice/banner.png")'
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
        "语音通知主要应用于需要向大量用户发送相似的通知的企业，例如快递行业在用户密集的高峰时段，快递员使用语音通知业务，可一键向多个用户发起批量的快递送达通知，大大缩短等待时间，提高送件效率。",
      sceneData: [
        {
          sceneImgs: "../../static/images/voicenotice/scene1.png",
          sceneTitles: "批量语音通知",
          sceneInfos:
            "需要向大量用户发送相似的通知、内容<br>时，使用语音通知业务，可一键向多个<br>用户发起批量的快递送达通知，大大缩<br>短等待时间，提高送件效率。"
        },
        {
          sceneImgs: "../../static/images/voicenotice/scene2.png",
          sceneTitles: "会议通知",
          sceneInfos: "企业管理员以自动语音通知的方式外呼<br>至企业员工播放会议通知，企业员工第<br>一时间通过按键反馈参会与否"
        },
        {
          sceneImgs: "../../static/images/voicenotice/scene3.png",
          sceneTitles: "订单提醒",
          sceneInfos: "用户下订单后，以语音通知的方式拨打<br>到商家指定的手机或者固话上，比短信<br>更及时可靠，商家确认订单，可由平台<br>再以语音通知的方式及时通知给用户。"
        },
        {
          sceneImgs: "../../static/images/voicenotice/scene4.png",
          sceneTitles: "重大事件通知",
          sceneInfos: "发生突发的重大安全事件，语音通知平<br>台可以7*24小时全天候地将告警信息<br>第一时间通知到相关处理人员，确保重<br>大事件和故障得到及时响应。"
        }
      ],
      advantageData: [
        {
          advantageImgs: "../../static/images/voicenotice/advantage1.png",
          advantageTitles: "可配置可反馈",
          advantageInfos:
            "动态语音内容灵活支持业务<br>场景。支持接收按键反馈，<br>实时反馈通知结果"
        },
        {
          advantageImgs: "../../static/images/voicenotice/advantage2.png",
          advantageTitles: "高并发防屏蔽",
          advantageInfos:
            "支持高并发，稳定可靠。采<br>用优质号段资源，确保呼叫<br>不被屏蔽"
        },
        {
          advantageImgs: "../../static/images/voicenotice/advantage3.png",
          advantageTitles: "快速接入",
          advantageInfos: "技术零门槛，按指南轻松对<br>接，无缝嵌入系统"
        },
        {
          advantageImgs: "../../static/images/voicenotice/advantage4.png",
          advantageTitles: "文字识别",
          advantageInfos: "通知内容支持含变量的文本<br>模板，文本智能转语音，无<br>需录制再上传"
        }
      ],
      productData: [
        {
          productImgs: "../../static/images/voicenotice/product1.png",
          productTitles: "点击通话",
          productInfos: "零人维护、一键拨号、两路呼叫",
          productActions: "了解更多"
        },
        {
          productImgs: "../../static/images/voicenotice/product2.png",
          productTitles: "安全通话",
          productInfos: "随机临时号、双向保护、防止骚扰、<br>快速接入",
          productActions: "了解更多"
        },
        {
          productImgs: "../../static/images/voicenotice/product3.png",
          productTitles: "云掌小号",
          productInfos:
            "虚拟号码、隐私盾牌、快速接入",
          productActions: "了解更多"
        },
        {
          productImgs: "../../static/images/voicenotice/product4.png",
          productTitles: "语音验证",
          productInfos: "语音播报、3秒到达、100%验证到<br>达，配合语音通知双保险",
          productActions: "了解更多"
        }
      ]
    };
  },
};
</script>

