<template>
  <div v-if="detailList" class="detail-area">
    <div v-for="(detail,index) in detailList" :key="index">
      <div class="detail-title" :key="index">
        <h2>
          <router-link :to="detail.titles.title.href">{{detail.titles.title.item}}</router-link>
        </h2>
        <router-link :to="detail.titles.title.href">更多&gt;</router-link>
      </div>
      <div class="detail-content">
        <router-link :to="chr.href" v-for="(chr,i) of detail.content" :key="''+index+i" >{{chr.item}}</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    detailList: {
      typs: Object,
    },
  },
  mounted() {
    // console.log(this.detailList);
  },
};
</script>
<style lang="scss" scoped>
// @import '@/assets/css/container/navDetail.scss';
.detail-area {
  width: 100%;
  a {
    font-size: 12px;
    color: #999;
    font-weight: 400;
  }
  .detail-title {
    margin-top: 24px;
    height: 22px;
    line-height: 22px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 > a {
      font-size: 16px;
      font-weight: 500;
      color: #222;
    }
  }
  .detail-content {
    a {
      color: #999;
      font-size: 12px;
      line-height: 15px;
      display: inline-block;
      margin-right: 16px;
      margin-top: 10px;
      cursor: pointer;
    }
    a:hover {
      color: #fe8c00;
    }
  }
}
</style>