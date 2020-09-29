<template>
  <!-- 左侧列表导航 -->
  <div class="box-nav">
    <h1>全部分类</h1>
    <ul class="nav-menu">
      <li
        v-for="(item,index) of menuList"
        :key="index"
        @mouseenter="hoverMenu(index)"
        @mouseleave="leaveDetail"
      >
        <i :class="item.iCont"></i>
        <router-link to="#">
          {{ item.title }}
          <span v-if="item.isHot" :class="{hot:item.isHot}">HOT</span>
        </router-link>
        <i class="right"></i>
      </li>
      <!-- 移动后的详情 -->
      <div @mouseover="overDetail" @mouseleave="leaveDetail">
        <nav-detail
        :detailList="curMenu"
        class="nav-detail"
        v-show="show"
      />
      </div>
    </ul>
  </div>
</template>
<script>
import navDetail from "./navDetail";
import localApi from "@/ajax/localApi.js";
export default {
  components: {
    navDetail,
  },
  data() {
    return {
      menuList: [
        {
          title: "美食",
          iCont: "food",
          isHot: false,
          children: [
            {
              title: "美食",
              list: [
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
              ],
            },
          ],
        },
        {
          title: "外卖",
          iCont: "takeout",
          isHot: false,
          children: [
            {
              title: "外卖",
              list: [
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
              ],
            },
          ],
        },
        {
          title: "酒店",
          iCont: "hotel",
          isHot: true,
          children: [
            {
              title: "酒店",
              list: [
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
              ],
            },
          ],
        },
        {
          title: "民宿",
          iCont: "homestay",
          isHot: false,
          children: [
            {
              title: "民宿",
              list: [
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
              ],
            },
          ],
        },
        {
          title: "猫眼电影",
          iCont: "movie",
          isHot: false,
          children: [
            {
              title: "猫眼电影",
              list: [
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
              ],
            },
          ],
        },
        {
          title: "机票 / 火车票",
          iCont: "airport",
          isHot: false,
          children: [
            {
              title: "机票 / 火车票",
              list: [
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
              ],
            },
          ],
        },
        {
          title: "休闲娱乐 / KTV",
          iCont: "ktv",
          isHot: false,
          children: [
            {
              title: "休闲娱乐 / KTV",
              list: [
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
              ],
            },
          ],
        },
        {
          title: "生活服务",
          iCont: "life",
          isHot: false,
          children: [
            {
              title: "生活服务",
              list: [
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
              ],
            },
          ],
        },
        {
          title: "丽人 / 美发 / 医学美容",
          iCont: "hair",
          isHot: false,
          children: [
            {
              title: "丽人 / 美发 / 医学美容",
              list: [
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
              ],
            },
          ],
        },
        {
          title: "结婚 / 婚纱摄影 / 婚宴",
          iCont: "marry",
          isHot: false,
          children: [
            {
              title: "结婚 / 婚纱摄影 / 婚宴",
              list: [
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
              ],
            },
          ],
        },
        {
          title: "亲子 / 儿童乐园 / 幼教",
          iCont: "offspring",
          isHot: false,
          children: [
            {
              title: "亲子 / 儿童乐园 / 幼教",
              list: [
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
              ],
            },
          ],
        },
        {
          title: "运动健身 / 健身中心",
          iCont: "sport",
          isHot: false,
          children: [
            {
              title: "运动健身 / 健身中心",
              list: [
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
              ],
            },
          ],
        },
        {
          title: "家装 / 建材 / 家居",
          iCont: "furniture",
          isHot: false,
          children: [
            {
              title: "家装 / 建材 / 家居",
              list: [
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
              ],
            },
          ],
        },
        {
          title: "学习培训 / 音乐培训",
          iCont: "study",
          isHot: false,
          children: [
            {
              title: "学习培训 / 音乐培训",
              list: [
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
              ],
            },
          ],
        },
        {
          title: "医疗健康 / 宠物 / 爱车",
          iCont: "health",
          isHot: false,
          children: [
            {
              title: "医疗健康 / 宠物 / 爱车",
              list: [
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
              ],
            },
          ],
        },
        {
          title: "酒吧 / 密室逃脱",
          iCont: "bar",
          isHot: false,
          children: [
            {
              title: "酒吧 / 密室逃脱",
              list: [
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
                "lorem",
              ],
            },
          ],
        },
      ],
      curMenu: [],
      detail: [],
      show: false,
      timer: null,
    };
  },
  methods: {
    hoverMenu(index) {
      if (!this.show) {
        this.show = true;
      }
      clearTimeout(this.timer);
      this.curMenu = this.detail[index];
    },
    leaveDetail() {
      this.timer = setTimeout(() => {
        this.show = false;
      }, 200);
    },
    overDetail() {
      clearTimeout(this.timer);
    },
  },
  created() {
    localApi.getNavDetail().then((req) => {
      this.detail = req.data;
    });
  },
};
</script>
<style lang="scss" scoped>
// @import "@/assets/css/container/leftNav.scss";
.box-nav {
  position: relative;
  width: 230px;
  text-align: left;
  color: #646464;
  background: #fff;
  border: 1px solid #e5e5e5;
  border-top: none;
  box-sizing: border-box;
  > h1 {
    position: absolute;
    left: -1px;
    top: -50px;
    height: 50px;
    width: 230px;
    line-height: 50px;
    color: #222222;
    font-size: 16px;
    font-weight: 700;
    padding-left: 15px;
    background: #fff;
    border: 1px solid #e5e5e5;
    border-bottom: none;
    box-sizing: border-box;
  }

  .nav-menu {
    position: relative;
    width: 100%;
    padding-top: 10px;
    box-sizing: border-box;

    > li {
      position: relative;
      box-sizing: border-box;
      padding: 0 12px;
      height: 26px;
      line-height: 26px;
      > a {
        font-size: 13px;
        color: #646464;
      }

      > i {
        font-family: "meituan";
        font-size: 14px;
        font-style: normal;
        margin-right: 11px;

        &:before {
          width: 14px;
          height: 14px;
          display: inline-block;
        }
      }
      .right {
        width: 4px;
        height: 4px;
        color: #bfbfbf;
        border-bottom: 1px solid #bfbfbf;
        border-right: 1px solid #bfbfbf;
        transform: rotate(-45deg);
        display: block;
        position: absolute;
        right: 13px;
        top: 0;
        bottom: 0;
        margin: auto;
      }
      &:hover .right {
        color: #222222;
        border-bottom: 1px solid #222222;
        border-right: 1px solid #222222;
      }
      .food {
        &:before {
          content: "\e622";
          color: #ff8200;
        }
      }

      .takeout {
        &:before {
          content: "\e630";
          color: #ffb500;
        }
      }

      .hotel {
        &:before {
          content: "\e62a";
          color: #9b5e3e;
        }
      }

      .homestay {
        &:before {
          content: "\e631";
          color: #ffb500;
        }
      }

      .movie {
        &:before {
          content: "\e62c";
          position: relative;
          left: -2px;
          color: #ff3d00;
        }
      }

      .airport {
        &:before {
          content: "\e632";
        }
      }

      .ktv {
        &:before {
          content: "\e627";
          color: #03a9f4;
        }
      }

      .life {
        &:before {
          content: "\e633";
          color: #00bf96;
        }
      }

      .hair {
        &:before {
          content: "\e626";
          transform: scale(0.7);
          color: #ff4081;
        }
      }

      .marry {
        &:before {
          content: "\e629";
          color: #ff4081;
        }
      }

      .offspring {
        &:before {
          content: "\e623";
          color: #ff4081;
        }
      }

      .sport {
        &:before {
          content: "\e62b";
          color: #03a9f4;
        }
      }

      .furniture {
        &:before {
          content: "\e625";
          color: #00bf96;
        }
      }

      .study {
        &:before {
          content: "\e624";
          color: #00bf96;
        }
      }

      .health {
        &:before {
          content: "\e628";
          color: #03a9f4;
        }
      }

      .bar {
        &:before {
          content: "\e621";
          color: #00bf96;
        }
      }

      .hot {
        font-size: 12px;
        color: #222222;
        background: #fff3cc;
        display: inline-block;
        border-radius: 10px;
        padding: 0 7px;
        margin-left: 5px;
        transform: scale(0.9);
        position: relative;
        opacity: 1;
      }
      &:hover .hot {
        opacity: 1;
        font-weight: 400;
        background: linear-gradient(to bottom right, #ffd000, #ffbd00);
      }
    }

    > li:hover {
      background: rgba(255, 150, 0, 0.08);
      color: #222222;
    }

    > li:hover a {
      font-weight: 700;
      color: #222;
    }
    .nav-detail {
      position: absolute;
      left: 101%;
      bottom: 0;
      width: 400px;
      height: 416px;
      background-color: #fff;
      overflow: hidden;
      padding: 0 30px;
      box-sizing: border-box;
       z-index: 1002;
      // display: none;
    }

    // &:hover .nav-detail {
    //   display: block;
     
    // }
  }
}
</style>