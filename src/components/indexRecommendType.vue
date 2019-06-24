<template>
  <el-main style="cursor:pointer;">
    <!-- 图片标签选择 -->
    <div style="padding-left:20px">
      <el-dropdown @command="handleCommand" style="font-size:16px; color:#000;">
        <span class="el-dropdown-link">
          {{imageTypeList[imageTypeId-1]}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-for="(item, index) in imageTypeList"
            :key="index"
            :command="index+1"
          >{{item}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <div
      v-for="(item,index) in imageList"
      v-bind:key="index"
      style="position:relative; display:inline-block"
      @click="imageClick(index+1)"
    >
      <div style="position:relative">
        <img :src="item" alt="image" class="displayImg">
        <div class="testout">
          <div class="testin">118人喜欢</div>
        </div>
      </div>
      <!-- <span class="typeText">{{item.type}}</span> -->
    </div>
  </el-main>
</template>

<script>
import { imageTypeList, Url } from "../config/index";
export default {
  data() {
    return {
      dataList: [],
      imageList: [], //图片路径列表
      imageTypeId: null,
      imageTypeList: []
    };
  },
  watch: {
    $route(to, from) {
      // 对路由变化作出响应
      this.imageTypeId = this.$route.params.id;
      this.getImageList();
      console.log("changed");
    }
  },
  mounted() {
    this.imageTypeId = this.$route.params.id;
    this.imageTypeList = imageTypeList;
    this.getImageList();
  },
  methods: {
    handleCommand(imageTypeId) {
      // this.$message("click on item " + command);
      this.imageTypeId = imageTypeId;
      this.$router.push({
        name: "indexRecommendType",
        params: {
          id: imageTypeId
        }
      });
    },
    getImageList() {
      /* 请求类别图片 */
      let imageList = [];
      for (let i = 0; i < 6; i++) {
        let id = this.imageTypeId + i;
        id = (id % 9) + 1;
        imageList.push(require("../assets/" + id + ".jpg"));
      }
      this.imageList = imageList;
    },
    imageClick(imageId) {
      this.$router.push({
        name: "imageDetail",
        params: {
          id: imageId
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.testout {
  opacity: 0;
  width:100%;
  height: 100%;
  position: absolute;
  right:0;
  top: 0;
  transition: opacity 0.5s;
}
.testout:hover {
  opacity: 1.0;
}
.testin {
  position: absolute;
  left: 30px;
  top: 30px;
  font-size: 0.9em;
  color: #fff;
  background: rgba(0, 0, 0, 0.3);
  padding: 3px 6px;
}


.el-main {
  padding: 0 100px;
}
.displayImg {
  height: 300px;
  margin: 20px 20px;
}
.typeText {
  position: absolute;
  left: 30px;
  top: 30px;
  color: #fff;
  font-size: 0.9em;
  background: rgba(0, 0, 0, 0.3);
  padding: 3px 6px;
}
</style>
