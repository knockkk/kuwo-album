
<template>
<div class="container">

  <div>
   <el-button type="primary" class="button-group" @click="changeStatus()">管理分组</el-button>
  <i class=" el-icon-circle-plus-outline" style="font-size:25px;color:red;  position: absolute;
 margin: 110px 820px; " v-if="showDeleteicon" ></i>
 </div>
 <div class="box3">
  <div class="collapse-container">         
  <el-collapse accordion v-model="activeName" >
    <el-collapse-item name="1">
      <template slot="title">
        <i class="el-icon-remove" style="width:30px;font-size:18px;color:red" v-if="showDeleteicon" ></i>
        <h3>我的好友</h3>   
       
      </template>
    <br><el-button type="danger" class="button-delet" icon="el-icon-remove-outline">删除好友</el-button><br><br>
    
    <div class="box"><span><img src="../assets/1.jpg" class="image"><br><h3>养花爱好者</h3></span></div>
     <div class="box"><span><img src="../assets/2.jpg" class="image"><br><h3>我爱摄影</h3></span></div>
     <div class="box"><span><img src="../assets/9.jpg" class="image"><br><h3>人生语录</h3></span></div>
     <div class="box"><span><img src="../assets/6.jpg" class="image"><br><h3>有始无终</h3></span></div>
     <div class="box"><span><img src="../assets/5.jpg" class="image"><br><h3>棒啊bng</h3></span></div>
     <div class="box"><span><img src="../assets/3.jpg" class="image"><br><h3>Apple watch</h3></span></div>
     
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
   <div class="box2"><img src="../assets/9.jpg" class="image2">   <h3 style="margin: 130px 0px 0px 0px">养花爱好者</h3></div>
  </div>
  </div>
</template>

<script>
export default {
   data() {
        return {
          activeName: '1',
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
 font-size: 15px;
}
.button-delet{
  position: absolute;
 margin:0px 600px; 
 width: 110px;
 font-size: 12px;
 height: 30px;
  vertical-align:middle;
  text-align: center;
   
    display: -webkit-flex; /* webkit内核的浏览器 Safari */
}
.collapse-container {
  /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
  -webkit-border-radius: 5px;/*兼容谷歌浏览器*/
  border-radius: 5px;/*圆角边框*/
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 150px 150px 0px 150px;
  width: 700px;
  padding: 0px;
  background: #fff;
}
.box {
  display: inline-block;
  width: 180px;
  height: 180px;
 
}
.box3{
  display: flex;
}
.box2 {
   
   display: flex;
  width: 300px;
  height: 350px;
  margin: 20px 0px ;
  border-left: 1px solid #cfcfcf;
}
.image {
  width: 100px;
  height: 100px;
  border-radius:70%;
}
.image2 {
  width: 70px;
  height: 70px;
  border-radius:70%;
margin: 110px 10px 0px 60px;
}
span {position: relative;
  display:block;
  width: 100px;
  height: 180px;
  
 }
span h3{width: 100px;bottom: 30px;text-align:center;}  
</style>
