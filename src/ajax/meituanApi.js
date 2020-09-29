import axios from 'axios'

export default {
  //获取省份
  getProviceList() {
    return axios.get('/ptapi/getprovincecityinfo')
  },
  // 获取推荐
  getRecommed(){
    return axios.get('/ptapi/recommends')
  },
    // 搜索框列表数据获取
  getSearch(params){
    return axios.get('/ptapi/suggest',{
      params
    })
  }
}
