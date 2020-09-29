<template>
  <!--header区域-->
  <div class="com-header">
    <!--导航区域-->
    <div class="header-bar">
      <div class="header-container">
        <h-geo class="header-bar-position" />
        <h-nav class="header-bar-nav" />
      </div>
    </div>
    <!--搜索区域-->
    <div class="header-content" :class="{index}">
      <logo class="header-logo" />
      <search-input class="header-search" />
    </div>
  </div>
</template>
<script>
import HGeo from "./geo";
import HNav from "./nav";
import logo from "./logo";
import searchInput from "./searchInput";
export default {
  props:['index'],
  components: {
    HGeo,
    HNav,
    logo,
    searchInput,
  },
};
</script>
<style lang="scss">
.com-header {
  background: #fff;
  box-shadow: 0 2px 27px 0 rgba(0, 0, 0, 0.1);
  .header-bar {
    background: #f8f8f8;
    height: 40px;
    .header-container {
      display: flex;
      justify-content: space-between;
      width: 1190px;
      margin: 0 auto;
      font-size: 12px;
      color: #999;
      .header-bar-position {
        height: 100%;
      }
      .header-bar-nav {
        height: 100%;
      }
    }
  }
  .header-content {
    position: relative;
    width: 1190px;
    margin: 0 auto;
    &.index {
      padding-bottom: 35px;
    }
    .header-logo {
      padding-top: 28px;
      padding-right: 60px;
      padding-bottom: 40px;
      font-size: 16px;
      min-width: 220px;
      height: 54px;
      box-sizing: content-box;
      vertical-align: sub;
    }
    .header-search {
      position: absolute;
      left: 50%;
      top: 0;
      transform: translatex(-50%);
      padding-top: 28px;
      z-index: 10010;
    }
  }
}
</style>