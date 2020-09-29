import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    position: {
      province: {
        "provinceCode": "370000",
        "provinceName": "山东"
      },
      city: {
        "id": 60,
        "name": "青岛",
        "pinyin": "qingdao",
        "acronym": "qd",
        "rank": "B",
        "firstChar": "Q"
      }
    },
    userName: ''
  },
  mutations: {
    changeProvince(state, payload) {
      state.position.province = payload;
    },
    changeCity(state, payload) {
      state.position.city = payload
    },
    setUseName(state, payload) {
      state.userName = payload
    }
  },
  actions: {

  },
  modules: {
  }
})
