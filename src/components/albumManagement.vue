<template>
  <div id="friend-publish" class="container">
    <div class="add">
      <i class="el-icon-circle-plus add"></i>
      <span>添加相册</span>
    </div>

    <div>
      <div
        v-for="(item,index) in album"
        :key="index"
        class="albumBox"
        @click="albumClick(item.albumId)"
      >
        <div style="position:relative">
          <img :src="item.image" alt="image" class="image">
          <div class="editOut">
            <div class="editAlbumBox">
              <div class="editItem" style="border-right:1.5px solid #fff">编辑</div>
              <div class="editItem">删除</div>
            </div>
          </div>
        </div>

        <div style="text-align:center;margin-bottom:20px">
          <div style="font-size:1.2em; font-weight:bold;line-height:40px">{{item.albumName}}</div>
          <div style="font-size:0.8em; color:#8d8d8d">{{item.count}}张图片</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Url } from "../config/index";
export default {
  data() {
    return {
      album: "",
      Url: Url
    };
  },
  mounted() {
    this.album = [
      {
        albumName: "我的相册",
        albumId: "12",
        image: require("../assets/5.jpg"),
        count: 1
      },
      {
        albumName: "自拍",
        albumId: "11sda",
        image: require("../assets/7.jpg"),
        count: 1
      },
      {
        albumName: "风景",
        albumId: "11sda",
        image: require("../assets/2.jpg"),
        count: 1
      },
      {
        albumName: "学校",
        albumId: "11sda",
        image: require("../assets/1.jpg"),
        count: 1
      }
    ];
  },
  methods: {
    albumClick(albumId) {
      this.$router.push({
        name: "albumImages",
        params: {
          id: albumId
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  padding: 0 7%;
}
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

.add {
  cursor: pointer;
  color: #f7b90a;
  font-size: 16px;
  margin: 10px 0 0 0.5%;
}
.albumBox {
  cursor: pointer;
  display: inline-block;
  width: 400px;
  background-color: #fff;
  margin: 15px 1%;
  max-width: 27%;
}
.image {
  object-fit: cover;
  height: 240px;
  width: 400px;
  max-width: 100%;
}
</style>
