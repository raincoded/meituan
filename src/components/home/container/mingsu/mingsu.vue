<template>
  <div class="minsu-item" v-if="data">
    <a :href="data.url" target="_blank">
      <div class="product-card-header">
        <img :src="data.coverImage" class="product-img" />
        <img src="https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png" alt class="head-img" />
      </div>
      <div class="product-info">
        <p class="product-title">{{data.title}}</p>
        <p class="sub-title">
          <span>整套{{data.layoutRoom}}居室·</span>
          <span>可住{{data.maxGuestNumber}}人 |</span>
          <span>{{data.locationArea}}</span>
        </p>
        <p class="price-number numfont price">
          <span class="price-icon">￥</span>
          {{data.price}}
        </p>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  props: ["data"],
  data() {
    return {};
  },
  computed: {
    // isSign() {
    // },
  },
  mounted() {
    // console.log(this.movie);
  },
};
</script>
<style lang="scss" scoped>
.minsu-item {
  float: left;
  margin-right: 18px;
  .product-card-header {
    position: relative;
    .product-img {
      width: 370px;
      height: 208px;
      border-radius: 4px;
      // background: url(//p0.meituan.net/travelcube/214b841….png);
      background-size: cover;
      background-position: 50%;
      max-width: 100%;
      height: 208px;
      margin-bottom: 11px;
      cursor: pointer;
    }
    .head-img {
      border: 2px solid #ffffff;
      height: 48px;
      width: 48px;
      position: absolute;
      bottom: -12px;
      right: 15px;
      z-index: 9;
      border-radius: 40px;
      // background-image: url(https://p0.meituan.net/mmc/35ad1f9….png);
      background-size: 100%;
      background-position: 50% 50%;
      background-repeat: no-repeat;
    }
  }
  .product-info {
    text-align: left;
    padding-bottom: 25px;
    .product-title {
      font-size: 16px;
      color: #222222;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin: 7px 0;
      font-weight: 400;
      width: 297px;
    }
    .sub-title {
      font-size: 12px;
      color: #999999;
      text-align: left;
    }
    .price {
      font-weight: 500;
      font-size: 22px;
      color: #ff6600;
      letter-spacing: -0.8px;
      padding: 4px 0;
      .price-icon {
        font-size: 14px;
      }
    }
  }
}
</style>