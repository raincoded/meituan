import axios from 'axios'

// 添加请求拦截器
// axios.defaults.baseURL = 'https://developer.duyiedu.com/'
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log(config);
    if (config.url.includes("https://developer.duyiedu.com/")) {
        config.params = {
            ...config.params,
            appkey: '2gedns_1581230938489'
        }
    } else {
        config.params = {
            ...config.params,
        }
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

export default {
    // 搜索框列表数据获取
    searchList() {
        return axios.get('/api/meituan/header/search.json')
    },
    // 查询最近热门搜索
    searchHotWords() {
        return axios.get('/api/meituan/header/searchHotWords.json')
    },
    // 查询最近热门城市
    getHotCity() {
        return axios.get('/api/meituan/city/hot.json')
    },
    // 返回最近搜索
    getRecentsSerach() {
        return axios.get('/api/meituan/city/recents.json')
    },
    // 获取当前位置信息
    getPosition() {
        return axios.get('/api/meituan/city/getPosition.json')
    },
    // 登录
    login(params) {
        return axios.get('/api/meituan/login', { params })
    },
    // 注册
    register(params) {
        return axios.get('/api/meituan/register', { params })

    }


}




