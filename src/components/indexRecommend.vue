<template>
  <el-container id="classify-recommend" class="container">
    <el-aside width="200px">
      <div style="margin-top:30px">
        <el-tag
          v-for="(item,index) in imageTypeList"
          :key="index"
          class="tag"
          @click="tagClick(index + 1)"
        >{{item}}</el-tag>
      </div>
    </el-aside>
    <router-view></router-view>
  </el-container>
</template>

<script>
import { imageTypeList, Url } from "../config/index";
export default {
  data() {
    return {
      imageTypeList: imageTypeList,
      imageType: null
    };
  },
  mounted() {
    console.log("reco mounted");
  },
  methods: {
    tagClick(imageTypeId) {
      //1,2,3,...,9
      this.$router.push({
        name: "indexRecommendType",
        params: {
          id: imageTypeId
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin-left: 70px;
  margin-right: 70px;
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
.tag {
  cursor: pointer;
  margin: 10px 20px;
  font-size: 0.75em;
}
</style>
