<template>
  <!-- 中间轮播区域 -->
  <div class="box clearfix">
    <!-- 左侧列表导航 -->
    <left-nav class="leftBanner" />
    <!-- 右侧轮播图区域 -->
    <div class="rightBanner clearfix">
      <div class="home-header-links">
        <router-link v-for="item in hoomeLink" :key="item.title" to="/">{{item.title}}</router-link>
      </div>
      <div class="row clearfix">
        <!-- 轮播图 -->
        <banner class="banner item" />
        <!-- 休闲生活 -->
        <router-link to="/" class="item pic-1"></router-link>
        <!-- Hi，你好 -->
        <div class="login">
          <div class="avatar">
            <img src="//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt="avatar" />
          </div>
          <p class="user-name" v-if="!$store.state.userName">Hi!你好</p>
          <router-link v-if="!$store.state.userName" :to="{name:'register'}" class="btn">注册</router-link>
          <router-link v-if="!$store.state.userName" :to="{name:'login'}" class="btn">立即登录</router-link>
          <p class="user-name" v-else>Hi!{{ $store.state.userName }}</p>
        </div>
      </div>
      <div class="row clearfix">
        <!-- 住酒店 -->
        <router-link to="/" class="item pic-2"></router-link>
        <!-- 涨姿势 -->
        <router-link to="/" class="item pic-3"></router-link>
        <!-- 我是商家 -->
        <router-link to="/" class="item pic-4"></router-link>
        <!-- 下载 -->
        <div class="item download-app">
          <div class="qrcode-box">
            <img src="./../../../assets/img/download-qr.png" alt="下载APP" />
          </div>
          <p class="app-name">美团APP手机版</p>
          <p class="sl">
            <span class="red">1元起</span>
            <span class="gary">吃喝玩乐</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import leftNav from "./leftNav";
import banner from "./banner";
export default {
  components: {
    leftNav,
    banner,
  },
  data() {
    return {
      hoomeLink: [
        {
          title: "美团外卖",
        },
        {
          title: "猫眼电影",
        },
        {
          title: "美团酒店",
        },
        {
          title: "民宿／公寓",
        },
        {
          title: "商家入驻",
        },
        {
          title: "美团公益",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.box {
  width: 1190px;
  margin: 0 auto;
  .leftBanner {
    float: left;
  }
  .rightBanner {
    float: left;
    margin-left: 10px;
    position: relative;
    .home-header-links {
      position: absolute;
      left: 20px;
      top: -50px;
      height: 50px;
      line-height: 50px;
      z-index: 1;
      a {
        color: #333;
        margin: 20px;
        font-weight: bold;
      }
      a:hover {
        color: #ed1e24;
      }
      a:nth-child(3n + 1):hover {
        color: #fbc700;
      }
    }
    .item {
      float: left;
    }
    .banner {
      float: left;
      width: 550px;
      height: 240px;
    }
    .pic-1 {
      float: left;
      width: 150px;
      height: 240px;
      margin-left: 10px;
      margin-right: 10px;
      background: url("./../../../assets/img/休闲娱乐.jpg") no-repeat;
      background-color: #fff;
      background-size: 150px;
      background-position: 50%;
    }
    .login {
      float: left;
      width: 230px;
      height: 238px;
      background-color: #fff;
      border: 1px solid #e5e5e5;
      padding-top: 30px;
      position: relative;
      box-sizing: border-box;
      .avatar {
        width: 47px;
        height: 47px;
        border-radius: 30px;
        margin: 0px auto 4px auto;
        img {
          width: 47px;
          height: 47px;
          border-radius: 50%;
          border: 4px solid #e5e5e5;
        }
      }
      .user-name {
        padding-top: 10px;
        font-size: 16px;
        color: #222;
        text-align: center;
        font-weight: 500;
        white-space: nowrap;
        width: 6em;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 0 auto;
      }

      .btn {
        display: block;
        width: 118px;
        line-height: 38px;
        text-align: center;
        margin: 10px auto 15px auto;
        background: #fff;
        border: 1px solid #e5e5e5;
        border-radius: 40px;
        font-size: 14px;
        color: #333;
        transition: background-color 0.5s;
        &:hover {
          cursor: pointer;
          background-color: #f6f6f6;
          transition: background-color 0.5s;
        }
      }
    }
    .row {
      margin-top: 10px;
    }
    .pic-2,
    .pic-3,
    .pic-4 {
      height: 165px;
      margin-right: 10px;
      background-color: #fff;
      background-position: 50%;
      // margin-top: 10px;
      margin-right: 10px;
    }
    .pic-2 {
      background: url("./../../../assets/img/住酒店.png") no-repeat;
      width: 270px;
      background-size: 270px;
    }
    .pic-3 {
      background: url("./../../../assets/img/涨姿势.jpg") no-repeat;
      width: 270px;
      background-size: 270px;
    }
    .pic-4 {
      background: url("./../../../assets/img/我是商家.jpg") no-repeat;
      width: 150px;
      background-size: 150px;

      background-color: #fff;
    }
    .download-app {
      width: 228px;
      height: 165px;
      // margin-top: 10px;
      background-color: #fff;
      border: 1px solid #e5e5e5;
      .qrcode-box {
        width: 95px;
        height: 95px;
        margin: 10px auto 0 auto;
        img {
          width: 95px;
          height: 95px;
        }
      }
      .app-name {
        text-align: center;
        font-size: 16px;
        color: #222222;
        font-weight: 500;
      }
      .sl {
        text-align: center;
        font-size: 12px;
        font-weight: 500;
        margin-top: 2px;
        .red {
          color: #ec5330;
          margin-right: 5px;
        }
        .gray {
          color: #3f3f3f;
        }
      }
    }
  }
}
.clearfix::after {
  display: block;
  content: "";
  clear: both;
  // overflow: hidden;
}
</style>