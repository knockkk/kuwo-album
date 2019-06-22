<template>
  <div style="padding:0 100px" class="container">
    <div class="flex-row" style="background-color:#fff">
      <div class="imageBox" style="width: 70%;">
        <img :src="detail.image" alt="image" class="image">
      </div>
      <div class="flex-col" style="width:30%;min-width:300px;margin-top:20px">
        <div class="detailBox user">
          <div class="flex-row">
            <img :src="detail.avaterImg" alt="头像" class="avatar-img">
            <div class="nickname-font" style="margin-left:10px">{{detail.nickname}}</div>
          </div>
          <div style="margin-top:10px">
            <span class="followBtn">关注</span>
          </div>
          <!-- <el-button type="primary">关注</el-button> -->
        </div>

        <div class="detailBox work">
          <div class="textFont" style="margin-bottom:15px">{{detail.text}}</div>
          <div class="flex-row-item-center" style="color:#8d8d8d">
            <small style="margin: 0 20px 2px 0">#{{detail.type}}</small>
            <small>
              <img src="../assets/like.png" alt="喜欢" class="likeIcon">
              {{detail.like}}
            </small>
          </div>
        </div>

        <!-- <div class="commentBox">写评论</div> -->
        <el-button style="margin:30px 40px 20px 40px">喜欢</el-button>
        <el-button style="margin:0 40px">写评论</el-button>
      </div>
    </div>

    <div class="flex-col commentBottom">
      <p style="font-weight:bold; font-size:1.2em">{{detail.text}}</p>
      <div style="margin-bottom:30px">
        <small style="margin-right:20px">
          <span class="labelFont">发布：</span>
          {{detail.time}}
        </small>
        <small>
          <span class="labelFont">分类：</span>
          {{detail.type}}
        </small>
      </div>

      <small style="margin-bottom:10px">发表你的评论</small>
      <el-input type="textarea" v-model="commentText"></el-input>
      <div style="text-align:right;margin:10px 0">
        <el-button type="primary" style="width:100px; float:right">评论</el-button>
      </div>

      <!-- 评论 -->
      <div
        style="font-weight:bold; font-size:1.2em; color:#000; margin-bottom:20px"
      >{{detail.comment.length}}条评论</div>
      <div v-for="item in detail.comment" :key="item.commentId" class="flex-row commentBox">
        <img :src="item.avaterImg" alt="头像" class="avatar-img" style="margin-right:20px">
        <div class="flex-col">
          <div class="nickname-font" style="margin-bottom:10px">{{item.nickname}}</div>
          <div style="font-size:0.9em">{{item.text}}</div>
        </div>
      </div>

      <div style="text-align:center; margin:30px 0 50px 0">
        <span style="font-size:1.1em; color:#6d6d6d">没有更多啦~</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageId: "",
      detail: "", //图片具体信息
      commentText: "" //输入评论信息
    };
  },
  mounted() {
    this.imageId = this.$route.params.id;
    /* 通过imageId请求图片具体信息 */
    this.detail = {
      type: "人像", //图片类别
      imageId: this.imageId, //图片id
      avaterImg: require("../assets/logo.png"),
      nickname: "三更过客",
      image: require("../assets/" + this.imageId + ".jpg"),
      like: 55,
      time: "一个月前",
      text: "无言以对",
      comment: [
        //评论
        {
          commentId: 1,
          avaterImg: require("../assets/logo.png"),
          nickname: "凡人仙",
          text: "精彩拍摄，欣赏学习，赞票支持，谢谢分享！"
        },
        {
          commentId: 2,
          avaterImg: require("../assets/logo.png"),
          nickname: "Nismo",
          text: "这组照片特别有感觉"
        },
        {
          commentId: 3,
          avaterImg: require("../assets/logo.png"),
          nickname: "简亦photo",
          text: "精彩拍摄，期待回访￼￼"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.commentBox {
  border-top: 1px solid #cfcfcf;
  padding: 30px 0;
}
.container {
  background-color: #f4f6f9;
}
.image {
  height: 400px;
}
.imageBox {
  box-sizing: border-box;
  text-align: center;
  background-color: #fcfcfc;
  padding: 15px 0;
  border-right: 1px solid #cfcfcf;
}

.detailBox {
  box-sizing: border-box;
  display: flex;
  border-bottom: 1px solid #cfcfcf;
  padding: 20px 30px;
}
.user {
  flex-direction: row;
  justify-content: space-between;
}
.work {
  flex-direction: column;
}

/* 关注按钮 */
.followBtn {
  background-color: var(--mainColor);
  padding: 5px 20px;
  color: #000;
  font-size: 0.95em;
  cursor: pointer;
}
.followBtn:hover {
  background-color: #8d8d8d;
}
/*  */
.textFont {
  font-size: 1.1em;
  color: #000;
}
.likeIcon {
  width: 15px;
  height: 15px;
}
.commentBottom {
  background-color: #fdfefe;
  padding: 10px 12%;
  margin: 20px 0;
}
.labelFont {
  color: #8d8d8d;
}
</style>
