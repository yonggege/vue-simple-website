<template>
<div class="footer">
    <div class="footer_add_wp">
      <ul>
        <li class="item" v-for="item in serviceData" :key="item.id">
          <img :src="item.serviceIcon">
          <span>{{item.serviceText}}</span>
          </li>
      </ul>
		</div>
    <div class="footer-introduction">
      <ul>
        <li v-for="item in introductionData" :key="item.id"> 
          <div class="introduction-container">
            <div class="introductionTitle">{{item.introductionTitle}}</div>
              <ul class="introductionContent">
                <li v-for="data in item.introductionContent" :key="data.id">
                  <div>{{data}}</div>
                </li>
              </ul>
              <div class="introductionImg">
                <img :src="item.image">
              </div> 
          </div>
        </li>
      </ul>
    </div>
    <div class="footer-copyright">
      <p>
        <span>{{copyrightCom}}</span>
        <span>{{copyrightNum}}</span>
        <span>{{copyrightlicense}}</span>
        <a :href="copyrightAddress" target="_blank">
          <img :src="copyrightImgUrl" :title="copyrightImgHint" :alt="copyrightImgHint" :style="copyrightImgStyle">
        </a>
	    </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      serviceData: [
        {
          serviceText: "服务咨询 400-777-6698",
          serviceIcon: "../../static/images/main/foot-bm-phone.png"
        },
        {
          serviceText: "一对一贵宾级服务",
          serviceIcon: "../../static/images/main/foot-bm-person.png"
        },
        {
          serviceText: "7X24小时技术保障",
          serviceIcon: "../../static/images/main/foot-bm-hour.png"
        }
      ],
      introductionData: [
        {
          introductionTitle: "公司",
          introductionContent: [
            "公司资质",
            "关于我们",
            "合作伙伴",
            "联系我们",
            "加入我们"
          ]
        },
        {
          introductionTitle: "产品",
          introductionContent: [
            "点击通话",
            "云掌小号",
            "安全通话",
            "语音通知",
            "语音验证"
          ]
        },
        {
          introductionTitle: "客户案列",
          introductionContent: ["链家网", "金立手机", "云之家", "更多案例",'']
        },
        {
          introductionTitle: "开发者服务",
          introductionContent: ["开发文档", "SDK下载", "常见问题", "用户协议",'']
        },
        {
          introductionTitle: "关注云之讯",
          introductionContent: [],
          image: "../../static/images/main/wx_code.png"
        }
      ],
      copyrightCom: "© 2018 深圳市云之讯网络技术有限公司",
      copyrightNum: "粤ICP备14046849号",
      copyrightlicense:
        "增值电信业务经营许可证：粤B2-20140247 深圳市市场监督管理局企业主体身份公示",
      copyrightAddress:
        "http://szcert.ebs.org.cn/4a131819-50e3-42d5-82a1-52d9d59221d0",
      copyrightImgUrl: "http://szcert.ebs.org.cn/Images/govIcon.gif",
      copyrightImgHint: "深圳市市场监督管理局企业主体身份公示",
      copyrightImgStyle: {
        width: "18px",
        height: "25px",
        border: "none",
        borderWidth: "0"
      }
    };
  }
};
</script>

<style scoped>
.footer {
  width: 100%;
  height: 540px;
  overflow: hidden;
  background: #303539;
}

.item img,
.item span {
  vertical-align: middle;
}
.footer_add_wp {
  width: 100%;
  height: 80px;
  line-height: 80px;
  margin: 0 auto;
  padding-bottom: 20px;
  border-bottom: 1px solid #3a3f42;
  border-top: 1px solid #3a3f42;
}

.footer_add_wp ul {
  margin: 18px auto;
  width: 70%;
  height: 80%;
  display: flex;
  color: #fff;
}

.footer_add_wp ul li {
  flex: 1;
  border-right: 1px solid #3a3f42;
  text-align: center;
}

.footer_add_wp ul li:last-child {
  border-right: none;
}

.footer_add_wp ul li span {
  margin-left: 20px;
  font-size: 18px;
}

.footer-introduction {
  height: 300px;
  width: 85%;
  margin: 0 auto;
}

.footer-introduction ul,
.introduction-container ul {
  width: 90%;
  height: 85%;
  display: flex;
  margin-top: 25px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.footer-introduction ul li {
  padding: 15px 0;
  flex: 1;
}

.introduction-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.introductionTitle {
  font-size: 18px;
  color: #fff;
}
.introductionContent {
  display: flex;
  flex-flow: column;
}

.introductionContent li {
  line-height: 8px;
  color: #D0D5DA;
  opacity: 0.5;
  font-weight:400;
  font-size: 14px;
  cursor: pointer;
}

.introductionContent li:hover {
  color: #fff;
  opacity: 1;
}

.introductionImg {
    margin-top: -180px;
    position: relative;
}

.footer-copyright {
  width: 64%;
  height: 80px;
  line-height: 80px;
  margin-left: 14%;
  border-top: 1px solid #3a3f42;
  color: #636879;
  font-size: 12px;
  text-align: left;
  overflow: hidden;
}
</style>
