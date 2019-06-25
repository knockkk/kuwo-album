<template>
  <div class="container">
    <img src="../assets/7.jpg" class="topImage">
    <el-menu
      :default-active="$route.path"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#fff"
      text-color="#000"
      active-text-color="#f7b90a"
      style="margin-top:0px;text-align:center;"
      router
    >
      <el-menu-item :index="Url.editProfile">
        <span style="font-size: 17px;">个人资料</span>
      </el-menu-item>
      <el-menu-item :index="Url.editComment">
        <span style="font-size: 17px;">发表的评论</span>
      </el-menu-item>
      <el-menu-item :index="Url.editPassword">
        <span style="font-size: 17px;">修改密码</span>
      </el-menu-item>
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
      Url: Url
    };
  },
  methods: {}
};
</script>
<style scoped>
.topImage {
  width: 100%;
  height: 280px;
  object-fit: cover;
}

/* el-menu默认靠左边 */
.el-menu--horizontal > .el-menu-item {
  float: none;
  display: inline-block;
}
</style>