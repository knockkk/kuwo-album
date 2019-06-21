<template>
  <div id="index">
    <nav class="tab">
      <h1 v-if="tabValue==1" class="tabItem tabItem-selected" @click="tabClick(1)">
        <li>分类推荐</li>
      </h1>
      <h1 v-else class="tabItem" @click="tabClick(1)">分类推荐</h1>
      <h1 v-if="tabValue==2" class="tabItem tabItem-selected" @click="tabClick(2)">
        <li>人气榜</li>
      </h1>
      <h1 v-else class="tabItem" @click="tabClick(2)">人气榜</h1>
      <h1 v-if="tabValue==3" class="tabItem tabItem-selected" @click="tabClick(3)">
        <li>最新发布</li>
      </h1>
      <h1 v-else class="tabItem" @click="tabClick(3)">最新发布</h1>
    </nav>

    <router-view></router-view>
  </div>
</template>


<script>
import { Url } from "../config/index";
export default {
  data() {
    return {
      tabValue: 1
    };
  },
  created(){
    // console.log("index created")
    let route = [Url.indexRecommend, Url.indexPopular, Url.indexLatest];
    let path = this.$route.path;
    // console.log(path);
    // console.log(route.indexOf(path));
    let pos = route.indexOf(path);
    this.tabValue = pos >= 0? pos + 1 : 1;
  },
  mounted() {
    
  },
  methods: {
    /* tab栏点击 */
    tabClick(tabValue) {
      /* 切换子路由 */
      this.tabValue = tabValue;
      let route = [Url.indexRecommend, Url.indexPopular, Url.indexLatest];
      this.$router.push(route[tabValue - 1]);
    }
  }
};
</script>

<style scoped>
.tab {
  text-align: center;
  margin: 30px 0;
}
.tabItem {
  display: inline-block;
  color: #8d8d8d;
  font-size: 1.4em;
  margin: 0 30px;
  cursor: pointer;
}
.tabItem-selected {
  color: #f7b90a;
}
</style>

