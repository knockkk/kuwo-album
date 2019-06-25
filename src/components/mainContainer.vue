<template>
  <div id="main-container">
    <el-container>
      <el-header style="height:70px">
        <el-menu
          :default-active="$route.path"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
          style="position:relative"
        >
          <img src="../assets/logo.png" class="title-img">
          <el-menu-item :index="Url.indexPage" style="margin-left:200px">首页</el-menu-item>
          <el-submenu index>
            <template index="2" slot="title">
              <span style="font-size: 16px;">好友</span>
            </template>
            <el-menu-item :index="Url.friendPublish">好友动态</el-menu-item>
            <el-menu-item :index="Url.friendList">好友列表</el-menu-item>
          </el-submenu>

          <el-menu-item :index="Url.album">我的相册</el-menu-item>
          <el-menu-item :index="Url.publish">上传图片</el-menu-item>

          <div class="searchBox" style="border:none">
            <el-input
              v-if="searchClickTime === 1"
              v-model="inputContent"
              placeholder="输入用户名称"
              style="margin-right:20px"
              autofocus
            ></el-input>
            <i class="el-icon-search" style="color:#fff;" @click="searchClick"></i>
          </div>

          <!-- <el-menu-item class="searchBox">
            <div  style="border:none">
              <el-input
                v-if="searchClickTime === 1"
                v-model="inputContent"
                placeholder="输入用户名称"
                style="margin-right:20px"
                autofocus
              ></el-input>
              <i class="el-icon-search" style="color:#fff;" @click="searchClick"></i>
            </div>
          </el-menu-item> -->

          <el-menu-item :index="Url.loginPage" class="loginButton">登录</el-menu-item>
        </el-menu>
      </el-header>

      <!-- 路由出口 -->
      <router-view></router-view>
    </el-container>
  </div>
</template>

<script>
import { Url } from "../config/index";
export default {
  data() {
    return {
      Url: Url,
      inputContent: "",
      searchClickTime: 0
    };
  },
  methods: {
    /* 键盘enter跳转实现？ */
    searchClick() {
      let clickTime = this.searchClickTime;
      clickTime = clickTime + 1;
      if (clickTime === 2) {
        //点击两次跳转
        /* 跳转路由 */
        clickTime = 0;
      }
      this.searchClickTime = clickTime;
    }
  }
};
</script>

<style scoped>
.el-menu {
  background: none;
  padding: 5px 0;
}
.el-menu.el-menu--horizontal {
  border: none;
}
.el-menu-item {
  font-size: 16px;
}

.searchBox {
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  right: 130px;
  height: 88%;
}

.loginButton {
  position: absolute;
  right: 40px;
}
.title-img {
  position: absolute;
  top: -42px;
  left: -150px;
  transform: scale(0.22);
  z-index: 9999;
}
.el-header {
  padding: 0;
}
</style>


