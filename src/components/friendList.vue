
<template>
  <div class="container">
    <div style="text-align:right" @click.self="showGroupManage=false">
      <el-button v-if="showGroupManage" @click="addGroupDialogVisible = true">新建分组</el-button>
      <el-button type="primary" style="width:120px" @click.stop="changeStatus()">管理分组</el-button>
    </div>

    <el-collapse accordion v-model="activeName" style="margin-top:20px">
      <el-collapse-item v-for="(item,index) in groupList" :key="index" :name="index">
        <template slot="title">
          <i
            class="el-icon-remove"
            style="margin-right:10px;font-size:18px;color:red"
            v-if="showGroupManage && index!=0"
            @click.stop="deleteClick(item.groupName)"
          ></i>
          <i
            class="el-icon-s-tools"
            style="margin-right:10px;font-size:18px;"
            v-if="showGroupManage && index==0"
              @click.stop="deleteClick(item.groupName)"
          ></i>
          <div style="font-size:1.4em; font-weight:bold;margin:20px 0">{{item.groupName}}</div>
        </template>

        <div v-for="(item,index) in groupFriendList" :key="index" class="avatarBox">
          <div style="position:relative">
            <img :src="item.avatarImg" alt="avatar" class="avatarImg">
            <div class="editOut">
              <i class="el-icon-delete"></i>
            </div>
          </div>

          <div class="nickname">{{item.nickname}}</div>
        </div>
      </el-collapse-item>
    </el-collapse>

    <!-- 添加相册dialog -->
    <el-dialog title="新建分组" :visible.sync="addGroupDialogVisible" width="30%" center>
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
export default {
  data() {
    return {
      activeName: 0 /* collapse组件绑定展开项 */,
      showGroupManage: false /* 展示管理分组 */,
      groupList: [],
      groupFriendList: [],
      inputGroupName: "",
      addGroupDialogVisible: false
    };
  },
  mounted() {
    this.groupList = [
      {
        groupName: "我的好友",
        groupId: "233",
        count: 18
      },
      {
        groupName: "拍照达人",
        groupId: "23",
        count: 9
      }
    ];
    this.groupFriendList = [
      {
        userId: "12",
        avatarImg: require("../assets/3.jpg"),
        nickname: "王大锤"
      },
      {
        userId: "12",
        avatarImg: require("../assets/4.jpg"),
        nickname: "王大锤"
      },
      {
        userId: "12",
        avatarImg: require("../assets/1.jpg"),
        nickname: "王大锤"
      },
      {
        userId: "12",
        avatarImg: require("../assets/4.jpg"),
        nickname: "王大锤"
      },
      {
        userId: "12",
        avatarImg: require("../assets/4.jpg"),
        nickname: "王大锤"
      },
      {
        userId: "12",
        avatarImg: require("../assets/4.jpg"),
        nickname: "王大锤"
      }
    ];
  },
  methods: {
    changeStatus() {
      this.showGroupManage = !this.showGroupManage;
    },
    deleteClick(groupName) {
      if (groupName === "我的好友") {
        this.$message({
          type: "info",
          message: "默认分组无法删除"
        });
      } else {
        this.$confirm(
          "确认删除分组：" + groupName + "？（将同时删除该组内好友）",
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 700px;
  margin: 60px auto;
}
.el-collapse-item__header {
  height: 70px !important;
}
.button-delet {
  font-size: 12px;
}

.avatarBox {
  display: inline-block;
  margin: 10px 70px 20px 0;
}
.avatarImg {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.nickname {
  text-align: center;
  font-size: 1.2em;
  font-weight: bold;
  max-width: 100px;
}

/* 编辑框 */
.editOut {
  opacity: 0;
  width: 97%;
  height: 92%;
  position: absolute;
  bottom: 8px;
  right: 2px;
  transition: opacity 0.5s;
  color: #fff;
  font-size: 0.9em;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
}
.el-icon-delete {
  display: inline-block;
  position: absolute;
  bottom: 39px;
  left: 39px;
  font-size: 20px;
  cursor: pointer;
}
.editOut:hover {
  opacity: 1;
}
</style>
