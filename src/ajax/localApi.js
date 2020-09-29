import axios from 'axios'

export default {
    getNavList() {
        return axios.get('./json/navList.json')
    },
    getNavDetail() {
        return axios.get('./json/detail.json')
    },
    getProvinceList() {
        return axios.get('./json/provincecityinfo.json')
    },
    getRecommed() {
        return axios.get('./json/recommed.json')
    },
}
