<template>
  <div class="page" v-document-click="documentClick" >
    <div class="op-area">
      <div class="choose-by-province">
        <h3 class="l-attr">按省份选择:</h3>
        <div class="choose-wrap">
          <div class="province-choose" @click="showProvince">
            <span v-if="!curProvince.provinceName">省份</span>
            <span v-else>{{curProvince.provinceName}}</span>
            <i class="iconfont icon-downarrow">&#xe615;</i>
            <div class="mt-provinces" :class="{active:provinceClass}">
              <p>省份</p>
              <div class="provinces-wrapper clearfix">
                <div class="province-col" v-for="i in colHandle(provinceList)" :key="i">
                  <span
                    class="mt-province"
                    v-for="item in sliceArr(provinceList,i)"
                    :key="item.provinceCode"
                    @click="chooseProv(item.provinceCode,$event)"
                  >{{item.provinceName}}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="city-choose" @click="showCity" :class="{allow:key}">
            城市
            <i class="iconfont icon-downarrow">&#xe615;</i>
            <div class="mt-cities" :class="{active:cityClass}">
              <p>城市</p>
              <div v-if="curProvince.cityInfoList" class="cities-wrapper clearfix">
                <div class="city-col" v-for="i in colHandle(curProvince.cityInfoList)" :key="i">
                  <!-- :href="`//${city.acronym}.meituan.com`" -->
                  <router-link
                    :to="{name:'home'}"
                    class="link mt-city"
                    v-for="city in sliceArr(curProvince.cityInfoList,i)"
                    :key="city.id"
                    @click.native="selectedCity(city,true)"
                  >{{city.name}}</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="search" v-document-click="documentClick">
        <h3 class="l-attr">直接搜索：</h3>
        <input
          type="text"
          placeholder="请输入城市中文或拼音"
          class="search-text"
          value
          @input="searchInput"
          @click="showSerach"
        />
        <div class="suggest-city-containner" v-if="searchClass">
          <div class="suggest-city-wapper">
            <div class="no-match-city" v-if="noMatch">未找到匹配的城市</div>
            <!-- :href="`//${item.acronym}.meituan.com`" -->
            <router-link
              :to="{name:'home'}"
              class="link city"
              v-for="city in searchList"
              :key="city.id"
              @click.native="selectedCity(city,true)"
            >{{city.name}}</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="citylist">
      <h3 class="l-attr">热门城市：</h3>
      <p class="r-info">
        <a href="//bj.meituan.com" class="link city">北京</a>
        <a href="//sh.meituan.com" class="link city">上海</a>
        <a href="//gz.meituan.com" class="link city">广州</a>
        <a href="//sz.meituan.com" class="link city">深圳</a>
        <a href="//tj.meituan.com" class="link city">天津</a>
        <a href="//xa.meituan.com" class="link city">西安</a>
        <a href="//cq.meituan.com" class="link city">重庆</a>
        <a href="//hz.meituan.com" class="link city">杭州</a>
        <a href="//nj.meituan.com" class="link city">南京</a>
        <a href="//wh.meituan.com" class="link city">武汉</a>
        <a href="//cd.meituan.com" class="link city">成都</a>
      </p>
    </div>
    <div class="citylist recent-city" v-if="recentCity.length>0">
      <h3 class="l-attr">最近访问：</h3>
      <p class="r-info">
        <a
          :href="`//${item.acronym}.meituan.com`"
          class="link city"
          v-for="item in recentCity"
          :key="item.id"
        >{{item.name}}</a>
      </p>
    </div>
    <div class="alphabet" v-if="sortCity.length>0">
      <h3 class="l-attr">按拼音首字母选择：</h3>
      <p class="r-info">
        <span class="letter" v-for="code in sortCity" :key="code[0].firstChar">
          <a :href="`#city-${code[0].firstChar}`">{{code[0].firstChar}}</a>
        </span>
      </p>
    </div>
    <div class="alphabet-city-area">
      <div
        class="city-area"
        :id="`city-${chars[0].firstChar}`"
        v-for="chars in sortCity"
        :key="chars[0].firstChar"
      >
        <span class="city-label">{{chars[0].firstChar}}</span>
        <span class="cities">
          <!-- :href="`//${city.acronym}.meituan.com`" -->
          <router-link
            :to="{name:'home'}"
            class="link city"
            v-for="city in chars"
            :key="city.id"
            @click.native="selectedCity(city,true)"
          >{{city.name}}</router-link>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import localApi from "@/ajax/localApi.js";
