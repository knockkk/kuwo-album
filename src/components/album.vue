<template>
  <div id="album" class="container">
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="#f4f6f9"
      text-color="#000"
      active-text-color="#f7b90a"
      style="margin-top:0px;text-align:center;"
    >
      <el-menu-item :index="Url.albumManagent">
        <span style="font-size: 17px;">相册管理</span>
      </el-menu-item>
      <el-submenu index>
        <template slot="title">
          <span style="font-size: 17px;">智能排序</span>
        </template>
        <el-menu-item :index="Url.albumSort">已发布</el-menu-item>
        <el-menu-item index="2">未发布</el-menu-item>
        <el-menu-item index="3">按发布时间排序</el-menu-item>
        <el-menu-item index="4">按点赞数排序</el-menu-item>
      </el-submenu>
    </el-menu>

    <!-- 路由出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
import { Url } from "../config/index";
export default {
  data() {
    return {
      album: "",
      Url: Url
    };
  },
  mounted() {
    this.album = [
      {
        albumName: "我的相册",
        albumId: "12",
        image: require("../assets/5.jpg")
      },
      {
        albumName: "自拍",
        albumId: "11sda",
        image: require("../assets/7.jpg")
      }
    ];
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 100%;
  min-height: 800px;
  background-color: #f4f6f9;
}

.el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
  border: none;
}
.el-submenu.is-active .el-submenu__title {
  border: none;
}
.el-menu--horizontal > .el-menu-item.is-active {
  border: none;
}
.el-menu--horizontal > .el-menu-item {
  float: none;
  display: inline-block;
}
.el-menu--horizontal > .el-submenu {
  float: none;
  display: inline-block;
}
.el-menu-item {
  font-size: 16px;
}
</style>
