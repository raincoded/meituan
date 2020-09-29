<template>
  <!-- 头部右侧导航 -->
  <ul class="box">
    <li class="box-list">
      <router-link to="/">我的美团</router-link>
      <ul class="box-nav box-nav-first">
        <li>
          <router-link to="/">我的订单</router-link>
        </li>
        <li>
          <router-link to="/">我的收藏</router-link>
        </li>
        <li>
          <router-link to="/">抵用券</router-link>
        </li>
        <li>
          <router-link to="/">账户设置</router-link>
        </li>
      </ul>
    </li>
    <li class="box-list box-app">
      <router-link to="/">手机APP</router-link>
    </li>
    <li class="box-list box-aft">
      <span>商家中心</span>
      <ul class="box-nav box-nav-seconed">
        <li>
          <router-link to="/">美团餐饮商户中心</router-link>
        </li>
        <li>
          <router-link to="/">登录商家中心</router-link>
        </li>
        <li>
          <router-link to="/">美团智能收银</router-link>
        </li>
        <li>
          <router-link to="/">我想合作</router-link>
        </li>
        <li>
          <router-link to="/">抵用券</router-link>
        </li>
        <li>
          <router-link to="/">手机免费开店</router-link>
        </li>
        <li>
          <router-link to="/">餐饮代理商招募</router-link>
        </li>
        <li>
          <router-link to="/">商家申请开票</router-link>
        </li>
        <li>
          <router-link to="/">免费合作美团排队</router-link>
        </li>
      </ul>
    </li>
    <li class="box-list box-aft">
      <span>美团规则</span>
      <ul class="box-nav box-nav-first">
        <li>
          <router-link to="/">规则中心</router-link>
        </li>
        <li>
          <router-link to="/">规则目录</router-link>
        </li>
        <li>
          <router-link to="/">规则评议院</router-link>
        </li>
      </ul>
    </li>
    <li class="box-list box-aft">
      <span>网站导航</span>
      <div class="box-nav box-nav-second box-site" >
        <dl class="box-jiulv box-nav-third">
          <dt>酒店旅游</dt>
          <dd>
            <a href="https://www.meituan.com/iflight/" target="_blank">国际机票</a>
          </dd>
          <dd>
            <a href="https://www.meituan.com/train/" target="_blank">火车票</a>
          </dd>
          <dd>
            <a href="https://minsu.meituan.com/" target="_blank">民宿</a>
          </dd>
          <dd>
            <a href="https://hotel.meituan.com/dachangzizhixian/c20036/" target="_blank">经济型酒店</a>
          </dd>
          <dd>
            <a href="https://hotel.meituan.com/dachangzizhixian/c20037/" target="_blank">主题酒店</a>
          </dd>
          <dd>
            <a href="https://hotel.meituan.com/dachangzizhixian/c20038/" target="_blank">商务酒店</a>
          </dd>
          <dd>
            <a href="https://hotel.meituan.com/dachangzizhixian/c20039/" target="_blank">公寓</a>
          </dd>
          <dd>
            <a href="https://hotel.meituan.com/dachangzizhixian/c20040/" target="_blank">豪华酒店</a>
          </dd>
          <dd>
            <a href="https://hotel.meituan.com/dachangzizhixian/c20041/" target="_blank">客栈</a>
          </dd>
          <dd>
            <a href="https://hotel.meituan.com/dachangzizhixian/c20042/" target="_blank">青年旅社</a>
          </dd>
          <dd>
            <a href="https://hotel.meituan.com/dachangzizhixian/c20043/" target="_blank">度假酒店</a>
          </dd>
          <dd>
            <a href="https://hotel.meituan.com/dachangzizhixian/c20044/" target="_blank">别墅</a>
          </dd>
          <dd>
            <a href="https://hotel.meituan.com/dachangzizhixian/c20045/" target="_blank">农家院</a>
          </dd>
        </dl>
        <dl class="box-meishi box-nav-third">
          <dt>吃美食</dt>
          <dd>
            <a href="https://dachangzizhixian.meituan.com/meishi/c20004/" target="_blank">烤鱼</a>
          </dd>
          <dd>
            <a href="https://dachangzizhixian.meituan.com/meishi/c36/" target="_blank">特色小吃</a>
          </dd>
          <dd>
            <a href="https://dachangzizhixian.meituan.com/meishi/c54/" target="_blank">烧烤</a>
          </dd>
          <dd>
            <a href="https://dachangzizhixian.meituan.com/meishi/c40/" target="_blank">自助餐</a>
          </dd>
          <dd>
            <a href="https://dachangzizhixian.meituan.com/meishi/c17/" target="_blank">火锅</a>
          </dd>
          <dd>
            <a href="https://dachangzizhixian.meituan.com/meishi/c393/" target="_blank">代金券</a>
          </dd>
        </dl>
        <dl class="box-movie box-nav-third">
          <dt>看电影</dt>
          <dd>
            <a href="https://maoyan.com/films" target="_blank">热映电影</a>
          </dd>
          <dd>
            <a href="https://maoyan.com/cinemas" target="_blank">热门影院</a>
          </dd>
          <dd>
            <a href="https://maoyan.com/board" target="_blank">热映电影口碑榜</a>
          </dd>
          <dd>
            <a href="https://maoyan.com/board/6" target="_blank">最受期待电影</a>
          </dd>
          <dd>
            <a href="https://maoyan.com/board/1" target="_blank">国内票房榜</a>
          </dd>
          <dd>
            <a href="https://maoyan.com/board/2" target="_blank">北美票房榜</a>
          </dd>
          <dd>
            <a href="https://maoyan.com/board/4" target="_blank">电影排行榜</a>
          </dd>
        </dl>
        <dl class="box-app box-nav-third">
          <dt>手机应用</dt>
          <dd>
            <a href="https://i.meituan.com/mobile/down/meituan" target="_blank">
              <img
                class="appicon"
                src="//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png"
                title="美团app"
                alt="美团app"
              />
            </a>
          </dd>
          <dd>
            <a href="https://waimai.meituan.com/mobile/download/default" target="_blank">
              <img
                class="appicon"
                src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png"
                title="外卖app"
                alt="外卖app"
              />
            </a>
          </dd>
          <dd>
            <a href="https://minsu.meituan.com/app/" target="_blank">
              <img
                class="appicon"
                src="https://p0.meituan.net/travelcube/162c3308d9622f6d9cfaa49e60be4dca8573.png"
                title="民宿app"
                alt="民宿app"
              />
            </a>
          </dd>
          <dd>
            <a href="https://www.dianping.com/events/m/index.htm" target="_blank">
              <img
                class="appicon"
                src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png"
                title="点评app"
                alt="点评app"
              />
            </a>
          </dd>
          <dd>
            <a href="https://maoyan.com/app" target="_blank">
              <img
                class="appicon"
                src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png"
                title="猫眼app"
                alt="猫眼app"
              />
            </a>
          </dd>
        </dl>
      </div>
    </li>
  </ul>
