import Vue from "vue";
import Router from "vue-router";
import { Url } from "../config/index";

import mainContainer from "../components/mainContainer";
import login from "../components/login";
import register from "../components/register";
import index from "../components/index";
import indexRecommend from "../components/indexRecommend";
import indexRecommendType from "../components/indexRecommendType";
import indexPopular from "../components/indexPopular";
import indexLatest from "../components/indexLatest";
import friendPublish from "../components/friendPublish";
import friendList from "../components/friendList";
import publish from "../components/publish";
import search from "../components/search";
import imageDetail from "../components/imageDetail";
import album from "../components/album";
import albumManagement from "../components/albumManagement";
import albumSort from "../components/albumSort";
import findPassword from "../components/findPassword";
import albumImages from "../components/albumImages";
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "main",
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
          children: [
            {
              path: Url.indexRecommend,
              component: indexRecommend
            },
            {
              path: Url.indexRecommendType,
              name: "indexRecommendType",
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
          path: Url.findPassword,
          component: findPassword
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
          name: "imageDetail",
          component: imageDetail
        },
        {
          path: Url.album,
          component: album,
          redirect: Url.albumManagement,
          children: [
            {
              path: Url.albumManagement,
              component: albumManagement
            },
            {
              path: Url.albumSort,
              component: albumSort
            }
          ]
        },
        {
          path: Url.albumImages,
          name: "albumImages",
          component: albumImages
        },
      ]
    }
  ]
});
