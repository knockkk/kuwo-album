<template>
    <div>
        <h1>Welcome to kuwoAlbum</h1>
        <el-button @click="registerClick">登录</el-button>
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
        registerClick() {
             console.log("login")
             this.$router.push(Url.register);
        }
    }
}
</script>

<style scoped>

</style>
</style>

