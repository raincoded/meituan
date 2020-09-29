<template>
  <div class="mingsu-container">
    <!-- 名宿导航 -->
    <com-nav :recommend="recommend" v-model="curActive" />
    <div class="detail-content">
      <!-- 名宿详情 -->
      <div class="slider-content clearfix" v-if="curActive">
        <com-ming-su
          v-for="(item) in isShowing"
          :key="item.productId"
          :data="item"
        />
      </div>
    </div>
  </div>
</template>
<script>
import comMingSu from "./mingsu";
import comNav from "./nav";
const axios = require("axios");
export default {
  components: {
    comNav,
    comMingSu
  },
  data() {
    return {
      isShowing: [],
      comingSoon: [],
      curActive: undefined,
      recommend: {},
      tansformClass: false,
    };
  },
  methods: {
    changeUrl(url) {
      const arr = url.split(/\/w\.h\//g);
      const newurl = arr[0] + "/" + arr[1] + "@214w_297h_1e_1c";
      return newurl;
    },
    changeClass(type) {
      if (this.tansformClass == type) {
        return;
      }
      this.tansformClass = type;
    },
  },
  created() {
    axios.get("./json/mingsu.json").then((req) => {
      this.recommend = req.data.cityList;
      this.curActive = this.recommend[0].cityId;
      // console.log(this.recommend);
    });
    axios.get("./json/huhehaote.json").then((req) => {
      for (const item of req.data.productList) {
        item.url = `https://minsu.meituan.com/housing/${item.productId}/?phx_wake_up_type=mtpc_category&phx_wake_up_source=recommend`;
      }
      this.isShowing = req.data.productList;

      // console.log("请求成功", this.isShowing);
    });
  },
};
</script>
<style  lang="scss" scoped>
.mingsu-container {
  position: relative;
  width: 1190px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  // 名宿详情
  .detail-content {
    padding: 20px;
    padding-right: 0;
    padding-bottom: 0;
    border: 1px solid #E5E5E5;
    border-top: 0px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    background: #fff;
}
  .slider-content {
    position: relative;
    width: auto;
    width: 1190px;
    margin-top: 1px;
    transition: left 0.5s;
    transition-timing-function: ease-out;
    white-space: nowrap;
    box-sizing: border-box;
    .mr {
      margin-right: 19px;
    }
  }
}
</style>