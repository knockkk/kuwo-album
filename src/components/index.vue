<template>
  <div id="index">
    <div class="tab">
      <h1 v-if="tabValue==1" class="tabItem tabItem-selected" @click="tabClick(1)">分类推荐</h1>
      <h1 v-else class="tabItem" @click="tabClick(1)">分类推荐</h1>
      <h1 v-if="tabValue==2" class="tabItem tabItem-selected" @click="tabClick(2)">人气榜</h1>
      <h1 v-else class="tabItem" @click="tabClick(2)">人气榜</h1>
    </div>

    <el-container v-if="tabValue==1" id="classify-recommend" class="container">
      <el-aside width="200px">
        <div style="margin-top:30px">
          <el-tag v-for="item in classifiedData" v-bind:key="item.typeId" class="tag">{{item.type}}</el-tag>
        </div>
      </el-aside>

      <el-main style="cursor:pointer;">
        <div
          v-for="item in classifiedData"
          v-bind:key="item.typeId"
          style="position:relative; display:inline-block"
        >
          <img :src="item.image" alt="image" class="displayImg">
          <span class="typeText">{{item.type}}</span>
        </div>
      </el-main>
    </el-container>
  </div>
</template>


<script>
export default {
  data() {
    return {
      tabValue: 1,
      classifiedData: []
    };
  },
  mounted() {
    /* 请求不同类别图片 */
    this.classifiedData = [
      {
        type: "人像",
        typeId: 1,
        image: require("../assets/1.jpg")
      },
      {
        type: "风景",
        typeId: 2,
        image: require("../assets/2.jpg")
      },
      {
        type: "宠物",
        typeId: 3,
        image: require("../assets/3.jpg")
      },
      {
        type: "生活",
        typeId: 4,
        image: require("../assets/4.jpg")
      },
      {
        type: "纪实",
        typeId: 5,
        image: require("../assets/5.jpg")
      },
      {
        type: "自然",
        typeId: 6,
        image: require("../assets/6.jpg")
      },
      {
        type: "航拍",
        typeId: 7,
        image: require("../assets/7.jpg")
      },
      {
        type: "潜水",
        typeId: 8,
        image: require("../assets/8.jpg")
      },
      {
        type: "其他",
        typeId: 9,
        image: require("../assets/9.jpg")
      }
    ];
    console.log(this.classifiedData);
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    tabClick(tabValue) {
      this.tabValue = tabValue;
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
.tab {
  text-align: center;
  margin: 30px 0;
}
.tabItem {
  display: inline-block;
  color: #8d8d8d;
  font-size: 1.4em;
  margin: 0 40px;
  cursor: pointer;
}
.tabItem-selected {
  color: #f7b90a;
}
.container {
  margin: 0 70px;
}
.displayImg {
  height: 300px;
  margin: 20px 20px;
}
.typeText {
  position: absolute;
  left: 30px;
  top: 30px;
  color: #fff;
  font-size: 0.9em;
  background: rgba(0, 0, 0, 0.3);
  padding: 3px 6px;
}
.tag {
  cursor: pointer;
  margin: 10px 20px;
  font-size: 0.75em;
}
</style>

