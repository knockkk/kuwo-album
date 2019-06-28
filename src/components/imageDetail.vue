<template>
  <div style="padding:0 100px" class="container">
    <div class="flex-row" style="background-color:#fff">
      <div class="imageBox" style="width: 70%;">
        <img :src="Url.imageSrc + detail.imageid" alt="image" class="image">
      </div>
      <div class="flex-col" style="width:30%;min-width:300px;margin-top:20px">
        <div class="detailBox user">
          <div class="flex-row">
            <img :src="Url.imageSrc + detail.avatarimgid" alt="头像" class="avatar-img">
            <div class="nickname-font" style="margin-left:10px">{{detail.nickname}}</div>
          </div>
          <div style="margin-top:10px">
            <span class="followBtn" @click="followClick">关注</span>
          </div>
          <!-- <el-button type="primary">关注</el-button> -->
        </div>

        <div class="detailBox work">
          <div class="textFont" style="margin-bottom:15px">{{detail.text}}</div>
          <div class="flex-row-item-center" style="color:#8d8d8d">
            <small style="margin: 0 20px 2px 0">#{{imageTypeList[detail.type]}}</small>
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
          {{imageTypeList[detail.type]}}
        </small>
      </div>

      <small style="margin-bottom:10px">发表你的评论</small>
      <el-input type="textarea" v-model="commentText"></el-input>
      <div style="text-align:right;margin:10px 0">
        <el-button type="primary" style="width:100px; float:right">评论</el-button>
      </div>

      <!-- 评论 -->
      <div v-if="!detail.comments" style="text-align:center; margin:30px 0 50px 0">
        <span style="font-size:1.1em; color:#6d6d6d">还没有评论哦~</span>
      </div>
      <div v-else>
        <div
          style="font-weight:bold; font-size:1.2em; color:#000; margin-bottom:20px"
        >{{detail.comments.length}}条评论</div>
        <div v-for="item in detail.comments" :key="item.commentId" class="flex-row commentBox">
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

    <!-- 添加好友dialog -->
    <el-dialog title="添加至分组" :visible.sync="addGroupDialogVisible" width="30%" center>
      <span style="line-height:3 ">分组名称</span>
      <el-input v-model="inputGroupName" autofocus></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addGroupDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addGroupDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { imageTypeList, Url } from "../config/index";
export default {
  data() {
    return {
      Url: Url,
      imageTypeList: imageTypeList,
      imageId: this.$route.params.id,
      detail: "", //图片具体信息
      commentText: "" //输入评论信息
    };
  },
  mounted() {
    /* 通过imageId请求图片具体信息 */
    if (this.imageId) {
      this.$axios
        .get(Url.getImageDetail + "?imageid=" + this.imageId)
        .then(res => {
          console.log(res.data);
          this.detail = res.data;
        })
        .catch(err => {
          console.log("error", err);
        });
    }
  },
  methods: {
    /* 点击关注 */
    followClick() {
      let params = {
        userid: this.$userId,
        friendid: this.detail.userid,
        groupid:1
      };
      this.$axios
        .post(Url.addFriend, params)
        .then(res => {
          console.log("添加好友", res.data);
        })
        .catch(err => {
          console.log("error", err);
        });
    }
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
  max-width: 800px;
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
  opacity: 0.7;
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
