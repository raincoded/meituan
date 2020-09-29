<template>
  <a
    :href="'//www.meituan.com/meishi/'+data.itemId+'/'"
    class="link link recommend-item"
    target="_blank"
  >
    <div class="card-container">
      <div class="recommend-card-wrapper">
        <div class="img-box">
          <img :src="data.imgUrl" class="image" />
        </div>
        <div class="info-box">
          <div class="title aligned" :title="data.title">{{data.title}}</div>
          <div class="score-line aligned">
            <div class="score">
              <div class="rate-stars">
                <ul class="rate-stars-ul rate-stars-dark">
                  <li>
                    <i class="iconfont">&#xe61b;</i>
                  </li>
                  <li>
                    <i class="iconfont">&#xe61b;</i>
                  </li>
                  <li>
                    <i class="iconfont">&#xe61b;</i>
                  </li>
                  <li>
                    <i class="iconfont">&#xe61b;</i>
                  </li>
                  <li>
                    <i class="iconfont">&#xe61b;</i>
                  </li>
                </ul>
                <ul class="rate-stars-ul rate-stars-light" :style="{width: score}">
                  <li>
                    <i class="iconfont">&#xe61b;</i>
                  </li>
                  <li>
                    <i class="iconfont">&#xe61b;</i>
                  </li>
                  <li>
                    <i class="iconfont">&#xe61b;</i>
                  </li>
                  <li>
                    <i class="iconfont">&#xe61b;</i>
                  </li>
                  <li>
                    <i class="iconfont">&#xe61b;</i>
                  </li>
                </ul>
              </div>
            </div>
            <div class="comment-number">{{data.commentNum}}个评价</div>
          </div>
          <div class="desc-line aligned">
            <div class="desc">{{data.areaName}}</div>
          </div>
          <div class="bottom-line aligned">
            <div class="price-box">
              <span>
                <span class="yuan">￥</span>
                <span class="price-number numfont">{{data.lowPrice}}</span>
                <span class="price-desc">起</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </a>
</template>
<script>
export default {
  props: ["data"],
  computed: {
    score() {
      return (this.data.score / 5)*100 + "%";
    },
  },
};
</script>
<style lang="scss" scoped>
.recommend-item {
  //margin-bottom: 20px;
  //padding: 0 10px;
  display: inline-block;
  width: 20%;
  box-sizing: border-box;
  vertical-align: middle;
  .card-container {
    padding: 10px;
    :hover {
      background: #f4f4f4;
      transition: background-color 500ms;
      border-radius: 4px;
    }
    .recommend-card-wrapper {
      width: 100%;
      box-sizing: border-box;
      .img-box {
        height: 0;
        width: 100%;
        padding-bottom: 56.25%;
        background-color: #f4f4f4;
        background-image: url(https://p0.meituan.net/travelcube/214b8411190e874781fe91dd3096236211567.png);
        background-size: cover;
        background-position: 50% 50%;
        border-radius: 4px;
        overflow: hidden;
        img {
          width: 100%;
          font-size: 0;
        }
      }
      .info-box {
        position: relative;
        margin-top: 10px;
        .title {
          font-size: 14px;
          color: #222222;
          line-height: 20px;
          width: 100%;
          margin: 0;
          font-weight: 500;
        }
        .aligned {
          font-size: 16px;
          line-height: 22px;
          width: 100%;
          height: 22px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          &.score-line {
            height: 24px;
            div {
              display: inline-block;
            }
            .rate-stars {
              height: 24px;
              position: relative;
              display: inline-block;
              .rate-stars-dark {
                color: #c3c3c3;
              }
              .rate-stars-ul {
                list-style: none;
                padding: 0;
                text-align: left;
                margin: 3px 0;
                white-space: nowrap;
                li {
                  display: inline-block;
                  padding: 0px 2px;
                }
              }
              .rate-stars-light {
                color: #ff9900;
                position: absolute;
                top: 0px;
                overflow: hidden;
                li {
                  display: inline-block;
                  padding: 0px 2px;
                }
              }
            }
            .comment-number {
              font-size: 12px;
              color: #999;
              height: 24px;
              line-height: 24px;
              margin-left: 10px;
            }
          }
          &.desc-line {
            .desc {
              font-size: 12px;
              color: #999999;
              width: 100%;
              height: 18px;
              line-height: 18px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              margin-top: 4px;
            }
          }
          &.bottom-line {
            height: 28px;
            .price-box {
              color: #ff6600;
              .yuan {
                font-size: 14px;
                font-weight: 700;
              }
              .price-number {
                font-size: 22px;
              }
              .numfont {
                font-family: "numbers" !important;
                letter-spacing: -0.5px;
              }
              .price-desc {
                font-size: 12px;
                margin-left: 4px;
                font-weight: 700;
              }
            }
          }
        }
      }
    }
  }
}
</style>