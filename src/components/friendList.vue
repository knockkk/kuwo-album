
<template>
<div>
   <el-button type="primary" class="button-group" @click="changeStatus()">管理分组</el-button>
  <i class=" el-icon-circle-plus-outline" style="font-size:25px;color:red;  position: absolute;
 margin: 110px 820px; " v-if="showDeleteicon" ></i>
  <el-collapse accordion class="demo-ruleForm collapse-container">
    <el-collapse-item>
      <template slot="title">
        <i class="el-icon-remove" style="width:30px;font-size:18px;color:red" v-if="showDeleteicon" ></i>
        <h3>我的好友</h3>   
       
      </template>
    <br><el-button type="danger" class="button-delet" icon="el-icon-minus">删除好友</el-button><br><br>
    
    <div class="box"><span><img src="../assets/9.jpg" class="image"><br><h3>养花爱好者</h3></span></div>
     <div class="box"><span><img src="../assets/9.jpg" class="image"><br><h3>养花爱好者</h3></span></div>
     <div class="box"><span><img src="../assets/9.jpg" class="image"><br><h3>养花爱好者</h3></span></div>
     <div class="box"><span><img src="../assets/9.jpg" class="image"><br><h3>养花爱好者</h3></span></div>
     <div class="box"><span><img src="../assets/9.jpg" class="image"><br><h3>养花爱好者</h3></span></div>
     <div class="box"><span><img src="../assets/9.jpg" class="image"><br><h3>养花爱好者</h3></span></div>
     
      </el-collapse-item>
    <el-collapse-item  >
      <template slot="title">
        <i class="el-icon-remove" style="width:30px;font-size:18px;color:red" v-if="showDeleteicon"></i>
        <h3>自定义分组1</h3>   
      </template>
    </el-collapse-item>
  <el-collapse-item  >
      <template slot="title">
        <i class="el-icon-remove" style="width:30px;font-size:18px;color:red" v-if="showDeleteicon"></i>
        <h3>自定义分组2</h3>   
      </template>
    </el-collapse-item>
      <el-collapse-item  >
      <template slot="title">
        <i class="el-icon-remove" style="width:30px;font-size:18px;color:red" v-if="showDeleteicon"></i>
        <h3>自定义分组3</h3>   
      </template>
    </el-collapse-item>
  </el-collapse>
  </div>

</template>

<script>
export default {
   data() {
        return {
          showDeleteicon:false
        }
       
    },
    methods: {
      
    changeStatus(){
            
              this.showDeleteicon= !this.showDeleteicon;

    }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button-group{
  position: absolute;
 margin: 90px 147px; 
 width: 120px;
}
.button-delet{
  position: absolute;
 margin:0px 600px; 
 width: 110px;
}
.collapse-container {
  /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
  -webkit-border-radius: 5px;/*兼容谷歌浏览器*/
  border-radius: 5px;/*圆角边框*/
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 150px 150px;
  width: 700px;
  padding: 0px;
  background: #fff;
}
.box {
  display: inline-block;
  width: 180px;
  height: 180px;
 
}

.image {
  width: 100px;
  height: 100px;
  border-radius:70%;
}
span {position: relative;
  display:block;
  width: 100px;
  height: 180px;
  
 }
span h3{width: 100px;bottom: 30px;text-align:center;}  
</style>
