<template>
  <div id="main-container">
    <el-container>
      <el-header style="height:70px">
        <el-menu
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
          style="position:relative"
        >
          <img src="../assets/logo.png" class="title-img">
          <el-menu-item :index="Url.indexPage" style="margin-left:120px">首页</el-menu-item>
          <el-submenu index>
            <template index="2" slot="title">
              <span style="font-size: 16px;">好友</span>
            </template>
            <el-menu-item :index="Url.friendPublish">好友动态</el-menu-item>
            <el-menu-item :index="Url.friendList">好友列表</el-menu-item>
          </el-submenu>

          <el-menu-item :index="Url.album">我的相册</el-menu-item>
          <el-menu-item :index="Url.publish">上传图片</el-menu-item>
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
      Url: Url
    };
  },
  methods: {
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

.loginButton {
  position: absolute;
  right: 20px;
}
.title-img {
  position: absolute;
  top: -65px;
  left: -30px;
  transform: scale(0.3);
  z-index: 9999;
}
.el-header {
  padding: 0;
}
</style>


