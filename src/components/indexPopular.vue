<template>
  <el-container id="popular" class="popularContainer">
    <el-main style="cursor:pointer;">
      <div
        v-for="(item, index) in popularData"
        v-bind:key="index"
        style="position:relative; display:inline-block"
      >
        <img
          :src="Url.imageSrc + item.imageid"
          alt="image"
          class="displayImg"
          @click="imageClick(item.imageid)"
        >
        <span class="likeText">
          <img src="../assets/like.png" alt="喜欢" class="likeIcon">
          {{item.like}}
        </span>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import { Url } from "../config/index";
export default {
  data() {
    return {
      Url: Url,
      popularData: []
    };
  },
  mounted() {
    /* 请求人气榜图片*/
    this.$axios
      .get(Url.getRanklist)
      .then(res => {
        console.log(res.data);
        this.popularData = res.data;
      })
      .catch(err => {
        console.log("error", err);
      });
  },
  methods: {
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
.popularContainer {
  margin-left: 120px;
  margin-right: 120px;
}
.displayImg {
  height: 300px;
  margin: 20px 20px;
  max-width:600px;
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