export default {
  data() {
    return {
      provinceClass: false,
      cityClass: false,
      searchClass: false,
      key: false,
      provinceList: [],
      curProvince: {},
      recentCity: [],
      searchList: [],
      noCity: true,
    };
  },
  directives: {
    "document-click": {
      inserted(el, binding, vnode) {
        document.addEventListener("click", binding.value);
      },
    },
  },
  methods: {
    showProvince($event) {
      $event.stopPropagation();
      this.cityClass && (this.cityClass = false);
      this.provinceClass = true;
    },
    showCity($event) {
      $event.stopPropagation();
      if (this.key) {
        // 选了省份才能选城市
        this.provinceClass && (this.provinceClass = false);
        this.cityClass = true;
      }
    },
    showSerach($event) {
      $event.stopPropagation();
      this.searchClass = true;
    },
    chooseProv(provinceCode, $event) {
      $event.stopPropagation();
      // this.curProvince = this.provinceList.find((item) => {
      const result = this.provinceList.find((item) => {
        return item.provinceCode == provinceCode;
      });
      this.curProvince = result;
      this.$store.commit("changeProvince", result);
      this.provinceClass = false;
      this.key = true;
    },
    documentClick() {
      this.provinceClass = false;
      this.cityClass = false;
      this.searchClass = false;
    },
    searchInput(e) {
      let str = e.target.value;
      const arr = [];
      if (str.length > 0) {
        const code = str.charCodeAt(0);
        if (code <= 255) {
          str = str.toLowerCase();
          const reg = new RegExp(`^${str}`);
          this.provinceList.forEach((list) => {
            const result = list.cityInfoList.filter((item) => {
              return reg.test(item.pinyin);
            });
            if (result.length > 0) {
              arr.push(...result);
            }
          });
        } else {
          const reg = new RegExp(`^${str}`);
          this.provinceList.forEach((list) => {
            const result = list.cityInfoList.filter((item) => {
              return reg.test(item.name);
            });
            if (result.length > 0) {
              arr.push(...result);
            }
          });
        }
      }
      this.searchList = arr;
    },
    selectedCity(city, type) {
      this.recentCity.push(city);
      this.$store.commit("changeCity", city);
      if (type) {
        this.provinceList.forEach((list) => {
          list.cityInfoList.forEach((item) => {
            if (city.id == item.id) {
              this.$store.commit("changeProvince", list);
              return;
            }
          });
        });
      }
    },
    colHandle(arr) {
      // console.log(arr);
      return Math.ceil(arr.length / 12);
    },
    sliceArr(arr, i) {
      i = i - 1;
      if (i * 12 > arr.length) {
        return arr.slice(i * 12);
      }
      return arr.slice(i * 12, i * 12 + 12);
    },
  },
  created() {
    localApi.getProvinceList().then((req) => {
      this.provinceList = req.data;
    });
  },
  computed: {
    noMatch() {
      if (this.searchList.length > 0) {
        return false;
      }
      return true;
    },
    sortCity() {
      if (!(this.provinceList.length > 0)) {
        return [];
      }
      const char = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "J",
        "K",
        "L",
        "M",
        "N",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "W",
        "X",
        "Y",
        "Z",
      ];
      const newCityList = [];
      for (let i = 0; i < char.length; i++) {
        newCityList.push([]);
      }
      this.provinceList.forEach((provin) => {
        //省份
        provin.cityInfoList.forEach((city) => {
          // 每个省的城市
          const index = char.indexOf(city.firstChar);

          if (index >= 0) {
            newCityList[index].push(city);
          } else {
            console.log(index);
          }
        });
      });
      // console.log(newCityList);
      return newCityList;
    },
  },
};
</script>
<style lang="scss" scoped>
.page {
  width: 1190px;
  box-sizing: border-box;
  margin: 20px auto 0;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  min-height: 1000px;
  padding: 20px;
}
.page .op-area {
  padding-bottom: 30px;
  border-bottom: 1px solid #e5e5e5;
}
.page .op-area .l-attr {
  vertical-align: middle;
}
.page .op-area .choose-by-province,
.page .op-area .search {
  display: inline-block;
  vertical-align: middle;
}
.page .op-area .choose-wrap {
  display: inline-block;
}
.page .op-area .choose-wrap .province-choose {
  padding: 10px 0 10px 10px;
  cursor: pointer;
  border-radius: 4px;
  vertical-align: middle;
  display: inline-block;
  width: 150px;
  height: 40px;
  box-sizing: border-box;
  border: 1px solid #e5e5e5;
  margin: 0 10px 0 20px;
  position: relative;
  font-size: 14px;
  color: #666;
}
.page .op-area .choose-wrap .city-choose {
  padding: 10px 0 10px 10px;
  cursor: not-allowed;
  border-radius: 4px;
  vertical-align: middle;
  display: inline-block;
  width: 150px;
  height: 40px;
  box-sizing: border-box;
  border: 1px solid #e5e5e5;
  margin: 0 20px 0 10px;
  position: relative;
  font-size: 14px;
  color: #666;
}
.page .op-area .choose-wrap .city-choose.allow {
  cursor: pointer;
}
.page .op-area .choose-wrap .icon-downarrow {
  color: #666;
  font-size: 30px;
  height: 40px;
  line-height: 40px;
  position: absolute;
  right: 4px;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  -webkit-transform: scale(0.35);
  -moz-transform: scale(0.35);
  -ms-transform: scale(0.35);
  -o-transform: scale(0.35);
  transform: scale(0.35);
}
.page .op-area .choose-wrap .mt-provinces {
  display: none;
  position: absolute;
  cursor: default;
  top: 45px;
  left: 0;
  width: 264px;
  height: 375px;
  padding: 20px 0 20px 15px;
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}
.page .op-area .choose-wrap .mt-provinces::before {
  content: "";
  position: absolute;
  top: -7px;
  left: 26px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid #e5e5e5;
  border-top: 0;
}
.page .op-area .choose-wrap .mt-provinces::after {
  content: "";
  position: absolute;
  top: -5px;
  left: 26px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid #fff;
  border-top: 0;
}
.page .op-area .choose-wrap .mt-provinces p {
  font-size: 16px;
  color: #ccc;
  margin-bottom: 11px;
}
.page .op-area .choose-wrap .mt-provinces .provinces-wrapper .province-col {
  float: left;
}
.page
  .op-area
  .choose-wrap
  .mt-provinces
  .provinces-wrapper
  .province-col
  .mt-province {
  cursor: pointer;
  font-size: 12px;
  color: #666;
  display: table;
  box-sizing: border-box;
  min-width: 40px;
  height: 20px;
  padding: 1px 8px;
  margin: 6px 38px 6px 0;
}
.page
  .op-area
  .choose-wrap
  .mt-provinces
  .provinces-wrapper
  .province-col
  .mt-province:hover {
  border-radius: 10px;
  background: #f4f4f4;
}
.page
  .op-area
  .choose-wrap
  .mt-provinces
  .provinces-wrapper
  .province-col
  .mt-province.active {
  background: linear-gradient(to bottom right, #ffd000, #ffbd00);
  border-radius: 10px;
  color: #222222;
}
.page .op-area .choose-wrap .mt-provinces.active {
  display: block;
}
.page .op-area .choose-wrap .mt-cities {
  display: none;
  position: absolute;
  cursor: default;
  top: 45px;
  left: 0;
  min-width: 150px;
  height: 375px;
  padding: 20px 0 20px 15px;
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}
.page .op-area .choose-wrap .mt-cities::before {
  content: "";
  position: absolute;
  top: -7px;
  left: 26px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid #e5e5e5;
  border-top: 0;
}
.page .op-area .choose-wrap .mt-cities::after {
  content: "";
  position: absolute;
  top: -5px;
  left: 26px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid #fff;
  border-top: 0;
}
.page .op-area .choose-wrap .mt-cities p {
  font-size: 16px;
  color: #ccc;
  margin-bottom: 11px;
}
.page .op-area .choose-wrap .mt-cities .cities-wrapper {
  display: table-row;
}
.page .op-area .choose-wrap .mt-cities .cities-wrapper .city-col {
  display: table-cell;
}
.page .op-area .choose-wrap .mt-cities .cities-wrapper .city-col .mt-city {
  cursor: pointer;
  font-size: 12px;
  color: #666;
  display: block;
  box-sizing: border-box;
  min-width: 40px;
  height: 20px;
  padding: 1px 8px;
  margin: 6px 38px 6px 0;
  white-space: nowrap;
}
.page
  .op-area
  .choose-wrap
  .mt-cities
  .cities-wrapper
  .city-col
  .mt-city:hover {
  color: #222222;
  font-weight: 500;
}
.page .op-area .choose-wrap .mt-cities.active {
  display: block;
}
.page .op-area .search {
  margin-left: 40px;
  position: relative;
}
.page .op-area .search .suggest-city-containner {
  position: absolute;
  cursor: default;
  top: 47px;
  left: 90px;
  border-radius: 4px;
}
.page .op-area .search .suggest-city-containner::before {
  content: "";
  position: absolute;
  top: -6px;
  left: 26px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid #e5e5e5;
  border-top: 0;
}
.page .op-area .search .suggest-city-containner::after {
  content: "";
  position: absolute;
  top: -5px;
  left: 26px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid #fff;
  border-top: 0;
}
.page .op-area .search .suggest-city-containner .city {
  cursor: pointer;
  font-size: 12px;
  color: #666;
  display: block;
  box-sizing: border-box;
  min-width: 40px;
  height: 20px;
  padding: 1px 8px;
  margin: 6px 38px 6px 0;
  white-space: nowrap;
}
.page .op-area .search .suggest-city-containner .city:hover {
  color: #222222;
  font-weight: 500;
}
.page .op-area .search .suggest-city-containner .suggest-city-wapper {
  overflow-y: scroll;
  min-width: 150px;
  max-height: 375px;
  padding: 0 20px 0 15px;
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
}
.page .op-area .search .no-match-city {
  // min-width: 150px;
  font-size: 12px;
  color: #666;
  display: block;
  box-sizing: border-box;
  min-width: 40px;
  padding: 1px 8px;
  padding: 10px 20px 10px 15px;
  background-color: #fff;
  // border: 1px solid #e5e5e5;
  border-radius: 4px;
}
.page .op-area .search .search-text {
  padding-left: 10px;
  width: 220px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  margin-left: 10px;
  font-size: 14px;
  color: #666;
  box-sizing: border-box;
}
.page h3.l-attr {
  font-size: 16px;
  color: #333;
  font-weight: 500;
  vertical-align: top;
  display: inline-block;
}
.page p.r-info {
  font-size: 14px;
  vertical-align: top;
  display: inline-block;
  margin-top: 2px;
}
.page .citylist {
  border-bottom: 1px solid #e5e5e5;
  padding: 30px 0;
}
.page .citylist .r-info {
  max-width: 900px;
}
.page .citylist .city {
  margin: 0 20px;
  color: #666;
  display: inline-block;
}
.page .citylist .city:hover {
  color: #222222;
  font-weight: 500;
}
.page .recent-city {
  padding-bottom: 20px;
}
.page .recent-city .city {
  margin-bottom: 10px;
}
.page .alphabet {
  padding: 30px 0;
}
.page .alphabet .r-info {
  max-width: 1000px;
}
.page .alphabet .letter {
  font-size: 15px;
  margin: 0 17px;
  color: #666;
  display: inline-block;
  margin: 0 10px;
  width: 25px;
  height: 25px;
  padding-top: 2px;
  cursor: pointer;
  box-sizing: border-box;
  text-align: center;
  border-radius: 50%;
  a {
    color: inherit;
  }
}
.page .alphabet .letter:hover {
  font-weight: 500;
  color: #222222;
  background: #f8f8f8;
}
.page .alphabet-city-area .city-area {
  padding: 13px 30px 13px 10px;
  border-radius: 10px;
  -webkit-transition: background-color 500ms;
  -ms-transition: background-color 500ms;
  transition: background-color 500ms;
}
.page .alphabet-city-area .city-area:hover {
  background: #f8f8f8;
}
.page .alphabet-city-area .city-area .city-label {
  box-sizing: border-box;
  vertical-align: top;
  padding-top: 10px;
  display: inline-block;
  text-align: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #222222;
  background: #ffd000;
  /* box-shadow: 0 4px 5px 0 rgba(39,178,164,0.22); */
}
.page .alphabet-city-area .city-area .cities {
  display: inline-block;
  max-width: 1065px;
}
.page .alphabet-city-area .city-area .cities .city {
  margin: 10px 20px;
  color: #666;
  display: inline-block;
  font-size: 14px;
}
.page .alphabet-city-area .city-area .cities .city:hover {
  color: #222222;
  font-weight: 500;
}
.page .alphabet-city-area .city-area .cities .sa-city {
  color: #ff6600;
}
</style>