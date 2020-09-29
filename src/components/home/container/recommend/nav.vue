<template>
  <div class="index-nav-container">
    <ul class="clearfix">
      <li class="title nav-item mf-shang-hei-regular">猜你喜欢</li>
      <li class="nav-item active">为你甄选最适合的</li>
    </ul>
  </div>
</template>
<script>
export default {};
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
      rgb(88, 174, 221) 2%,
      rgb(66, 191, 205) 97%
    )
    rgb(88, 174, 221);

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
}
</style>