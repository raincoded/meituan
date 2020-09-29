<template>
  <div class="box clearfix">
    <ul class="banner-box" v-if="bannerData">
      <!-- 轮播图片 -->
      <router-link
        to="/"
        v-for="(item,index) in bannerData"
        :key="item.url"
        :style="backgrounSrc(item.src)"
        :class="{active:curBanner==index}"
      />
      <!-- 四个小方块 -->
      <div class="btnList clearfix">
        <span
          v-for="(item,i) in bannerData"
          :key="i"
          @mouseenter="changeBanner(i)"
          :class="{btnActive:curBanner==i}"
        />
      </div>
      <!-- 左右按钮 -->
      <button class="left" @click="changeBanner('left')">&lt;</button>
      <button class="right" @click="changeBanner('right')">&gt;</button>
    </ul>
  </div>
</template>
<script>
const path = require("path");
export default {
  data() {
    return {
      bannerData: [
        {
          url: "/1",
          src:
            "http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg",
        },
        {
          url: "/2",
          src:
            "http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg",
        },
        {
          url: "/3",
          src:
            "http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg",
        },
        {
          url: "/4",
          src:
            "http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg",
        },
        {
          url: "/5",
          src:
            "http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg",
        },
      ],
      curBanner: 1,
    };
  },
  methods: {
    backgrounSrc(url) {
      return {
        "background-image": `url(${url})`,
      };
    },
    changeBanner(type) {
      // console.log(type);
      const len = this.bannerData.length;
      if (typeof type === "string") {
        // console.log("string");
        if (type == "left") {
          // console.log(type);
          --this.curBanner < 0 ? (this.curBanner = len-1) : this.curBanner;
        } else {
          ++this.curBanner > len-1 ? (this.curBanner = 0) : this.curBanner;
        }
      } else if (typeof type === "number") {
        this.curBanner = type;
      } else {
        // console.log("else");
        this.curBanner = (++this.curBanner + len) % len;
      }
      // console.log(this.curBanner);
    },
  },
};
</script>
<style lang="scss" scoped>
.box {
  position: relative;
}
.clearfix::after {
  display: block;
  content: "";
  clear: both;
  overflow: hidden;
}
.banner-box {
  position: relative;
  width: 550px;
  height: 240px;
  a {
    position: absolute;
    left: 0;
    top: 0;
    width: 550px;
    height: 240px;
    background-repeat: no-repeat;
    background-size: 550px;
    opacity: 0;
    transition: opacity 0.5s;
    &.active {
      opacity: 1;
      z-index: 1000;
    }
  }
  .btnList {
    position: absolute;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1001;
    span {
      float: left;
      width: 15px;
      height: 4px;
      margin-right: 10px;
      background: rgb(255, 255, 255);
      opacity: 0.4;

      &.btnActive {
        opacity: 1;
      }
    }
    span:hover {
      opacity: 1;
      // background: red;
      cursor: pointer;
    }
  }

  .left,
  .right {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #333;
    opacity: 0.7;
    border: none;
    color: #fff;
    font-size: 2em;
    display: none;
    outline: none;
    cursor: pointer;
    z-index: 1001;
  }
  .left {
    left: 20px;
  }
  .right {
    right: 20px;
  }
}
.banner-box:hover button {
  display: block;
}
</style>