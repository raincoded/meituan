<template>
  <!-- 搜索框区域 -->
  <div class="search">
    <!-- 搜索input框 -->
    <input
      v-model="searchValue"
      placeholder="搜索商家或地点"
      @focus="isBlur(1)"
      @blur="isBlur(-1)"
      @input="getList"
    />
    <!-- 搜索列表 -->
    <ul class="search-list" v-show="isShow">
      <div class="search-history clearfix" v-if="(history.length>0) ">
        <span class="history-lt">最近搜索</span>
        <span class="history-rf">删除搜索历史</span>
      </div>
      <template v-if="key">
        <li v-for="(list,index) of searchList.suggestItems" :key="index" @click="handle">
          <router-link to="/">{{ list.query }}</router-link>
        </li>
      </template>
      <template v-else>
        <li v-for="(list,index) of history" :key="index" @click="handle">
          <router-link to="/">{{ list }}</router-link>
        </li>
      </template>
    </ul>
    <!-- 点击按钮 -->
    <button type="primary" @click="btnHandle">
      <i class="iconfont">&#xe717;</i>
    </button>
  </div>
</template>
<script>
import meituanApi from "@/ajax/meituanApi.js";
export default {
  data() {
    return {
      searchValue: "",
      searchList: [1, 2, 3],
      isShow: false,
      key:false,
      value: 1,
      history: [],
    };
  },
  methods: {
    btnHandle() {
      console.log(this.searchValue);
    },
    isBlur(type) {
      if (type === 1) {
        this.isShow = true;
      } else if (type === -1) {
        if (this.searchValue) {
          setTimeout(() => {
            this.isShow = false;
          }, 200);
        } else {
          this.isShow = false;
        }
      }
    },
    handle() {
      console.log(this.value++);
    },
    getList(e) {
      meituanApi
        .getSearch({
          keyword: e.target.value,
        })
        .then((req) => {
          console.log(req.data.data);
          this.searchList = req.data.data;
        });
    },
  },
  computed:{
  }
};
</script>
<style lang="scss" scoped>
// @import "@/assets/css/header/input.scss";
.search {
  position: relative;
  width: 550px;
  height: 40px;
  background: #fff;
  display: flex;

  input {
    border: 1px solid #e5e5e5;
    border-right: none;
    border-radius: 4px 0 0 4px;
    line-height: 100%;
    box-sizing: border-box;
    display: inline-block;
    padding: 15px;
    font-size: 14px;
    height: 100%;
    background: transparent;
    width: 85.45%;
  }

  input:focus {
    outline: none;
  }

  button {
    width: 14.55%;
    height: 100%;
    line-height: 100%;
    background: #ffc300;
    border: 0;
    cursor: pointer;
    outline: none;
    .iconfont {
      font-size: 20px;
    }
  }

  .search-list {
    position: absolute;
    left: 0;
    top: 68px;
    width: 85.45%;
    min-height: 25px;
    // display: none;
    box-sizing: border-box;
    border: 1px solid #e5e5e5;
    border-top: none;
    background: #fff;
    z-index: 99;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    color: #999;
    font-size: 12px;
    text-align: left;
    .search-history {
      padding-top: 8px;
      font-size: 12px;
      width: 100%;
      overflow: hidden;
      height: 25px;
      box-sizing: border-box;
      text-align: left;
      padding-left: 12px;

      span {
      }
      .history-lt {
        float: left;
      }
      .history-rf {
        float: right;
        padding-right: 10px;
      }
    }
    li a {
      font-size: 12px;
      width: 100%;
      overflow: hidden;
      height: 25px;
      line-height: 25px;
      box-sizing: border-box;
      text-align: left;
      padding-left: 12px;
      color: #333;
    }

    li:hover {
      background: #f8f8f8;
    }

    li:hover a {
      color: #fe8c00;
    }
  }
}
</style>