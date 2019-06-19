<template>
    <div>
        <h1>Welcome to kuwoAlbum</h1>
        <el-button @click="loginClick">登录</el-button>
    </div>
</template>

<script>
import { Url } from '../config/index';
export default {
    data() {
        return {

        }
    },
    methods: {
        loginClick() {
             console.log("login")
             this.$router.push(Url.indexPage);
        }
    }
}
</script>

<style scoped>

</style>
</style>

