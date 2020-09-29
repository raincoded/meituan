<template>
  <div class="maoyan-container">
    <!-- 猫眼电影导航 -->
    <com-nav :recommend="recommend" v-model='curActive' />
    <div class="detail-content">
      <!-- 猫眼电影详情 -->
      <div class="slider-content clearfix" v-if="curActive==1">
        <com-movie
          v-for="(item,index) in isShowing"
          :key="item.id"
          :movie="item"
          :class="{mr:index!==isShowing.lenth}"
        />
      </div>
      <!-- 即将上映 -->
      <div v-if="curActive==2" class="slider-content">
        <div class="d2 clearfix" :class="{right:tansformClass}">
          <com-movie
            v-for="(item,index) in comingSoon"
            :key="item.id"
            :movie="item"
            :class="{mr:index!==comingSoon.lenth}"
          />
        </div>
        <button class="lfBtn iconfont" @click="changeClass(false)">&#xe61c;</button>
        <button class="rtBtn iconfont" @click="changeClass(true)">&#xe633;</button>
      </div>
    </div>
  </div>
</template>
<script>
import comMovie from "./movie";
import comNav from "./nav";
const axios = require("axios");
export default {
  components: {
    comMovie,
    comNav,
  },
  data() {
    return {
      isShowing: [],
      comingSoon: [],
      curActive: 1,
      recommend:  [
          {
            name: "正在热映",
            id: 1,
          },
          {
            name: "即将上映",
            id: 2,
          },
        ],
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
    axios.get("./json/ishot.json").then((req) => {
      const hot = req.data.data.hot;
      for (const movie of hot) {
        movie.img = this.changeUrl(movie.img);
      }
      this.isShowing = hot;
    });
    axios.get("./json/即将上映.json").then((req) => {
      const hot = req.data.data.coming;
      for (const movie of hot) {
        movie.img = this.changeUrl(movie.img);
      }
      this.comingSoon = hot;
    });
  },
};
</script>
<style  lang="scss" scoped>
.maoyan-container {
  position: relative;
  width: 1190px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;

  .detail-content {
    width: 1190px;
    overflow: hidden;
  }
  .d2 {
    width: 2380px;
    transition: transform 0.5s;
    transition-timing-function: ease-out;
  }
  // 电影详情
  .slider-content {
    position: relative;
    width: auto;
    // height: 100%;
    width: 1190px;
    margin: 0px 12px;
    margin-top: 1px;
    transition: left 0.5s;
    transition-timing-function: ease-out;
    // overflow-x: auto;
    white-space: nowrap;
    box-sizing: border-box;
    .mr {
      margin-right: 19px;
    }
    .lfBtn,
    .rtBtn {
      position: absolute;
      top: 50%;
      width: 20px;
      height: 20px;
      // background: red;
      border-radius: 50%;
      transform: translateY(-50%);
      width: 40px;
      height: 40px;
      background: #333;
      color: #fff;
      text-align: center;
      font-size: 20px;
      line-height: 40px;
      border: none;
      outline: none;
      cursor: pointer;
      opacity: 0;
      transition: opacity 0.5s;
    }
    .lfBtn {
      left: 5px;
    }
    .rtBtn {
      right: 15px;
      transform: translateY(-50%);
    }
    .right {
      transform: translateX(-1160px);
    }
    &:hover {
      .lfBtn,
      .rtBtn {
        opacity: 0.8;
      }
    }
  }
}
</style>