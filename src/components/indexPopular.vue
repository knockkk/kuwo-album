<template>
  <el-container id="popular" class="popularContainer">
    <el-main style="cursor:pointer;">
      <div
        v-for="item in popularData"
        v-bind:key="item.like"
        style="position:relative; display:inline-block"
      >
        <img :src="item.image" alt="image" class="displayImg" @click="imageClick(item.imageId)">
        <span class="likeText">
          <img src="../assets/like.png" alt="喜欢" class="likeIcon">
          {{item.like}}
        </span>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      popularData: []
    };
  },
  mounted() {
    /* 请求人气榜图片*/
   this.popularData = [
          {
            image: require("../assets/5.jpg"),
            imageId: 1,
            like: 150
          },
          {
            image: require("../assets/2.jpg"),
            imageId: 2,
            like: 123
          },
          {
            image: require("../assets/8.jpg"),
            imageId: 3,
            like: 105
          },
          {
            image: require("../assets/1.jpg"),
            imageId: 4,
            like: 90
          },
          {
            image: require("../assets/3.jpg"),
            imageId: 5,
            like: 82
          },
          {
            image: require("../assets/6.jpg"),
            imageId: 6,
            like: 75
          },
          {
            image: require("../assets/7.jpg"),
            imageId: 7,
            like: 54
          },
          {
            image: require("../assets/4.jpg"),
            imageId: 8,
            like: 50
          },
          {
            image: require("../assets/9.jpg"),
            imageId: 9,
            like: 34
          }
        ]
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
