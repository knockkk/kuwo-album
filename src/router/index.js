import Vue from 'vue'
import Router from 'vue-router';
import { Url } from '../config/index';

import mainContainer from '../components/mainContainer';
import login from '../components/login';
import register from '../components/register';
import index from '../components/index';
import indexRecommend from '../components/indexRecommend';
import  indexRecommendType from '../components/indexRecommendType';
import indexRecommendSelect from '../components/indexRecommendSelect';
import indexPopular from '../components/indexPopular';
import indexLatest from '../components/indexLatest';
import friendPublish from '../components/friendPublish';
import friendList from '../components/friendList';
import publish from '../components/publish';
import search from '../components/search';
import imageDetail from '../components/imageDetail';
import album from '../components/album';
Vue.use(Router)
export default new Router ({
    routes: [
        {
			path: '/',
			name: 'main',
			meta: {
				keepAlive: true
			},
			//重定向
            redirect: Url.indexRecommend,
			component: mainContainer,
			children: [
				{
					path: Url.indexPage,
					component: index,
					redirect: Url.indexRecommend,
					children:[
						{
							path: Url.indexRecommend,
							component: indexRecommend,
							// children: [
							// 	{
							// 		path: Url.indexRecommendType,
							// 		name: 'indexRecommendType',
							// 		component: indexRecommendType
							// 	},
							// 	{
							// 		path: Url.indexRecommendSelect,
							// 		component: indexRecommendSelect
							// 	}
							// ]
						},
						{
							path: Url.indexRecommendType,
							name: 'indexRecommendType',
							component: indexRecommendType
						},
						{
							path: Url.indexPopular,
							component: indexPopular
						},
						{
							path: Url.indexLatest,
							component: indexLatest
						}
					]
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
					path: Url.register,
					component: register
				},
				{
					path: Url.publish,
					component: publish
				},
				{
					path: Url.search,
					component: search
				},
				{
					path: Url.imageDetail,
					name: 'imageDetail',
					component: imageDetail
				},
				{
					path: Url.album,
					component: album
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