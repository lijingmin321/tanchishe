<template>
    <div class="home-wrapper">
        <div class="content">
            <h1>欢迎进入到《贪吃蛇》游戏页面</h1>
            <button class="join-game-btn" @click="joinGame">进入游戏</button>
        </div>
    </div>
    <p class="tip-content">请通过操作 ↑ ↓ ← → 按键,进行操作  </p>
</template>

<script setup lang="ts">
    import { useRouter } from 'vue-router'
    const router = useRouter() //只能在setup的方法中使用
    function joinGame(){
        router.push('/game')
    }
</script>

<style scoped lang="less">
@import url('../style/home.less');
</style>