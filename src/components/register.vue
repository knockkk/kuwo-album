<template>
  <el-form
    :model="formData"
    :rules="rules"
    ref="formData"
    label-position="left"
    label-width="0px"
    class="demo-ruleForm login-container"
  >
    <h3 class="title">Cool Wow Album</h3>

    <el-form-item prop="mailbox">
      <el-input type="text" v-model="formData.mailbox" placeholder="邮箱"></el-input>
    </el-form-item>
    <el-form-item prop="account">
      <el-input type="text" v-model="formData.account" placeholder="用户名"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="formData.password" placeholder="密码"></el-input>
    </el-form-item>

    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;">注册</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        mailbox: "",
        account: "",
        checkPass: ""
      },
      rules: {
        mailbox: [{ required: true, message: "请输入邮箱", trigger: "blur" }],
        account: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    registerClick() {
      console.log("login");
      this.$router.push(Url.register);
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-container {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 150px auto 0 auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 5px #cac6c6;
}
.title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
.remember {
  margin: 0px 0px 35px 0px;
}
</style>
