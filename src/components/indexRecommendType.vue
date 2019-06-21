<template>
  <el-main style="cursor:pointer;">
    <!-- <div
      v-for="item in imageList"
      v-bind:key="item.typeId"
      style="position:relative; display:inline-block"
    >
      <img :src="item.image" alt="image" class="displayImg">
      <span class="typeText">{{item.type}}</span>
    </div> -->
    typeId = {{imageTypeId}}
  </el-main>
</template>

<script>
export default {
  data() {
    return {
      dataList: [],
      imageList: [],
      imageTypeId: null
    };
  },
  watch: {
    $route(to, from) {
      // 对路由变化作出响应
      this.imageTypeId = this.$route.params.id;
      console.log("changed");
    }
  },
  mounted() {
    this.imageTypeId = this.$route.params.id;
    this.imageList = [];
    /* 请求某类别图片 */
    // this.classifiedData = [
    //   {
    //     avatarImgId: 1,
    //     nickName: "",
    //     imageId: 1,
    //     like: 11
    //   }
    // ];
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
