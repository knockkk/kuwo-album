<template>
  <el-container id="classify-recommend" class="container">
    <el-aside width="200px">
      <div style="margin-top:30px">
        <el-tag
          v-for="(item,index) in imageTypeList"
          :key="index"
          class="tag"
          @click="tagClick(index + 1)"
        >{{item}}</el-tag>
      </div>
    </el-aside>

    <el-main style="cursor:pointer;">
      <div
        v-for="(item,index) in classifiedData"
        v-bind:key="index"
        style="position:relative; display:inline-block"
        @click="tagClick(index + 1)"
      >
        <img :src="item.image" alt="image" class="displayImg">
        <span class="typeText">{{item.type}}</span>
      </div>
    </el-main>
    <router-view></router-view>
  </el-container>
</template>

<script>
import { imageTypeList, Url } from "../config/index";
export default {
  data() {
    return {
      imageTypeList: imageTypeList,
      imageType: null,
      classifiedData: [],
    };
  },
  mounted() {
    console.log("reco mounted");
    this.$axios.get(Url.getRecommend).then(res => {
      console.log(res.data)
    }).catch(err => {
      console.log("error",err)
    })
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
        type: "潜水",
        typeId: 8,
        image: require("../assets/8.jpg")
      },
      {
        type: "航拍",
        typeId: 7,
        image: require("../assets/7.jpg")
      },
      {
        type: "自然",
        typeId: 6,
        image: require("../assets/6.jpg")
      },

      {
        type: "其他",
        typeId: 9,
        image: require("../assets/9.jpg")
      }
    ];
  },
  methods: {
    tagClick(imageTypeId) {
      //1,2,3,...,9
      this.$router.push({
        name: "indexRecommendType",
        params: {
          id: imageTypeId
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin-left: 70px;
  margin-right: 70px;
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
