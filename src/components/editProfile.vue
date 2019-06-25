<template>
  <div id="edit-profile" class="container">
    <div style="font-size:1.3em; font-weight:bold;margin:30px 0 20px 0">个人资料</div>

    <div class="profileBox">
      <div style="width:60%;margin-right:17%">
        <label style="font-size:16px;line-height:40px">昵称</label>
        <el-input></el-input>
        <label style="font-size:16px;line-height:40px">邮箱</label>
        <el-input></el-input>
      </div>

      <div class="flex-col" style="max-width:30%">
        <img src="../assets/4.jpg" alt="avatar" class="avatarImg">
        <el-button type="success" plain style="height:35px;padding:0">上传头像</el-button>
      </div>
    </div>
    <el-button  type="info" class="confirmBtn">确认修改</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
.container {
  padding: 0 30% 250px 30%;
}
.confirmBtn {
  background-color: #545c64;
  border:#545c64;
  width:150px;
  margin-top:50px;
}
/* .confirmBtn:hover {
  opacity: 0.8;
} */
.avatarImg {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 15px;
  margin-top:10px;
}
.profileBox {
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
}
</style>