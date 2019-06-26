<template>
  <div id="friend-publish" class="container">
    <div class="add" @click="addAlbumDialogVisible = true">
      <i class="el-icon-circle-plus add"></i>
      <span>添加相册</span>
    </div>

    <div>
      <div
        v-for="(item,index) in albumList"
        :key="index"
        class="albumBox"
        @click="albumClick(item.albumId)"
      >
        <div style="position:relative">
          <img :src="item.image" alt="image" class="image">
          <div v-if="item.albumName != '我的相册'" class="editOut">
            <div class="editAlbumBox">
              <div
                class="editItem"
                style="border-right:1.5px solid #fff"
                @click.stop="editAlbumDialogVisible = true"
              >编辑</div>
              <div class="editItem" @click.stop="deleteClick(item.albumName)">删除</div>
            </div>
          </div>
        </div>

        <div style="text-align:center;margin-bottom:20px">
          <div style="font-size:1.2em; font-weight:bold;line-height:40px">{{item.albumName}}</div>
          <div style="font-size:0.8em; color:#8d8d8d">{{item.count}}张图片</div>
        </div>
      </div>
    </div>

    <!-- 添加相册dialog -->
    <el-dialog title="新建相册" :visible.sync="addAlbumDialogVisible" width="30%" center>
      <span style="line-height:3 ">相册名称</span>
      <el-input v-model="inputAlbumName" autofocus></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addAlbumDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addAlbumDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 编辑相册名称dialog -->
    <el-dialog title="修改相册名称" :visible.sync="editAlbumDialogVisible" width="30%" center>
      <span style="line-height:3 ">相册名称</span>
      <el-input v-model="inputAlbumName" autofocus></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editAlbumDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editAlbumDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { Url } from "../config/index";
export default {
  data() {
    return {
      albumList: "",
      Url: Url,
      inputAlbumName: "",
      editAlbumDialogVisible: false, //编辑相册
      addAlbumDialogVisible: false //添加相册
    };
  },
  mounted() {
    this.albumList = [
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
    },
    deleteClick(albumName) {
      this.$confirm(
        "确认删除相册：" + albumName + "？（将同时删除该相册内图片）",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }
      )
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
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
