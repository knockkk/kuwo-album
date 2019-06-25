<template>
  <div id="edit-password" class="container">
    <div style="font-size:1.3em; font-weight:bold;margin:30px 0 20px 0">修改密码</div>

    <div class="profileBox">
      <div style="width:100%;margin-right:14%">
        <label style="font-size:16px;line-height:40px">旧密码</label>
        <el-input v-model="oldPwd" placeholder="输入旧密码"></el-input>
        <label style="font-size:16px;line-height:40px">新密码</label>
        <el-input v-model="newPwd" placeholder="输入新密码"></el-input>
        <label style="font-size:16px;line-height:40px">确认密码</label>
        <el-input v-model="secondNewPwd" placeholder="再次输入新密码"></el-input>
      </div>
    </div>
    <el-button type="info" class="confirmBtn">确认修改</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      oldPwd:"",
      newPwd:"",
      secondNewPwd: ""
    };
  },
  methods: {}
};
</script>
<style scoped>
.container {
  padding: 0 37% 250px 37%;
}
.confirmBtn {
  background-color: #545c64;
  border: #545c64;
  width: 150px;
  margin-top: 50px;
}
</style>