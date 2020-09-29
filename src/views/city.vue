<template>
  <!-- 首页 -->
  <div class="container" >
    <!-- 头部 -->
    <header>
      <com-header :index="false"/>
    </header>
    <!-- 中间区域 -->
    <div class="contain">
      <com-contain />
    </div>
    <!-- 底部 -->
    <footer>
      <com-footer />
    </footer>
  </div>
</template>
<script>
import comHeader from "@/components/home/header/index";
import comContain from "@/components/chooseCity/index";
import comFooter from "@/components/home/footer/default";
export default {
  components: {
    comHeader,
    comContain,
    comFooter,
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

}
footer {
  padding-top: 40px;
}
</style>