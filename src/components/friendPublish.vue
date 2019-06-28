<template>
  <div id="friend-publish" class="container">
    <div v-for="(item,index) in dataList" :key="index" style="position:relative;" class="itemBox">
      <div style="text-align:center">
        <img :src="Url.imageSrc + item.imageid" alt="image" class="displayImg" @click="imageClick(item.imageid)">
      </div>
      <div class="infoBox">
        <div class="flex-row">
          <img :src="Url.imageSrc + item.avaterimgid" alt="头像" class="avatar-img" style="margin-right:10px">
          <div class="flex-col">
            <div class="nickname-font" style="margin-bottom:3px">{{item.nickname}}</div>
            <small style="color:#8d8d8d">{{item.time}}</small>
          </div>
        </div>
        <div>
          <div class="flex-row-item-center" style="color:#8d8d8d">
            <small style="margin: 0 20px 2px 0">#{{imageTypeList[item.type]}}</small>
            <small>
              <img src="../assets/like.png" alt="喜欢" style="width:15px;height:15px">
              {{item.like}}
            </small>
          </div>
        </div>
      </div>
      <div class="infoBox" style="padding-top:0">
        <div style="border-top:1px solid #cfcfcf; width:100%">
          <p style="font-weight:bold; font-size:1.3em;">{{item.text}}</p>
        </div>
      </div>
      <!-- <span class="likeText">
        <img src="../assets/like.png" alt="??" class="likeIcon">
        {{item.like}}
      </span>-->
    </div>
  </div>
</template>

<script>
import { imageTypeList, Url } from "../config/index";
export default {
  data() {
    return {
      Url: Url,
      imageTypeList: imageTypeList,
      dataList: []
    };
  },
  mounted() {
    this.$axios
      .get(Url.getFriendUpdata + "?userid=" + this.$userId)
      .then(res => {
        console.log("好友动态",res.data);
        this.dataList = res.data
      })
      .catch(err => {
        console.log("error", err);
      });
    // this.dataList = [
    //   {
    //     type: "宠物",
    //     image: require("../assets/3.jpg"),
    //     imageId: 1,
    //     avaterImg: require("../assets/logo.png"), //????
    //     nickname: "人鱼的眼泪", //????
    //     like: 23,
    //     time: "3天前",
    //     text: "夜空中最亮的星"
    //   },
    //   {
    //     type: "人像",
    //     image: require("../assets/5.jpg"),
    //     imageId: 1,
    //     avaterImg: require("../assets/logo.png"), //????
    //     nickname: "人鱼的眼泪", //????
    //     like: 23,
    //     time: "3天前",
    //     text: "夜空中最亮的星"
    //   },
    //   {
    //     type: "风景",
    //     image: require("../assets/2.jpg"),
    //     imageId: 1,
    //     avaterImg: require("../assets/logo.png"), //????
    //     nickname: "人鱼的眼泪", //????
    //     like: 23,
    //     time: "3天前",
    //     text: "夜空中最亮的星"
    //   }
    // ];
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
  padding: 0 20%;
}
.displayImg {
  height: 400px;
  cursor: pointer;
  max-width:800px;
}
.itemBox {
  width: 100%;
  margin-top: 40px;
  background-color: #fafafa;
}
.infoBox {
  background-color: #fff;
  padding: 20px 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
