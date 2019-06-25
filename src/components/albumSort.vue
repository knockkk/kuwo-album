<template>
  <div id="album-images" class="container">
    <div
      v-for="(item,index) in dataList"
      :key="index"
      class="itemBox"
      @click="imageClick(item.imageId)"
    >
      <div style="position:relative">
        <img :src="item.image" alt="image" class="image">
        <div class="editOut">
          <div class="editAlbumBox">
            <div class="editItem" style="border-right:1.5px solid #fff">设置</div>
            <div class="editItem">删除</div>
          </div>
        </div>
      </div>

      <div style="margin-bottom:20px;padding:0 10px;">
        <div class style="font-size:0.8em; color:#8d8d8d">

          <span v-if="item.type" style="margin-right:8px">#{{item.type}}</span>
          <i v-else class="el-icon-lock" style="margin-right:8px"></i>


          <span>{{item.time}}</span>
        </div>
        <div style="font-size:1em; color:#000;line-height:40px">{{item.text}}</div>
      </div>
    </div>

    <div style="text-align:center; margin:100px 0 50px 0">
      <span style="font-size:1.1em; color:#6d6d6d">没有更多啦~</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sortType: this.$route.params.type,
      dataList: []
    };
  },
  mounted() {
    /* 根据排序方式请求图片信息 */
    this.dataList = [
      {
        type: "",
        image: require("../assets/3.jpg"),
        imageId: 1,
        like: 23,
        time: "3天前",
        text: "夜空中最亮的星"
      },
      {
        type: "宠物",
        image: require("../assets/4.jpg"),
        imageId: 1,
        like: 23,
        time: "3天前",
        text: "夜空中最亮的星"
      },
      {
        type: "宠物",
        image: require("../assets/5.jpg"),
        imageId: 1,
        like: 23,
        time: "3天前",
        text: "夜空中最亮的星"
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
.container {
  background-color: #f4f6f9;
  padding: 0 7%;
}
.itemBox {
  display: inline-block;
  background-color: #fff;
  margin: 15px 1%;
  cursor: pointer;
   max-width: 27%;
}
.image {
  object-fit: cover;
  height: 240px;
  width: 400px;
  max-width: 100%;
}

/* 编辑框 */
.editOut {
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
  transition: opacity 1s;
  color: #fff;
  font-size: 0.9em;
}
.editAlbumBox {
  width: 100%;
  position: absolute;
  bottom: 0;
  background: rgba(128, 126, 126, 0.35);
}

.editOut:hover {
  opacity: 1;
}
.editItem {
  /* background: rgba(0, 0, 0, 0.3); */
  width: 50%;
  margin: 5px 0 10px 0;
  box-sizing: border-box;
  display: inline-block;
  text-align: center;
}

.editItem:hover {
  background: rgba(128, 126, 126, 0.8);
}
</style>
