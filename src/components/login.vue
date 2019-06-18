<template>
    <div>
        <h1>Welcome to kuwoAlbum</h1>
        <button @click="loginClick">登录</button>

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
             this.$router.push({ name: Url.indexPage });
        }
    }
}
</script>

<style scoped>

</style>
</style>

