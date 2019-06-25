<template>
  <div id="search" class="container">
    <el-input
      v-model="input"
      :placeholder="searchContent"
      suffix-icon="el-icon-search"
      class="inputBox"
      @keyup.enter.native="searchClick"
    ></el-input>
    <div class="resultBox"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchContent: this.$route.params.content || "输入用户名",
      input: ""
    };
  },
  methods: {
    searchClick() {
      console.log("search:", this.input);
      this.$router.push({
        name: "search",
        params: {
          content: this.input
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inputBox {
  width: 50%;
  margin: 30px 25%;
}
/* .el-input__inner {
  border: 1px solid #2d2d2d;
  border-radius: 0%;
} */
.resultBox {
  background-color: #f4f6f9;
  min-height: 400px;
}
</style>
