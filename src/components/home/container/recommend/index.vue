<template>
  <div class="recommend-container">
    <!-- 猜你喜欢导航 -->
    <com-nav />
    <div class="detail-content">
      <!-- 商店详情 -->
      <com-shop v-for="item in isShowing" :key="item.itemId" :data="item" />
    </div>
  </div>
</template>
<script>
import comShop from "./shop";
import comNav from "./nav";
// import meituanApi from "@/ajax/meituanApi.js";//美团json
import meituanApi from "@/ajax/localApi.js";//本地json
const axios = require("axios");
export default {
  components: {
    comNav,
    comShop,
  },
  data() {
    return {
      isShowing: [],
    };
  },
  methods: {
    changeUrl(url) {
      const arr = url.split(/\/w\.h\//g);
      const newurl = arr[0] + "/" + arr[1] + "@214w_120h_1e_1c";
      return newurl;
    },
  },
  created() {
    meituanApi.getRecommed().then((req) => {
      req.data.forEach(item => {
        item.imgUrl=this.changeUrl(item.imgUrl)
      });
      this.isShowing=req.data
    });
    // axios.get('/ptapi/recommends').then((req) => {
    //   // axios.get("json/recommed.json").then((req) => {
    //   for (const item of req.data) {
    //     item.imgUrl = this.changeUrl(item.imgUrl);
    //   }
    //   this.isShowing = req.data;
    //   console.log("请求成功", this.isShowing);
    // });
    // axios.get('/ptapi/recommends')
  },
};
</script>
<style  lang="scss" scoped>
.recommend-container {
  position: relative;
  width: 1190px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  // 名宿详情
  .detail-content {
    background-color: #fff;
    border: 1px solid #e5e5e5;
    border-top: 0;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    max-height: 758px;
    padding: 10px 10px 20px;
    width: 100%;
    box-sizing: border-box;
    overflow-y: hidden;
    text-align: left;
  }
}
</style>