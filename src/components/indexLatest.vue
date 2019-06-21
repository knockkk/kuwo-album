<template>
  <el-container id="latest" class="popularContainer">
      <el-main style="cursor:pointer;">
        <div
          v-for="item in latestData"
          v-bind:key="item.like"
          style="position:relative; display:inline-block"
        >
          <img :src="item.image" alt="image" class="displayImg" @click="imageClick(item.imageId)">
          <span class="timeText">{{item.time}}</span>
        </div>
      </el-main>
    </el-container>
</template>

<script>
export default {
  data() {
    return {
      latestData: []
    };
  },
  mounted() {
      this.latestData = [
          {
            image: require("../assets/5.jpg"),
            imageId: 1,
            time: "10分钟前"
          },
          {
            image: require("../assets/2.jpg"),
            imageId: 2,
            time: "1小时前"
          },
          {
            image: require("../assets/8.jpg"),
            imageId: 3,
            time: "3小时前"
          },
          {
            image: require("../assets/1.jpg"),
            imageId: 4,
            time: "10小时前"
          },
          {
            image: require("../assets/3.jpg"),
            imageId: 5,
            time: "1天前"
          },
          {
            image: require("../assets/6.jpg"),
            imageId: 6,
            time: "1天前"
          },
          {
            image: require("../assets/7.jpg"),
            imageId: 7,
            time: "1天前"
          },
          {
            image: require("../assets/4.jpg"),
            imageId: 8,
            time: "1天前"
          },
          {
            image: require("../assets/9.jpg"),
            imageId: 9,
            time: "2天前"
          }
        ];

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
