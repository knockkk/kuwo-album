<template>
<div class="container">
    <div>
<img src="../assets/1.jpg" class="image">

<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1"  style="margin-left:580px" @click="changeStatus1()">个人资料</el-menu-item>
  
    
    
      <el-menu-item index="2" @click="changeStatus2()">评论</el-menu-item>
      <el-menu-item index="3" @click="changeStatus3()">修改密码</el-menu-item>
     
  
</el-menu>
    </div>
  
    <div class="box1" >
     
        <el-form  label-position="left" label-width:5px class="demo-ruleForm login-container">
    <h4>个人资料</h4>
    <el-form-item label="原密码" >
      </el-form-item>
    <el-form-item >
     
      <el-input   ></el-input>
    </el-form-item>
     <el-form-item label="新密码" >
      </el-form-item>
    <el-form-item >
      <el-input ></el-input>
    </el-form-item>
     <el-form-item label="新密码" >
      </el-form-item>
    <el-form-item >
      <el-input ></el-input>
       </el-form-item>
      <el-form-item >
       <el-button type="primary"  style="width:30%;">确定修改</el-button>
       </el-form-item>
    </el-form>
    
       </div>
   
</div>

</template>
<script>
export default {
   data() {
        return {
            
        }
       
    },
    methods: {
      
  
    }
};
</script>
<style scoped>
.image {
  width: 1650px;
  height: 280px;
  
}

.collapse-container {
  /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/

  

  margin-right: 200px;
  width: 700px;



  background: #fff;
}

</style>

