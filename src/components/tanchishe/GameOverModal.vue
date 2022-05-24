<template>
    <div class="game-over-modal-wrapper">
        <div class="modal-content-wrapper">   
            <h1>游戏结束了!</h1>
            <button class="btn" @click="restartGame">再来一局</button>
        </div>
    </div>
</template>

<script setup lang="ts">

const emits = defineEmits(['restart'])

function restartGame(){
    emits('restart', true)
}

</script>

<style scoped lang="less">
@import '../../style/gameOverModal.less';
</style>