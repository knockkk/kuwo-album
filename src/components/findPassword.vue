 
<template id="registTemp">
  <div>
    <el-form
      :model="formData"
      :rules="rules"
      ref="formData"
      label-position="left"
      label-width="0px"
      class="demo-ruleForm login-container"
    >
      <h3 class="title">Cool Wow Album</h3>

      <el-form-item prop="account">
        <el-input type="text" v-model="formData.account" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input type="password" v-model="formData.checkPass" placeholder="邮箱"></el-input>
      </el-form-item>
      <el-form-item></el-form-item>

      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;">找回密码</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
import { Url } from "../config/index";
export default {
  data() {
    return {
      formData: {
        account: "",
        checkPass: ""
      },
      rules: {
        account: [{ required: true, message: "请输入账号", trigger: "blur" }],
        checkPass: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    registerClick() {
      console.log("login");
      this.$router.push(Url.register);
    },
    showBackPassword() {
      this.showBackPassword = !this.showBackPassword;
    }
  }
};
</script>
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
.right {
  position: absolute;
  right: 0px;
}
</style>



