<template>
  <div class="index-nav-container">
    <ul class="clearfix">
      <li class="title nav-item mf-shang-hei-regular">推荐民宿</li>
      <li
        class="nav-item"
        :class="{active:curActive==item.cityId}"
        @mouseenter="changeAvtive(item.cityId)"
        v-for="item in recommend"
        :key="item.cityId"
      >{{item.cityName}}</li>
      <li class="total nav-item">
        <a href="https://maoyan.com/" class="link" target="_blank">
          <span>全部</span>
          <i class="iconfont">&#xe633;</i>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["recommend","curActive"],
  model: {
    prop: "curActive",
    event: "change",
  },
  data() {
    return {
      // active: this.curActive,
    };
  },
  methods: {
    changeAvtive(id) {
      // this.active = id;
      this.$emit("change", id);
    },
  },
};
</script>
<style lang="scss" scoped>
.index-nav-container {
  width: 100%;
  line-height: 44px;
  box-sizing: border-box;
  font-size: 14px;
  color: #fff;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  background: linear-gradient(
      to right,
      rgb(243, 182, 74) 2%,
      rgb(242, 197, 69) 97%
    )
    rgb(243, 182, 74);
  .nav-item {
    float: left;
    padding: 0 5px;
    position: relative;
    cursor: pointer;
    text-transform: uppercase;
    &.active:after {
      position: absolute;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 7px solid #fff;
      content: " ";
      display: block;
      width: 2px;
      height: 0;
      top: 38px;
      left: 0;
      right: 0;
      margin: auto;
    }
  }
  .title {
    font-size: 18px;
    margin-left: 13px;
    margin-right: 10px;
  }
  .total {
    float: right;
    margin-right: 12px;
    a {
      color: #fff;
    }
    .iconfont {
      font-size: 12px;
    }
  }
}
</style>