
<template>
  <div class="container">
    <div style="text-align:right" @click.self="showGroupManage=false">
      <el-button v-if="showGroupManage" @click="addGroupDialogVisible = true">新建分组</el-button>
      <el-button type="primary" style="width:120px" @click.stop="changeStatus()">管理分组</el-button>
    </div>

    <el-collapse accordion v-model="activeName" style="margin-top:20px">
      <el-collapse-item v-for="(item,index1) in groupList" :key="index1" :name="index1">
        <template slot="title">
          <i
            class="el-icon-remove"
            style="margin-right:10px;font-size:18px;color:red"
            v-if="showGroupManage && index1!=0"
            @click.stop="deleteClick(item.groupname, item.groupid)"
          ></i>
          <i
            class="el-icon-s-tools"
            style="margin-right:10px;font-size:18px;"
            v-if="showGroupManage && index1==0"
            @click.stop="deleteClick(item.groupname, item.groupid)"
          ></i>
          <div style="font-size:1.4em; font-weight:bold;margin:20px 0">{{item.groupname}}</div>
        </template>

        <div v-for="(item2,index2) in groupFriendList[index1]" :key="index2" class="avatarBox">
          <div v-if="item2">
            <div style="position:relative">
              <img :src="Url.imageSrc + item2.avaterimgid" alt="avatar" class="avatarImg">
              <div class="editOut">
                <i class="el-icon-delete"></i>
              </div>
            </div>

            <div class="nickname">{{item2.nickname}}</div>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>

    <!-- 新建分组dialog -->
    <el-dialog title="新建分组" :visible.sync="addGroupDialogVisible" width="30%" center>
      <span style="line-height:3 ">分组名称</span>
      <el-input v-model="inputGroupName" autofocus></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addGroupDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addGroupClick">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { Url } from "../config/index";
export default {
  data() {
    return {
      Url: Url,
      activeName: 0 /* collapse组件绑定展开项 */,
      showGroupManage: false /* 展示管理分组 */,
      groupList: [], //分组列表
      groupFriendList: [], //各分组中好友信息列表
      inputGroupName: "",
      addGroupDialogVisible: false
    };
  },
  mounted() {
    /* 请求分组信息 */
    this.getData();
  },
  methods: {
    /* 添加新分组 */
    addGroupClick() {
      // addGroupDialogVisible = true
      let params = {
        userid: this.$userId,
        groupname: this.inputGroupName
      };
      this.$axios
        .post(Url.addNewGroup, params)
        .then(res => {
          console.log("添加分组", res.data);
          /* 隐藏dialog */
          this.addGroupDialogVisible = false;
          (this.inputGroupName = ""),
            /* 更新信息 */
            this.getData();
          this.$message({
            type: "success",
            message: "新建分组成功!"
          });
        })
        .catch(err => {
          console.log("error", err);
        });
    },
    changeStatus() {
      this.showGroupManage = !this.showGroupManage;
    },
    deleteClick(groupName, groupId) {
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
        ).then(() => {
          /* 请求删除分组 */
          let params = {
            userid: this.$userId,
            groupid: groupId
          };
          this.$axios
            .post(Url.deleteGroup, params)
            .then(res => {
              console.log("删除分组", res.data);
              /* 更新信息 */
              this.getData();
              this.$message({
                type: "success",
                message: "删除成功!"
              });
            })
            .catch(err => {
              console.log("error", err);
            });
        });
      }
    },
    async getData() {
      await this.$axios
        .get(Url.getGroupList + "?userid=" + this.$userId)
        .then(res => {
          console.log("分组列表", res.data);
          this.groupList = res.data;
          /* 继续请求分组中好友信息 */
        })
        .catch(err => {
          console.log("error", err);
        });

      let groupList = this.groupList;
      for (let i = 0; i < groupList.length; i++) {
        await this.$axios
          .get(
            Url.getGroupMembers +
              "?userid=" +
              this.$userId +
              "&groupid=" +
              groupList[i].groupid
          )
          .then(res => {
            console.log("分组好友信息", res.data);
            this.groupFriendList.push(res.data);
          })
          .catch(err => {
            console.log("error", err);
          });
      }
      console.log(this.groupFriendList);
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
