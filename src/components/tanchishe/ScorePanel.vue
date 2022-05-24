<template>
    <div class="score-wrapper">
        <div>
            SCORE：<span class="score">{{score}}</span>
        </div>
        <div>
            LEVEL：<span class="level">{{level}}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useScoreStore } from '../../store/module/scoreStore'

const {score, level}  = storeToRefs(useScoreStore())

</script>

<style scoped lang="less">
@import url('../../style/scorePanel.less');

</style>