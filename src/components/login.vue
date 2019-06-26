 
<template id="registTemp">
  <div>
    <el-form
      :model="formData"
      :rules="rules"
      ref="formData"
      label-position="left"
      class="demo-ruleForm login-container"
    >
      <div class="title">Cool Wow Album</div>

      <el-form-item prop="account">
        <el-input type="text" v-model="formData.account" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="formData.password" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-link type="primary" style="margin-right:20px" @click="forgetClick()">忘记密码</el-link>
        <el-link type="primary" @click="registerClick">注册</el-link>
      </el-form-item>

      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click="loginClick">登录</el-button>
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
        password: ""
      },
      rules: {
        account: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    registerClick() {
      this.$router.push(Url.register);
    },
    forgetClick() {
      this.$router.push(Url.findPassword);
    },
    loginClick() {
      // this.$router.push(Url.register);
      if (!this.formData.account) {
        this.$message({
          type: "error",
          message: "请输入用户名"
        });
      } else if (!this.formData.password) {
        this.$message({
          type: "error",
          message: "请输入密码"
        });
      } else {
        this.login();
      }
    },
    login() {
      let params = {
        name: this.formData.account,
        pwd: this.formData.password
      };
      console.log("params:", params);
      this.$axios
        .post(Url.postLogin, params)
        .then(res => {
          console.log(res.data);
          if (res.data.state === 10002) {
            this.$message({
              type: "error",
              message: "用户名或密码错误"
            });
          } else if (res.data.state === 10001) {
            this.$message({
              type: "error",
              message: "系统错误，请稍后重试"
            });
          } else {
            /* 登录成功，将注册的用户名和id信息保存，自动登录 */
            this.$message({
              type: "success",
              message: "登录成功"
            });
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
  margin-bottom: 40px;
  text-align: center;
  font-size: 1.2em;
  font-weight: bold;
  color: #505458;
}
</style>

