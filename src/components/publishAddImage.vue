<template>
  <div id="friend-publish">
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
    >
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>

    <div style="text-align:center; color:#8d8d8d">
      <div style="font-size:1.2em;margin:10px 0 5px 0">添加图片</div>
       <div style="font-size:0.85em">大小：小于10MB，格式：JPEG/PNG</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: ""
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.avatar-uploader-icon {
  border: 1.5px dashed #d9d9d9;
  border-radius: 6px;
  font-size: 40px;
  color: #8c939d;
  width: 250px;
  height: 250px;
  line-height: 250px;
  text-align: center;
}
.avatar-uploader-icon:hover {
  border: 1.5px dashed var(--mainColor);
  color: var(--mainColor);
}
.avatar {
  width: 250px;
  height: 250px;
  display: block;
}
</style>
