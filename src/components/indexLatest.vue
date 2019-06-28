<template>
  <el-container id="latest" class="popularContainer">
    <el-main style="cursor:pointer;">
      <div
        v-for="item in latestData"
        v-bind:key="item.like"
        style="position:relative; display:inline-block"
      >
        <img
          :src="Url.imageSrc + item.ImageId"
          alt="image"
          class="displayImg"
          @click="imageClick(item.ImageId)"
        >
        <span class="timeText">{{item.time}}</span>
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
      latestData: []
    };
  },
  mounted() {
    this.$axios
      .get(Url.getLatest)
      .then(res => {
        console.log(res.data);
        this.latestData = res.data;
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
.timeText {
  position: absolute;
  right: 30px;
  bottom: 30px;
  color: #fff;
  font-size: 0.75em;
  background: rgba(0, 0, 0, 0.3);
  padding: 3px 6px;
}
</style>
