<template>
  <el-form
    :model="formData"
    :rules="rules"
    ref="formData"
    label-position="left"
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
      <el-button type="primary" style="width:100%;" @click="registerClick">注册</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { Url } from "../config/index";
export default {
  data() {
    return {
      formData: {
        mailbox: "",
        account: "",
        password: ""
      },
      userId: 13,
      rules: {
        mailbox: [{ required: true, message: "请输入邮箱", trigger: "blur" }],
        account: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    /* 点击注册 */
    registerClick() {
      // this.$router.push(Url.register);
      if (!this.formData.mailbox) {
        this.$message({
          type: "error",
          message: "请输入邮箱"
        });
      } else if (!this.formData.account) {
        this.$message({
          type: "error",
          message: "请输入用户名"
        });
      }else if (!this.formData.password) {
        this.$message({
          type: "error",
          message: "请输入密码"
        });
      }
      else{
        this.register();
      }
    },
    register() {
      let params = {
        nickname: this.formData.account,
        pwd: this.formData.password,
        email: this.formData.mailbox
      };
      console.log("params:", params);
      this.$axios
        .post(Url.postRegister, params)
        .then(res => {
          console.log(res.data);
          /* 用户名已被注册 */
          console.log(res.data.code);
          if (res.data.code === 10003) {
            this.$message({
              type: "error",
              message: "用户名已被注册"
            });
          } else if (res.data.code === 10001) {
            this.$message({
              type: "error",
              message: "邮箱格式错误"
            });
          } else if (res.data.code === 10002) {
            this.$message({
              type: "error",
              message: "系统错误，请稍后重试"
            });
          } else {
            /* 注册成功，将注册的用户名和id信息保存，自动登录 */
          }
        })
        .catch(err => {
          console.log("error", err);
          this.$message({
            type: "warn",
            message: "请求失败，请重新尝试"
          });
        });
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
</style>
