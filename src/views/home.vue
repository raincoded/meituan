<template>
  <!-- 首页 -->
  <div class="container">
    <!-- 头部 -->
    <header>
      <com-header :index="true"/>
    </header>
    <!-- 中间区域 -->
    <div class="contain">
      <com-container />
      <com-mao-yan />
      <com-ming-su />
      <com-recom />
      <com-foot-nav />
    </div>
    <!-- 底部 -->
    <footer>
      <com-footer />
    </footer>
  </div>
</template>
<script>
import comHeader from "@/components/home/header/index";
import comContainer from "@/components/home/container/index";
import comFooter from "@/components/home/footer/default";
import comMaoYan from "@/components/home/container/maoyan/index";
import comMingSu from "@/components/home/container/mingsu/index";
import comRecom from "@/components/home/container/recommend/index";
import comFootNav from "@/components/home/container/footNav";
export default {
  components: {
    comHeader,
    comContainer,
    comFooter,
    comMaoYan,
    comMingSu,
    comRecom,
    comFootNav
  },
  data(){
    return {
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  background: #f8f8f8;
}
header {
  height: auto !important;
}
header,
.contain,
footer {
  padding: 0;
}
.contain {
  // margin-top: -50px;
}
footer {
  padding-top: 40px;
}
</style>