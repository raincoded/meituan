<template>
  <nav class="botton-nav" v-if="navList.length>0">
    <div class="title">美团导航</div>
    <dl class="b-n-content">
      <div class="b-n-classification" v-for="(nav,index) in navList" :key="index">
        <dt class="b-n-subtitle">{{nav.subtitle}}</dt>
        <div class="b-n-sublist">
          <dd class="b-n-list-item" v-for="(item,i) in nav.subList" :key="i">
            <a :href="item.href" :title="item.title" target="_blank">
              {{item.title}}
              <span class="nav-promotion" v-if="item.isHot">HOT</span>
            </a>
          </dd>
        </div>
      </div>
    </dl>
  </nav>
</template>
<script>
import localApi from "@/ajax/localApi.js";
export default {
  data() {
    return {
      navList: [],
    };
  },
  created() {
    localApi.getNavList().then((req) => {
      this.navList = req.data;
    });
  },
};
</script>
<style lang='scss' scoped>
.botton-nav {
  margin: 40px auto 0;
  width: 1190px;
  height: auto;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  background: #ffffff;
  .title {
    width: auto;
    height: 44px;
    font-size: 16px;
    font-weight: 500;
    color: #222222;
    text-align: left;
    padding-left: 20px;
    padding-top: 6px;
    line-height: 44px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  .b-n-content {
    width: 100%;
    height: auto;
    .b-n-classification {
      width: 100%;
      height: auto;
      overflow: hidden;
      .b-n-subtitle {
        width: 100px;
        height: 100%;
        float: left;
        font-size: 14px;
        font-weight: 500;
        color: #222222;
        text-align: center;
        padding: 10px 0;
      }
      .b-n-sublist {
        width: 1090px;
        height: auto;
        padding-top: 12px;
        float: left;
        border-bottom: 1px solid #e5e5e5;
        overflow: hidden;
        .b-n-list-item {
          width: 100px;
          height: 17px;
          font-size: 12px;
          text-align: left;
          margin-bottom: 13px;
          float: left;
          a {
            display: block;
            width: 80px;
            cursor: pointer;
            color: #666666;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            &:hover {
              color: #fe8c00;
            }
          }
          .nav-promotion {
            font-size: 12px;
            color: #fff;
            background: #ff4848;
            font-weight: 400;
            border-radius: 10px;
            padding: 0 6px;
            margin: 0 5px;
            position: relative;
            top: -1px;
          }
        }
      }
    }
  }
}
</style>