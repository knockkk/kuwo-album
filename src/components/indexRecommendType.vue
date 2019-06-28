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
      @click="imageClick(item.imageid)"
    >
      <!-- <img :src="item" alt="image" class="displayImg"> -->
      <div style="position:relative">
        <img  :src="Url.imageSrc + item.imageid" alt="image" class="displayImg">
        <div class="out">
          <div class="userBox flex-row">
            <img :src="Url.imageSrc + item.avatarimgid" alt="头像" class="avatarImg">
            <div style="color:#fff; font-size:0.9em">{{item.nickname}}</div>
          </div>

          <span class="likeText">
            <img src="../assets/like.png" alt="喜欢" class="likeIcon">
            {{item.like}}
          </span>
        </div>
      </div>
    </div>
  </el-main>
</template>

<script>
import { imageTypeList, Url } from "../config/index";
export default {
  data() {
    return {
      Url:Url,
      imageList: [], //图片路径列表
      imageTypeId: null,
      imageTypeList: imageTypeList,
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
    this.getImageList();
  },
  methods: {
    /* 选择分类 */
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
      this.$axios
        .get(Url.getClassified + "?typeid=" + this.imageTypeId)
        .then(res => {
          console.log("请求某类别图片",res.data);
          this.imageList = res.data;
          console.log("this",this.imageList)
        })
        .catch(err => {
          console.log("error", err);
        });
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
.el-main {
  padding: 0 100px;
}
.displayImg {
  height: 300px;
  margin: 20px 20px;
  max-width:600px;
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

/* hover时出现补充信息 */
.out {
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  transition: opacity 1s;
}
.out:hover {
  opacity: 1;
}

/* hover时出现 */
.userBox {
  position: absolute;
  left: 30px;
  bottom: 30px;
}

.avatarImg {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 5px;
}
.likeText {
  position: absolute;
  right: 30px;
  bottom: 30px;
  color: #fff;
  font-size: 0.9em;
  background: rgba(0, 0, 0, 0.3);
  padding: 3px 6px;
}
.likeIcon {
  width: 15px;
  height: 15px;
}
</style>
