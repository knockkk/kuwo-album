import Vue from 'vue'
import Router from 'vue-router';
import { Url } from '../config/index';

import mainContainer from '../components/mainContainer';
import login from '../components/login';
import index from '../components/index';
import friendPublish from '../components/friendPublish';
import friendList from '../components/friendList';
import publish from '../components/publish'
import search from '../components/search'
Vue.use(Router)
export default new Router ({
    routes: [
        {
			path: '/',
			name: 'main',
			meta: {
				keepAlive: true
			},
			component: mainContainer,
			children: [
				{
					path: Url.indexPage,
					component: index
				},
				{
					path: Url.friendPublish,
					component: friendPublish
				},
				{
					path: Url.friendList,
					component: friendList
				},
				{
					path: Url.loginPage,
					component: login
				},
				{
					path: Url.publish,
					component: publish
				},
				{
					path: Url.search,
					component: search
				},
			]
		},
		// {
		// 	path: '/' + Url.indexPage,
		// 	name: Url.indexPage,
		// 	meta: {
		// 		keepAlive: true
		// 	},
		// 	component: index
		// },
		// {
		// 	path: '/',
		// 	name: Url.loginPage,
		// 	meta: {
		// 		keepAlive: true
		// 	},
		// 	component: login
		// },
    ]
})