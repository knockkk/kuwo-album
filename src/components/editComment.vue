<template>
  <div id="edit-comment" class="container">
    <div v-for="(item,index) in commentList" :key="index" class="itemBox">
      <div style="width:100%" class="flex-row">
        <div>
          <img :src="item.image" alt="image" style=" height:120px">
          <div><small style="color:#8d8d8d">发表于 {{item.time}}</small></div>
        </div>
        <div style="max-width:50%;margin:10px 0 0 20px">{{item.text}}</div>
      </div>
      <el-button type="danger" icon="el-icon-delete" circle style="width:40px;height:40px;"></el-button>
    </div>

    <div style="text-align:center; margin:100px 0 10px 0">
      <span style="font-size:1.1em; color:#6d6d6d">没有更多啦~</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      commentList: []
    };
  },
  mounted() {
    /* 根据albumId请求图片信息 */
    this.commentList = [
      {
        image: require("../assets/3.jpg"),
        imageId: 1,
        commentId: 123,
        text:
          "这张图有意境,拍摄角度很特别苏东坡安抚配送扫地经费破案扫频都放假安排上奥斯的经费盘",
        time: "11天前"
      },
      {
        image: require("../assets/4.jpg"),
        imageId: 3,
        commentId: 133,
        text: "这张图有意境,拍摄角度很特别",
        time: "1个月前"
      },
      {
        image: require("../assets/5.jpg"),
        imageId: 2,
        commentId: 143,
        text: "这张图有意境,拍摄角度很特别",
        time: "3个月前"
      }
    ];
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .container {
  background-color: #f4f6f9;
  padding: 0 7%;
} */
.container {
  padding: 30px 26% 150px 26%;
  background-color: #f4f6f9;
}
.itemBox {
  border-bottom: 1px solid #8d8d8d;
  padding: 10px 0;
  margin-bottom: 20px;
  font-size: 0.9em;
  line-height: 1.5;
  color: #000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
