import Vue from 'vue'
import App from './App.vue'
import router from './router';
import ElementUI from 'element-ui';
import axios from 'axios';
import qs from 'qs';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);



//设置axios为form-data
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
axios.defaults.transformRequest = [function (data) {
    // let ret = ''
    // for (let it in data) {
    //   ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    // }
    // return ret
    return qs.stringify(data)
}]

// // 实例对象
// let instance = axios.create({
//   timeout: 6000,
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded'
//   }
// })

// // 请求拦截器
// instance.interceptors.request.use(
//   config => {
//     config.data = qs.stringify(config.data) // 转为formdata数据格式
//     return config
//   },
//   error => Promise.error(error)
// )
// axios.defaults.withCredentials = true;
Vue.prototype.$axios = axios;
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
