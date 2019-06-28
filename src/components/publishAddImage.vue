<template>
  <div id="friend-publish" style="position:relative">
    <el-upload
      class="avatar-uploader"
      action="http://10.13.5.53:8000/album/api/v1/uploadimg"
      ref="upload"
      :show-file-list="false"
      :on-success="handleUploadSuccess"
      :before-upload="beforeUploadSuccess"
      name="img"
      :data="uploadData"
      :auto-upload="false"
      :on-change="filechange"
      id="demo"
    >
      <img v-if="imageUrl" :src="imageUrl" class="image">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>

    <div v-if="imageUrl" class="buttonBox">
      <div class="myButton" style="margin-right:25px" @click="dialogVisible=true">预览</div>
      <div class="myButton" style="margin-left:25px" @click="chooseFileClick">更换图片</div>
    </div>
    <div style="text-align:center; color:#8d8d8d">
      <div style="font-size:1.2em;margin:10px 0 5px 0">添加图片</div>
      <div style="font-size:0.85em">大小：小于10MB，格式：JPEG/PNG</div>
    </div>
    <el-dialog :visible.sync="dialogVisible">
      <img width="70%" :src="imageUrl" alt>
    </el-dialog>
  </div>
</template>

<script>
import { Url } from "../config/index";
export default {
  data() {
    return {
      Url: Url,
      dialogVisible: false,
      imageUrl: "",
      uploadData: {
        userid: "",
        text: "",
        albumid: "",
        type: "",
        ispublished: ""
      } //上传的其他信息
    };
  },
  methods: {
    /* 手动上传 */
    submitUpload(form) {
      this.uploadData.userid = this.$userId;
      this.uploadData.text = form.text;
      this.uploadData.albumid = form.albumId;
      this.uploadData.type = form.imageType;
      this.uploadData.ispublished = form.public ? 1 : 0;
      this.$refs.upload.submit();
    },
    /* input修改file文件时更新imageUrl */
    filechange(file, fileList) {
      console.log("file change", file);
      var reads = new FileReader();
      reads.readAsDataURL(file.raw);
      var that = this;
      reads.onload = function(e) {
        that.imageUrl = this.result;
      };
    },
    /* 上传成功时返回 */
    handleUploadSuccess(res, file) {
      console.log("res", res);
    },
    /* 上传前触发，用于限制图片格式 */
    beforeUploadSuccess(file) {
      const isJPG = file.type === "image/jpeg";
      const isPNG = file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 10;

      if (!isJPG || !isPNG) {
        this.$message.error("上传头像图片只能是 JPG 或 PNG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 10MB!");
      }
      return isJPG && isPNG && isLt2M;
    },
    /* js触发input click事件 */
    chooseFileClick() {
      document
        .querySelector("#demo")
        .getElementsByTagName("input")[0]
        .click();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myButton {
  display: inline-block;
  width: 80px;
  font-size: 0.7em;
  line-height: 1;
  padding: 8px 1px;
  background-color: #f4f6f9;
  color: #f7b90a;
  border: 1px solid #f7b90a;
  border-radius: 2em;
  cursor: pointer;
}
.myButton:hover {
  color: #fff;
  background-color: #f3a953;
  opacity: 0.6;
  border: none;
}
.buttonBox {
  margin-top: 10px;
}

.avatar-uploader-icon {
  border: 1.5px dashed #d9d9d9;
  border-radius: 6px;
  font-size: 40px;
  color: #8c939d;
  width: 250px;
  height: 250px;
  line-height: 250px;
  text-align: center;
  cursor: pointer;
}
.avatar-uploader-icon:hover {
  border: 1.5px dashed var(--mainColor);
  color: var(--mainColor);
}
.image {
  width: 250px;
  height: 250px;
  display: block;
  margin: 0 auto;
  cursor: pointer;
}
</style>
