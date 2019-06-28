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
    return qs.stringify(data)
}]
Vue.prototype.$axios = axios;

/* 存储用户信息 */
Vue.prototype.$userId = 13;
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
