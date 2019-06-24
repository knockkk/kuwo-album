<template>
  <div id="publish" class="flex-row container">
    <div class="addBox">
      <publish-Add-Image></publish-Add-Image>
    </div>
    <div class="detailBox">
      <label style="display:block; margin-bottom:10px">个人相册</label>
      <el-select v-model="form.albumName" placeholder="我的相册（默认）" style="width:100%">
        <el-option label="我的相册" value="my album"></el-option>
        <el-option label="家人" value="shanghai"></el-option>
        <el-option label="朋友" value="beijing"></el-option>
      </el-select>

      <label style="display:block; margin:20px 0 10px 0">描述</label>
      <el-input v-model="form.name"  maxlength="20" show-word-limit placeholder="写写照片的简短描述吧~" style="width:100%"></el-input>

      <div style="margin:20px 0">
        <label style="margin-right:10px">公开照片</label>
        <el-switch v-model="form.public"></el-switch>
      </div>

      <transition name="fade">
        <div v-if="form.public">
          <label style="display:block; margin-bottom:10px">选择类别</label>
          <el-select v-model="form.imageType" placeholder="图片类别" style="width:100%">
            <el-option
              v-for="(item,index) in imageTypeList"
              :key="index"
              :label="item"
              :value="index"
            ></el-option>
          </el-select>
        </div>
      </transition>

      <el-button type="primary" class="publishBtn">上传图片</el-button>
    </div>
  </div>
</template>

<script>
import publishAddImage from "./publishAddImage";
import { imageTypeList, Url } from "../config/index";
export default {
  components: {
    publishAddImage: publishAddImage
  },
  data() {
    return {
      form: {
        albumName: "",
        title: "",
        public: false,
        imageType:"",
      },
      imageTypeList: imageTypeList //图片标签列表
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  padding: 0 10%;
  /* background-color: #f4f6f9; */
}
.publishBtn {
  width: 80%;
  position: absolute;
  bottom: 50px;
}
label {
  font-size: 0.9em;
}
.addBox {
  /* background-color: #fff; */
  background-color: #f4f6f9;
  width: 70%;
  box-sizing: border-box;
  height: 100%;
  min-height: 600px;
  padding-top: 100px;
  text-align: center;
}
.detailBox {
  /* background-color: #fff; */
  background-color: #f4f6f9;
  position: relative;
  width: 30%;
  box-sizing: border-box;
  padding: 30px;
  min-height: 600px;
  border-left: 1px solid #cfcfcf;
}

/* 过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
