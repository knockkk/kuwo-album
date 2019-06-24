<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import login from "./components/login";
export default {
  name: "app",
  components: {
    login
  }
};
</script>

<style>
/* .container{
  box-sizing: border-box;
  width:100%;
} */
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
body {
  --mainColor: #ffd048;
  margin: 0;
}
.flex-row {
  display: flex;
  flex-direction: row;
}
.flex-row-item-center {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.flex-col {
  display: flex;
  flex-direction: column;
}
/* 用户头像 */
.avatar-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #2c3e50;
}
.nickname-font {
  font-size: 0.95em;
  font-weight: bold;
  color: #2c2c2c;
  max-width: 120px;
  text-overflow: ellipsis;
}
</style>
