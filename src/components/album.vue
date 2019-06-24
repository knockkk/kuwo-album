<template>
  <div id="album" class="container">
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
      <el-menu-item :index="Url.albumManagement">
        <span style="font-size: 17px;">相册管理</span>
      </el-menu-item>
      <el-submenu index>
        <template slot="title">
          <span style="font-size: 17px;">{{sort}}</span>
        </template>
        <el-menu-item :index="`/album/albumSort/${1}`" @click="sort='已发布'">已发布</el-menu-item>
        <el-menu-item :index="`/album/albumSort/${2}`" @click="sort='未发布'">未发布</el-menu-item>
        <el-menu-item :index="`/album/albumSort/${3}`" @click="sort='按点赞数排序'">按点赞数排序</el-menu-item>
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
      sort:"智能排序",
      Url: Url
    };
  },
  mounted() {
   
  },
  methods: {
    sortClick(type){
      console.log(type,"cick")
    }
  }
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
