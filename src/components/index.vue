<template>
  <div id="index">
    <!-- <img src="../assets/bg.jpg" alt="bg" class="bgImg"> -->
    <!-- <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container> -->
    index
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.bgImg {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: -1;
}
</style>