</template>
<style lang="scss" scoped>
// @import "@/assets/css/header/nav.scss";
.box {
  height: 100%;
  display: flex;
  justify-content: flex-end;

  a {
    color: #999;
  }

  a:hover {
    color: #fe8c00;
  }

  .box-list {
    position: relative;
    padding: 0 14px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    box-sizing: border-box;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;

    .box-nav {
      position: absolute;
      top: 40px;
      background: #fff;
      display: none;
      z-index: 10011;
    }

    .box-nav-first {
      width: 100%;
      left: -1px;
      text-align: center;
      border: 1px solid #e5e5e5;
      border-top: 1px solid transparent;
    }

    .box-nav-seconed {
      position: absolute;
      right: -1px;
      top: 40px;
      width: 140%;
      border: 1px solid #e5e5e5;
      background: #fff;
      text-align: center;
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      box-sizing: content-box;
    }
    .box-site {
      right: -1px;
      width: 1200px;
      box-sizing: border-box;
      border-top-left-radius: 4px;
      padding: 30px 36px 36px 47px;
      border: 1px solid #e5e5e5;
      line-height: normal;
      display: none;
      a {
        display: block;
        padding: 5px 0;
      }
      .box-jiulv {
        width: 234px;
        dd {
          width: 33%;
          text-align: center;
          float: left;
        }
      }
      .box-nav-third {
        float: left;
        margin-right: 47px;
        dt {
          margin-bottom: 26px;
          font-size: 14px;
          color: #222222;
          font-weight: 500;
        }
      }

      .box-meishi {
        width: 156px;
        dd {
          width: 50%;
          text-align: center;
          float: left;
        }
      }
      .box-movie {
        width: 90px;
      }
      .box-app {
        float: right;
        dd {
          display: inline-block;
          margin: 0 8px;
          .appicon {
            width: 60px;
            height: 60px;
            border: 0;
          }
        }
      }
    }
  }

  .box-app {
    height: 40px;
    line-height: 40px;
    padding: 0 14px;
    background: none;
  }

  .box-list:not(.box-app):hover {
    background: #fff;
    border-color: #e5e5e5;
  }

  .box-list:hover.box-aft::after,
  .box-list:hover .box-nav {
    display: block;
  }

  .box-aft:hover::after {
    position: absolute;
    content: "";
    background: #fff;
    height: 2px;
    bottom: -1px;
    left: 0;
    width: 100%;
    z-index: 10012;
  }
}
</style>