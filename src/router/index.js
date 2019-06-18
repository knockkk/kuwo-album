import Vue from 'vue'
import Router from 'vue-router';
import { Url } from '../config/index';

import login from '../components/login';
import index from '../components/index';
Vue.use(Router)
export default new Router ({
    routes: [
        {
			path: '/',
			name: Url.loginPage,
			meta: {
				keepAlive: true
			},
			component: login
		},
		{
			path: '/' + Url.indexPage,
			name: Url.indexPage,
			meta: {
				keepAlive: true
			},
			component: index
		},
    ]
})