<template>
  <div id="friend-publish" class="container">
    <div v-for="(item,index) in dataList" :key="index" style="position:relative;" class="itemBox">
      <div style="text-align:center">
        <img :src="item.image" alt="image" class="displayImg" @click="imageClick(item.imageId)">
      </div>
      <div class="infoBox">
        <div class="flex-row">
          <img :src="item.avaterImg" alt="头像" class="avatar-img" style="margin-right:10px">
          <div class="flex-col">
            <div class="nickname-font" style="margin-bottom:3px">{{item.nickname}}</div>
            <small style="color:#8d8d8d">{{item.time}}</small>
          </div>
        </div>
        <div>
          <div class="flex-row-item-center" style="color:#8d8d8d">
            <small style="margin: 0 20px 2px 0">#{{item.type}}</small>
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
export default {
  data() {
    return {
      dataList: []
    };
  },
  mounted() {
    this.dataList = [
      {
        type: "宠物",
        image: require("../assets/3.jpg"),
        imageId: 1,
        avaterImg: require("../assets/logo.png"), //????
        nickname: "人鱼的眼泪", //????
        like: 23,
        time: "3天前",
        text: "夜空中最亮的星"
      },
      {
        type: "人像",
        image: require("../assets/5.jpg"),
        imageId: 1,
        avaterImg: require("../assets/logo.png"), //????
        nickname: "人鱼的眼泪", //????
        like: 23,
        time: "3天前",
        text: "夜空中最亮的星"
      },
      {
        type: "风景",
        image: require("../assets/2.jpg"),
        imageId: 1,
        avaterImg: require("../assets/logo.png"), //????
        nickname: "人鱼的眼泪", //????
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
  padding: 0 20%;
}
.displayImg {
  height: 400px;
  cursor: pointer;
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
