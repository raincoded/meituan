<template>
  <div class="box" v-if="movie">
    <a :href="'https://maoyan.com/films/'+movie.id">
      <img :src="movie.img" class="film-img" />
      <img v-if="isSign" :src="isSign" class="film-mark" />
    </a>
    <div class="film-info">
      <p class="film-score">
        <b v-if="movie.mk">
          观众评
          <span>{{movie.mk}}</span>
        </b>
        <b v-else>
          <span>{{movie.wish}}</span>
          人想看
        </b>
      </p>
      <p class="film-name">{{movie.nm}}</p>
      <span class="buy-ticket">购票</span>
    </div>
  </div>
</template>
<script>
export default {
  props: ["movie"],
  data() {
    return {};
  },
  computed: {
    isSign() {
      if (!this.movie.ver) {
        return false;
      }
      if (this.movie.ver.includes("IMAX")) {
        return "//s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax.png";
      } else if (this.movie.ver.includes("3D")) {
        return "//s0.meituan.net/bs/fe-web-meituan/9d1997a/img/3d.png";
      }
      return false;
    },
  },
  mounted() {
    // console.log(this.movie);
  },
};
</script>
<style lang="scss" scoped>
.box {
  position: relative;
  float: left;
  height: 297px;
  width: 214px;
  background: red;
  .film-img {
    border-radius: 4px;
    width: 100%;
    border: 0px;
  }
  .film-mark {
    position: absolute;
    top: 10px;
    z-index: 99;
    left: -6px;
    height: 20px;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
    width: auto;
    border: 0px;
  }
  .film-info {
    height: 100px;
    width: 100%;
    position: absolute;
    bottom: 0;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    background-image: linear-gradient(
      -180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(29, 45, 55, 0.8) 99%
    );
    .film-score {
      font-size: 12px;
      color: #fff;
      text-align: left;
      margin-top: 48px;
      padding-left: 10px;
      font-weight: 500;
      span {
        font-size: 16px;
        color: #fd9827;
        font-weight: 500;
      }
    }
    .film-name {
      text-align: left;
      color: #fff;
      padding-left: 10px;
      font-size: 16px;
      white-space: nowrap;
      width: 6em;
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: 500;
    }
    .buy-ticket {
      background: #ff4949;
      border-radius: 100px;
      color: #fff;
      padding: 2px 12px 3px 12px;
      font-size: 14px;
      position: relative;
      top: -24px;
      cursor: pointer;
      line-height: 20px;
      text-align: center;
      float: right;
      right: 10px;
    }
  }
}
</style>