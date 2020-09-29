<template>
  <!-- 选择城市 -->
  <div class="box">
    <div class="box-pos">
      <i class="iconfont">&#xe611;</i>
      <span>{{$store.state.position.city.name}}</span>
      <router-link :to="{name:'city'}" class="chooseCity">选择城市</router-link>[
      <router-link to="/">{{$store.state.position.province.provinceName}}</router-link>]
      <!-- <router-link to="/">{{$store.state.position.city.name}}</router-link>
      <router-link to="/">选择</router-link>]-->
    </div>
    <!-- 登录 -->
    <div class="box-login" v-if='!$store.state.userName'>
      <router-link :to="{name:'login'}" class="user-up">立即登录</router-link>
      <router-link :to="{name:'register'}">注册</router-link>
    </div>
    <div class="box-login" v-else>
      {{$store.state.userName}}
    </div>
  </div>
</template>
<script>
import localApi from "@/ajax/eduApi.js";
export default {};
</script>
<style lang="scss" scoped>
// @import "@/assets/css/header/geo.scss";
.box {
  height: 40px;
  display: flex;
  justify-content: start;
  align-items: center;

  a {
    margin-right: 5px;
    color: #999;
  }

  a:hover {
    color: #fe8c00;
  }

  .box-pos {
    margin-right: 20px;
    line-height: 40px;
    .iconfont {
      font-size: 14px;
    }
    span {
      color: #666;
    }

    .chooseCity {
      background: #f4f4f4;
      border: 1px solid #e5e5e5;
      border-radius: 2px;
      color: #666;
      margin: 0 4px;
      padding: 0 2px;
    }

    a.chooseCity:hover {
      color: #fe8c00;
    }
  }

  .box-login {
    .user-up {
      margin: 0 10px;
      color: #fe8c00;
    }
  }
}
</style>